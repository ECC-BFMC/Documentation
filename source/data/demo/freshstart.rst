Fresh start
===========

Option 1 - Build with our iamge
-------------------------------

Simply build this `raspberry-BFMC2025-image`_  on an empty SD card, by using raspbery pi imager

.. _`raspberry-BFMC2025-image`: https://mega.nz/folder/mSBWFBIb#kR2f8mvAXj4gUnTHlm2tIg

Open raspbery pi Imager 

- Insert your SD card into the PC
- On Raspbery pi device chose raspbery pi 5
- On Operating system, go all the way down and selecte "Use custom", then select the downloaded image.
- On Storage, select your SD card
- Click settings and insert data ONLY for user and password (default one: pi & raspberry)
- click next


Option 2 - Build from scratch
-----------------------------

1. Open raspbery pi Imager 

- Insert your SD card into the PC
- On Raspbery pi device chose raspbery pi 5
- On Operating system, chose raspberry pi os.
- On Storage, select your SD card
- Click settings and insert data for username, password and your network wifi
- click next

2. Connect to the same network, ping the raspbery to find it's ip, connect to the raspbery with the credential you set

- Open cmd/terminal

.. code-block:: bash

    ping raspberry.local
    ssh pi@192.168.x.x
    
3. Bring your os up to deactivated

- update
- upgrade
- set your git credentials
- etc.

4. clone the Brain repo & install all requirements

.. code-block:: bash

    git clone https://github.com/ECC-BFMC/Brain.git
    cd Brain
    chmod +x setup.sh
    ./ setup.sh

5. install all services (described in * :doc:`services <services>`) and reboot

.. code-block:: bash

    cd services
    chmod +x angular-autostart/install.sh angular-autostart/uninstall.sh
    chmod +x brain-autostart/install.sh brain-autostart/uninstall.sh
    chmod +x rpi-wifi-fallback/install.sh rpi-wifi-fallback/uninstall.sh
    ./angular-autostart/install.sh
    ./brain-autostart/install.sh
    ./rpi-wifi-fallback/install.sh
    sudo reboot