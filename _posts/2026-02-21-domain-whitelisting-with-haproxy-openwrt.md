---
title: Building a Domain Whitelist for OpenWRT Using nftables and HAproxy
published: true
---

In this post, I will explain how to configure a domain-based whitelist on Openwrt 24.10 using nftables firewall and HAproxy as a transparent proxy server.

### Domain-based filtering on OpenWRT

Allowing/Blocking network traffic by IP address is trivial in OpenWRT using the built-in Firewall capabilites. But filtering traffic based on _domain name_ is more complicated, because OpenWRT routes traffic based on IP address ([OSI Layer 3](https://en.wikipedia.org/wiki/OSI_model#Layer_3:_Network_layer)), and the firewall isn't aware of domain names, which are an [OSI Layer 7](https://en.wikipedia.org/wiki/OSI_model#Layer_7:_Application_layer) concept.



#### DNS-based filtering
There are various ways to achieve domain-based traffic control using DNS. This is typically used for ad blocking. But this may be unsatisfactory as you have to ensure that all downstream clients are using OpenWRT as their DNS server, and this approach could be bypassed by hard-coding IP addresses or resolving them in some nonstandard way.

#### Classic forwarding proxy
Another option is to use a simple web proxy such as Tinyproxy, which provides controls for filtering traffic based on domain name. However, his would require explicit proxy configuration on all clients, because Tinyproxy cannot work as a transparent proxy; it expect the `CONNECT` keyword from clients.

#### HAproxy
HAproxy can be configured to work as a transparent proxy. This means we can use the `tproxy` statement in nftables, which will redirect web traffic to HAProxy. HAproxy can process traffic based on domain name, not only with HTTP (unencrypted traffic) but also with HTTPS by inspecting the SNI (Server Name Indication) of the TLS request.

### HAproxy setup
Install required packages:
```
opkg update
opkg install nano haproxy kmod-nft-tproxy
```

Add nftables firewall rules. Put this in `/etc/nftables.d/30-tproxy.nft`:
```
chain tproxy_prerouting {
    type filter hook prerouting priority mangle; policy accept;

    ip daddr 10.0.0.0/8 return
    ip daddr 172.16.0.0/12 return
    ip daddr 192.168.0.0/16 return

    iifname "br-lan" tcp dport 80  counter tproxy to :8080 meta mark set 1 accept
    iifname "br-lan" tcp dport 443 counter tproxy to :8443 meta mark set 1 accept
}

chain forward {
    type filter hook forward priority filter; policy accept;

    # Block all direct LAN > WAN web traffic except for private IP ranges (fail closed)
    ip daddr 10.0.0.0/8 accept
    ip daddr 172.16.0.0/12 accept
    ip daddr 192.168.0.0/16 accept

    iifname "br-lan" oifname "wan" tcp dport {80,443} reject
    iifname "br-lan" oifname "wan" udp dport 443 reject
}
```
Add these lines to `/etc/rc.local`:
```
ip rule add fwmark 1 lookup 100
ip route add local 0.0.0.0/0 dev lo table 100
```
This  ignores all non-routable private IP address ranges, but redirects any other traffic on TCP ports 80 and 443 to HAproxy. Also, it blocks any direct access from `br-lan` to `wan` (Make sure the interface names match your system.) Otherwise, if the HAproxy service is not running for any reason, traffic will not be filtered at all.

Make a file at `/etc/haproxy/whitelist_domains.lst` containing a list of whitelisted domains.
```
microsoft.com
google.com
```

Lastly, we need to configure HAproxy. Put this in `/etc/haproxy.cfg`
```
global
    daemon
    maxconn 2048
    log /dev/log local0 info

defaults
    log global
    timeout connect 5s
    timeout client  60s
    timeout server  60s

############################
# HTTPS (443) Transparent
############################

frontend https_in
    bind :8443 transparent
    mode tcp

    tcp-request inspect-delay 5s
    tcp-request content set-var(sess.sni) req.ssl_sni if { req.ssl_hello_type 1 }

    acl allowed_ssl var(sess.sni) -i -m end -f /etc/haproxy/whitelist_domains.lst

    # Set action label
    tcp-request content set-var(sess.action) str(ALLOWED) if allowed_ssl
    tcp-request content set-var(sess.action) str(BLOCKED) if !allowed_ssl

    # Elevate log level only for blocked
    tcp-request content set-log-level err if !allowed_ssl

    log-format "HTTPS %[var(sess.action)] SRC=%ci SNI=%[var(sess.sni)]"

    tcp-request content reject if { req.ssl_hello_type 1 } !allowed_ssl
    tcp-request content accept if { req.ssl_hello_type 1 }

    default_backend https_out

backend https_out
    mode tcp
    server forward 0.0.0.0:0

############################
# HTTP (80) Transparent
############################

frontend http_in
    bind :8080 transparent
    mode http

    http-request set-var(txn.host) hdr(host)

    acl allowed_http var(txn.host) -i -m end -f /etc/haproxy/whitelist_domains.lst

    # Set action label
    http-request set-var(txn.action) str(ALLOWED) if allowed_http
    http-request set-var(txn.action) str(BLOCKED) if !allowed_http

    # Elevate log level only for blocked
    http-request set-log-level err if !allowed_http

    log-format "HTTP %[var(txn.action)] SRC=%ci HOST=%[var(txn.host)]"

    http-request deny if !allowed_http

    default_backend http_out

backend http_out
    mode http
    server forward 0.0.0.0:0
```
The `-m end` flag is used when loading the list of whitelisted domains from file. This means a domain will be allowed if it _ends_ with one of the entries in the whitelist file. So it will allow all subdomains of the whitelisted domain.

Reboot the router to apply settings.

HAproxy will write logs to OpenWRT's local logger indicating domains that were ALLOWED or BLOCKED and the source IP address of the request.

These logs can be viewed in real-time using `logread -f | grep haproxy`
```
local0.info haproxy[6277]: HTTPS ALLOWED SRC=192.168.1.204 SNI=maps.google.com
local0.err haproxy[6277]: HTTPS BLOCKED SRC=192.168.1.204 SNI=lh3.googleusercontent.com
local0.info haproxy[6277]: HTTPS ALLOWED SRC=192.168.1.204 SNI=fonts.gstatic.com
```


