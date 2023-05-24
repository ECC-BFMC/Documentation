Localization system
===================

The localization system used in our build is made out of MDEK1001 `MDEK1001 <https://www.qorvo.com/products/p/MDEK1001>`_. devices,
which you can easily buy a set of 12 boards for ~300 dollars. 

Each device can be set either as Anchor, Tag or Gateway and can be configured accordingly with the help of the qorvo application,
which is using Bluetooth for communication. As a safety feature, in our location the Bluetooth is disabled, so reconfiguration of
the network is not possible. 

Another characteristic of our system is that we get the data from the Tag directly, with serial communication, not 
from the Gateway. Meaning, we have another raspberry connected directly to the MDEK board and getting the data, 
then serving the data to the car brain. 

To best simulate the gathering of the data, we encourage you to build your project based on this info, and take as
starting point the localizationsystemSERVER, described in the Computer section.