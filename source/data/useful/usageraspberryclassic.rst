Usage of rasbery pi - Classical approach
========================================

Install the image on the SD card
--------------------------------
Download the Raspbery Pi OS  (either Desktop or Lite version) from the following link: 
- `Images`_
.. _`Images`: https://www.raspberrypi.org/software/operating-systems/ 

Mount the chosen image on your RPi with the help of balenaetcher:
- `BalenaEtcher`_
.. _`BalenaEtcher`: https://www.balena.io/etcher/

Another alternative is to use the Raspberry Pi Imager (for Windows, Ubuntu or macOs). From this tool you can easily flash any available os for raspbery pi 
and set up various things, such as network setup and ssh communication.
- `Raspberry Pi Imager`_
.. _`Raspberry Pi Imager`: https://www.raspberrypi.com/software/

Setting up WLAN
---------------
Without directly connecting to the RPi, you can set the LAN from the PC by creating a wpa_supplicanf.conf file under boot folder, in your SD card.
You can set the content as follows:

| ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
| update_config=1
| country=RO
| network=
| {
| ssid="SSID"
| psk="Passwd"
| }

You can also edit the file later on. it can be found under /etc/wpa_supplicant/wpa_supplicant.conf.

Configuring your Raspberry Pi
-----------------------------
There is a series of configuration parameters that can be edited on the PC, prior to starting 
the RPI. Some of these are stored in the **config.txt** document, found in the /boot/ folder. 
By editing this document one could, for example, adjust the way the display is detected and 
the desktop displayed or overclock the Raspberry Pi (or return to default clock settings). 
A useful setting is the enabling of the Serial Console so that the Raspberry Pi’s terminal can
be accessed using a serial connection. The file can be also visually edited by using the raspi-config 
application while accessing the RPi. 

Editing the **config.txt** file:
    - https://www.makeuseof.com/tag/edit-boot-config-file-raspberry-pi 
    - https://elinux.org/R-Pi_configuration_file

Some more configurations can be done prior to starting the RPi, such as enabling SSH connection, 
Camera connection or I2C connection. In order to do so, you just have to create an empty file with the 
name of the interface, without an extension, under /boot/ folder. The same parameters can also be edited
with the raspi-config application while accessing the RPi.

Raspberry Pi IP address
-----------------------
For most of the applications, the IP of the RPi is crucial. After you set up the network for your RPi and 
power it up, you can find the address with different means, such as: using a network scan tool on your PC 
(nmap for linux); connecting to your router and finding your connected devices; ping your device by using 
it's username: 
| ping raspberrypi.local
|
| PING raspberrypi.local (192.168.1.131): 56 data bytes
| 64 bytes from 192.168.1.131: icmp_seq=0 ttl=255 time=2.618 ms
|
| More information can be found at the following link:
- https://www.raspberrypi.org/documentation/remote-access/ip-address.md


Development on the Raspberry Pi 
--------------------------------

You have multiple ways of accessing the RPi: 
- Direct development approach, by using it as a standalone computer and connecting all the peripherals.
- Direct connection approach, by connecting to it with a Serial cable or with an ethernet cable.
- Remote connection approach, by connecting to it via ssh terminal communication and ftp for file transfer to the remote.

Direct development approach	
````````````````````````````
You can connect all the peripherals and develop on it as you would do on a PC. The suggested OS is the desktop version. Follow this guide for more info:
- `Setting up your Raspberry Pi`_
.. _`Setting up your Raspberry Pi`: https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up 

Direct connection approach. 	
---------------------------
This option for connecting to your Raspberry Pi in physical format can be done in may ways, but the most 
handful ones are with a TTL cable or with an Ethernet cable. By using the serial cable (e.g. 
https://www.ftdichip.com/Products/Cables/USBTTLSerial.htm) you can connect to your system for performing 
initial setup, such as WLAN SSID and password. You should have the Serial Console enabled for being able to 
connect to the Raspberry Pi in this way. This can be done easily by editing the config.txt file of the 
system. Another way in doing so is by setting up a LAN between the RPi and the PC, connecting them via 
ethernet and accessing it via ssh. Below you can find some useful resources that describe the steps 
required for connecting to the terminal in this way.
a. https://learn.sparkfun.com/tutorials/headless-raspberry-pi-setup/serial-terminal
#. https://www.instructables.com/Set-Up-Raspberry-Pi-4-Through-Laptoppc-Using-Ether/


Remote Connection approach
--------------------------
The best combination in programming your RPi remotely is a combination between a ssh connection for 
terminal commands and a SFTP connection for file sharing (this way, the OS installed can be the lite version). 
On linux the SSH connection can be done in any terminal (ssh user@IP) and the SFTP connection in any file 
explorer (other locations->Connect to Server: sftp://ip). On windows, the PUTTY application can be used for 
ssh connection and the WINSCP can be used for file sharing.  
- https://www.behind-the-scenes.co.za/using-winscp-to-connect-to-a-raspberry-pi

VNC is a graphical desktop sharing system that allows you to remotely control the desktop interface of 
one computer. Running VNC Server, in our case Raspberry Pi, you can connect to it from another computer 
or mobile device (running VNC Viewer). The tutorial below describes how work on it from another device by remote control.
- https://www.raspberrypi.org/documentation/remote-access/vnc