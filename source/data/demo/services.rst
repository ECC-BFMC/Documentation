Services
========

There are 3 services installed on the raspberry designed to facilitate some things

angular-autostart
------------------
It starts automatically the front-end (dashboard) at start-up... Even if the code changes, the front-end doesn't have to restart every time.
It is useful during development, as front-end start could take some time.
Documentation regarding this service can be found in the `raspberry-BFMC2025-angular-autostart readme`_ file.

.. _`raspberry-BFMC2025-angular-autostart readme`: https://github.com/ECC-BFMC/Brain/tree/master/services/angular-autostart

brain-autostart
---------------
It waits for a http connection to the angular specific port. Once someone does, it starts the Brain main.py script. 
It is useful mostly during demos. Could be stopped during development.
Documentation regarding this service can be found in the `raspberry-BFMC2025-brain-autostart readme`_ file.

.. _`raspberry-BFMC2025-brain-autostart readme`: https://github.com/ECC-BFMC/Brain/tree/master/services/brain-autostart

rpi-wifi-fallback
-----------------
At start-up, it checks whether or not there is a wifi connection available. If there is no wifi connection, it starts a hotspot, so that a computer/phone may connect to this wifi.
After connection, you can either stay on this hotspot (no available internet) or connect the raspbery to a valid wifi.
Documentation regarding this service can be found in the `raspberry-BFMC2025-rpi-wifi-fallback readme`_ file.

.. _`raspberry-BFMC2025-rpi-wifi-fallback readme`: https://github.com/ECC-BFMC/Brain/tree/master/services/rpi-wifi-fallback