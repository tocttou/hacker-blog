---
title: Integrating CardDAV server with FreePBX for Caller ID
published: true
---

When helping a client migrate his business from a cell phone to a FreePBX VOIP phone system, I was looking for a good contact management system. The main requirement was a way to display the names of saved contacts on the IP phones for incoming calls.

Many VOIP handsets have an LDAP phonebook feature. When a call comes in, they can query an LDAP server with the phone number and display the name if a contact with a matching number is found.

### L2CPBG
Most contact management systems I am aware of support the CardDAV protocol but not LDAP. So I was happy to discover [this project](https://projects.shbe.net/projects/l2cpbg). L2CPBG = LDAP-to-CardDAV Phone Book Gateway. This lightweight utility acts as a bridge between LDAP-capable phones and a CardDAV server such as Synology Contacts or Nextcloud Contacts.

The project isn't opensource, but the developer is responsive and helpful. There is a free version with limitations, and the dev is happy to provide a license key for testing.

I installed the `.deb` package on a Ubuntu machine and edited the settings in `/etc/l2cpbg.conf`, most of which are self-explanatory.

Here is where the LDAP server and CardDAV sources are configured:
```
[ldap]
  host      = "0.0.0.0"
  port      = 1389
  base      = "dc=l2cpbg, dc=com"

[ldap.bind]
  dn   = "cn=phone"
  pass = "my_secure_password"

[dav]
  server       = "http://url-to-shared-addressbook-in-synology-contacts"
  user         = "synology_username"
  pass         = "secure_synology_password"

addressbooks = "My Contacts"
```
### Configuring LDAP on handsets
You can configure VOIP handsets to query the L2CPBG server. This allows Number>Name lookups for incoming calls as well as Name>Number searches from the handset (depending on your particular handset's features).

Config details vary among phone manufacturers and models. Here is a screenshot from the web interface of a Grandstream WP825 handset:

![LDAP Phonebook configs on GS WP825](/assets/images/ldap-phonebook-configs.png)

### Configuring LDAP on FreePBX
In my case, I encountered inconsistencies in the LDAP phonebook implementation across multiple phones. Also, the PBX was unaware of the LDAP phonebook, so Call Detail Records did not reflect the correct name.

So I pivoted to configuring LDAP lookup directly within FreePBX. It turns out, this is not very difficult to do.

I'm using FreePBX 17. In the web console, navigate to Admin > CID Superfecta.

Click on the schema named `Default`. This will show the available methods for Caller ID lookup. Find the LDAP entry, click Enable, then use the arrow to move it to the top of the list.

![LDAP CID](/assets/images/ldap-entry.PNG)

Then click the wrench icon to edit settings. Here is a screenshot of the configs I used:

![LDAP config on FreePBX](/assets/images/LDAP-config-FreePBX.PNG)

Apparently the Host field requires a domain; it does not work with an IP address. So I used `l2cpbg.com` which matches the LDAP configurations in L2CPBG. Then I added an entry to `/etc/hosts` on the FreePBX machine to map `l2cpbg.com` to the ip address of the L2CPBG server.

`nano /etc/hosts`
```
10.8.0.7    l2cpbg.com
```
Then on the handset, I uncheck the box so it will not do a lookup for incoming calls. Rather FreePBX does a single lookup and then uses the returned name (if there is a match) to over-write the Caller ID information before sending the call out to the phones. This also has the advantage of showing the correct name in the Call Log in FreePBX.





