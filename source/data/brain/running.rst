Runnigng
========

1. Hardware part

- Check the battery connection with the powerboard.
- Turn on the power supply by presing the button.

.. image:: ../images/brain/Button.png
  :align: center
  :width: 80%

- Simply push the engine button. It will make a long BEEP and after a pause a short BEEP. 
  If the process was carried out successfully, it will have a constant red color. If it failed, you will blink in red. In this case, you will have to restart the ESC by pressing and holding the button until the color disappears, then start it again.
  
.. image:: ../images/brain/EngineButtonOFF.jpg
  :align: center
  :width: 80%

.. image:: ../images/brain/EngineButtonON.jpg
   :align: center
   :width: 80%

2. Start servers on computer. Check how under the **Computer** section

3. Software part

Simply run the main.py on the car. 

Edit file with the IP of the vehicle (on the Brain project). 
Change https://github.com/ECC-BFMC/Computer/blob/35992e917c4cb37ff8b26a04b76ac1a2d04212c2/Demo/threadRemoteHandlerPC.py#L54C28-L54C68 with the IP of the Car.

Especially for when you will be present at the challenge, we change also the connection password in the same file, as well ad on the Brain: https://github.com/ECC-BFMC/Brain/blob/f679ff060fb85ba90c35a6cb68abba184b7ff291/src/utils/PCcommunicationDashBoard/threads/connection.py#L59