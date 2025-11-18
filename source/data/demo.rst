Demo 
=====

.. toctree::
   :maxdepth: 2
   :hidden:

   demo/freshstart
   demo/services
   demo/explaining


* :doc:`Fresh start <demo/freshstart>`

  - Describing how to set-up your raspbery pi from scratch.

* :doc:`services description <demo/services>`

  - Describing how the installed services work

* :doc:`explaining <demo/explaining>`

  - Describing what is there on the dashboard, and how to add/remove fields

1. Power up the system

- Check the battery connection with the powerboard.
- Turn on the power supply by using the .
- Leds should turn on.

.. image:: ../images/demo/Switch.jpeg
  :align: center    
  :width: 80%

2. Power up the Brushless Motor&ESC

- Simply press the button once tos tart it. You should heer 2 short beeps (signal that the motor is ready) followed by a slightly longer one (Signal that the ESC is calibrated).
- The button should also flash red.

|pic1| => |pic2|

.. |pic1| image:: ../images/demo/EngineButtonOFF.jpg
   :width: 40%

.. |pic2| image:: ../images/demo/EngineButtonON.jpg
   :width: 40%

3. Wait & Connect to Wi-Fi

- Wait for Wi-Fi BFMCDemoCar (at first boot with our image, raspbery may take longer then expected to power up)
- Connect to it with Password: supersecurepassword
- Or simply scan this qr code (valid also via phone)

.. image:: ../images/demo/wifiQR.png
  :align: center    
  :width: 50%

4. Connect to the frontend

- Open any browse and go to: http://192.168.50.1:4200
- Or simply scan this qr code (valid also via phone)

.. image:: ../images/demo/link.png
  :align: center    
  :width: 50%

5. Wait & Submit

- Wait for "Backend connection lost" message to disappear (Front-end page starts automatically. Back-end starts only once you connect to the web-page)
- Leave password field empty
- Press Submit
- Close "Security Setup Required" (It will pop-up until you set a password for your interface src->Dashboard->ProcessDashboard.py)
- Press Battery status (KL) 15 for sensor data, 30 for motors activation
- Press Driving mode manual to control the car via keyboard (beeper should make a sound)
- Drive with WASD + space (for break)
- Press stop to Close (beeper should make a sound)

.. image:: ../images/demo/front-end.png
  :align: center    
  :width: 90%