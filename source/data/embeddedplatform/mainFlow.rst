Main Flow
==============================

If the `I'm alive` message comes, the Nucleo code is starting correctly and now you can try to communicate with it. After each message, you have to press Ctrl+M, then Ctrl+J. 

**The sent messages structure is as follows:**

``#1:speed;;`` 
    | It is setting the navigation speed. Where speed must be between -50.0 and 50.0, and is measured in centimeters/second, while the minus indicates backward movement.

``#2:angle;;`` 
    | It is setting the steering angle. Where angle must be between -25.0 and 25.0, and is measured in degrees of the servo, while the minus indicates left turning.

``#3:angle;;`` 
    | It is setting the brake.

``#5:1;;`` 
    | It is starting the task which is sending periodically the battery voltage.

``#6:1;;`` 
    | It is starting the task which is sending periodically the instant current consumption of the battery.

``#7:1;;`` 
    | It is starting the IMU measurements.

``#8:point1.x,point1.y;..;pointN.x,pointN.y;;`` 
    | It is taking the inserted 2D points and used them as control points for a Bezier Curve. The car will use the resulted curve as path.

``#9:speed,time,angle;;`` 
    | It is setting the `speed` and the steering `angle` for a period of `time`.

**The received messages structure is as follows:**

``@1:ack;;``  
    | acknowledgment message that the speed has been set.

``@2:ack;;``  
    | acknowledgment message that the steering value has been set.

``@3:ack;;``  
    | acknowledgment message that the brake state has been set.

``@5:value;;``  
    | value of the battery voltage level.

``@6:value;;``  
    | value of the instant consumption (Amps).

``@7:roll;pitch;yaw;accelx;accely;accelz;;``  
    | values of the IMU measurements.

``@8:ack;;``  
    | acknowledgment message that the Bezier curve was computed and the car can respect it.

``@9:ack;;``  
    | acknowledgment message that the speed and steering angle was set for the requested period of time.

Overview
--------

The flow diagram depicted below outlines the functional operation and the structure of the embedded platform's software. This graphical representation facilitates a deeper understanding of how various components interact within the system.

Through the diagram, we aim to showcase the hierarchical nature of different software layers and how they contribute to the overarching functionality of the platform. It also illustrates the interaction between the main loop and the various subsystems.

.. image:: ../../images/embeddedplatform/embeddedPlatformDiagram.png
   :align: center
   :width: 100%