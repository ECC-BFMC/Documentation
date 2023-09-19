Embedded platform
=================

.. toctree::
   :maxdepth: 1
   :hidden:

   embeddedplatform/preliminarySetup
   embeddedplatform/continuous
   embeddedplatform/newComponent
   embeddedplatform/debugging
   embeddedplatform/mainFlow

The embedded platform refers to the code that is written on the Nucleo board, more precisely the low level application, which runs on the 
micro-controller. It aims to provide an interface between high level processing and low level motors control and sensor reading. The code 
uses mbed os version=5.6. 

The project is structured on 4 layers: Brain, Drivers, Periodics and Utils. 
    - The 'Brain' folder contains the state machine of the Nucleo. More controlling methods can be handled here. 
    - The 'Drivers' folder contains the code to interact directly with the steering motor, speeding motor and with the IMU.
    - The 'Periodics' folder contains the tasks that are executed periodically by the Nucleo board, based on interruptions, such as writing the sensors values on the serial Tx or checking the serial Rx, then applying the necessary callbacks (used for movements control).
    - The 'Utils' folder contains various working tools, such as the serial communication message construction/deconstruction, callbacks on the necessary functions, tasks execution and queues.


The low level control application, which runs on the Nucleo-F401RE, is implemented in C/C++ language. Down below you can find some tips on how
to further develop on top of the project

Debugging
---------

If the message comes, the Nucleo code is starting 
correctly and now you can try to communicate with it. After each message, you have to press Ctrl+M, then Ctrl+J. 

**The sent messages structure is as follows:**

``#1:speed;;`` 
    | It is setting the navigation speed. Where speed must be between -5.0 and 5.0, and is measured in meters/second, while the minus indicates backward movement.

``#2:angle;;`` 
    | It is setting the steering angle. Where angle must be between -23.0 and 23.0, and is measured in degrees of the servo, while the minus indicates left turning.

``#3:angle;;`` 
    | It is setting the brake. Where angle must be between -23.0 and 23.0, and is measured in degrees of the servo, while the minus indicates left turning.

``#4:1;;`` 
    | It is starting the calibration method for the brushless motor, indications will be then returned on the screen.


**The received messages structure is as follows:**

``@1:ack;;``  
    | acknowledgment message that the speed has been set.

``@2:ack;;``  
    | acknowledgment message that the steering value has been set.

``@3:ack;;``  
    | acknowledgment message that the brake state has been set.

``@4:action;;``  
    | indications on how to proceed with the calibration.

``@4:ack;;``  
    | acknowledgment message that the calibration has been done.

``@5:value;;``  
    | value of the battery voltage level.

``@6:value;;``  
    | value of the instant consumption (Watts).

``@7:roll;pitch;yaw;accelx;accely;accelz;;``  
    | values of the IMU measurements

Notes
------

The script for creating a new component (newComponent.py) and for flashing the micro-controller weren't projected to linux usage, so we cannot guarantee the 
correct working. 

