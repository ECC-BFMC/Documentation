Power board
------------

On the robot we built a power distribution board which has the role of managing all the aspects of the power 
management inside the car.

.. image::  ../../images/hardwaresetupforcar/Powerboard/powerboard_plain.png
  :align: center
  :width: 80%

For the protection of the batteries, the Powerboard has the following features:

    - At 6.8 voltage in the batteries (average), a 5v current will flow through the loudspeaker pins (otherwise 0v current). If you wish to have an audible notification of the battery drainage, please plug in a buzzer.
    - At 6.7V current, the led of the powerboard will turn RED and will cut off the current through the entire board, minus the motor.
    - In order to increase the cars autonomy, two batteries can be connected at any time (the board will work just fine with one). Though the board should handle a difference in charging levels of the batteries, please avoid plugging an empty and a full battery at the same time.
    - The Ibat pin returns a voltage value proportional to the instant consumption of the board.
    - The Ubat pin returns a voltage value proportional to the total voltage of the battery/s level.
    - For the current to flow through the board, the switch has to be enabled (Short).
    - If the board is running (short on switch) the motor is draining current even if not in used (the button of the motor is not pressed, the led is not on) so please turn off the switch if you don't use the car or while charging.
    - The +12V def pin has a default current value of 12v, which can be adapted to return a value from 4.5v to +18V max (max 3A) with the following formula: Rrbt2 = ((Vtarget - 0.6)xRfbb2)/0.6; Where Rfbb2 must be below 300kΩ.
    - The +5V pins have a limit in current consumption of 15A.
    - The motor pins can drain the battery as much as the battery allows. 

All the data related to the powerboard can be found here:
`Power Distribution Board <https://github.com/ECC-BFMC/Documentation/blob/master/PCB/PWR_Board>`_
