# Attacking WPA2

What's WPA2?

It's the encryption method.

It uses a PSK (Pre-Shared Key) and it uses the AES algorithm as well. AES uses the same key to encrypt and decrypt the data.

With that on mind, let's decrypt it. 


Before moving forward to it:

You would need the following:

- a wifi adapter(chipset atheros, chipset REALTEK): you need a wifi adapter that can be put into monitor mode and can inject packets.

- A linux distribution: Kali Linux, Arch Linux: you need a Linux OS that supports the wifi adapter and what you aim to do with it. On our case, a Linux OS where you can use tools such as iw and aircrack-ng. 


Now that you have these, let's start.

Connect the wifi adapter to your pc or laptop.

If you are running linux on your real pc, your pc would detect it automatically. 

If you have your Linux OS on visrtualization softwares such as Virtualbox, VmWare, etc. Just select your usb wifi adapter on the "Dispositivos" seccion at the top of your Linux virtual machine that is running on Virtualbox.

The command line

ip a : to see the interfaces and its ipv adressess

![[Pasted image 20261018234148.png]]


My wifi adapter:

![[Pasted image 20261018234205.png]]

Run the following:

```
which iw

which aircrack-ng
```

If they give you ist location on your system, it's ok. If not, install them. 


Run iw dev to see thw wireless devices available and the current mode

![[Pasted image 20261018234540.png]]

Let's put it on monitor mode

![[Pasted image 20261018234853.png]]

![[Pasted image 20261018234910.png]]


The attack surface

A general scan

airodump-ng: to copy or extract information (the MAC of close routers and AP)

![[Pasted image 20261018235137.png]]


![[Pasted image 20261018235153.png]]

You can stop it with space and copy all the important information of the target. 

![[Pasted image 20261018235417.png]]

Extract information of your target router, the desired handshake capture and the stations connected to the target. On my case, my own router. 
![[Pasted image 20261018235624.png]]

-c: channel

--bssid: the mac of the target router

-w: to definy the name of the "binario.cap" file


![[Pasted image 20261019002343.png]]

The stations are the clients connected to the router. One of them is my smarthphone. It has the mac address that starts with 12.

The deauth attack 

The deauth consist on sending deauth busrt packets to a singles devices or to all the devices connected to a router. For that, you can use the following commands: 


To all the devices connected to a router: 

![[Pasted image 20261019003300.png]]

To the target client (STATION)

![[Pasted image 20261019003707.png]]


> [!NOTE]
> The router/AP and your wifi adapter(the wlan interface) has to be on the same channel. 


However, it has to be the first time you run the deauth attack to this network. If not, it may fail. 

Thus, i used my jammer bluetooth/wifi that i created before.

My jammer bluettoth/wifi


![[Pasted image 20261019004349.png]]


it disconnect nearby bluettoth devices from nearby smartphones and disconnect the wifi of nearby devices as well. 

Thus, i decided to use this instead of the deauth attack.


![[Pasted image 20261019004724.png]]

Since we already know the MAC of my smartphone, just use this to get the handshake.

My smarthphone is connected to the wifi network. Let's use our jammer bluettoth/wifi to disconnect it from our network.

For that, i connected my jammer bluetooth/wifi to a batery for energy and it turned on and inmediately disconnect my smartphone an all other nearby devices from my network. 

![[Pasted image 20261019010021.png]]

> [!NOTE]
> Don't use the space here. 


 Then, i disconnected the jammer bluetooth/wifi.

Also, i turned my phone on and it connect to my wifi.

![[Pasted image 20261019010759.png]]

Then, my smartphone appears here again and i got the WPA handshake.

WPA handshake means that you got the password. However, it's encrypted. Thus, let's crack it. 

![[Pasted image 20261019011241.png]]


![[Pasted image 20261019011310.png]]

Successfully cracked. 
