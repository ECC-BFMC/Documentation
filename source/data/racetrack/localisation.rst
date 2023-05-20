Localisaiton system
===================

The localisation system used in our build is made out of MDEK1001 `MDEK1001 <https://www.qorvo.com/products/p/MDEK1001>`_. devices,
which you can easly buy a set of 12 boards for ~300 dolars. 

Each device can be set either as Anchor, Tag or Gateway and can be configured accordingly with the help of the qorvo aplicaiton,
which is using Bluetooth for communication. As a safety feature, in our location the Bluetooth is disabled, so reconfiguration of
the network is not possible. Another characteristic of our system is that we get the data from the Tag directly, with serial
communication, not from the Gateway. 