Brain project
=============

.. toctree::
   :maxdepth: 1
   :hidden:

   brain/setup

* :doc:`Project Setup <brain/setup>`

  - Describing how to fresh-start with the project

As substitutes for this Brain project are the Startup_c and Brain_ROS. Though none of them are maintained, so if you chose to develop on each of them, you will 
have to adapt it based on the information you find here. 

This documentation describes the given brain project, which runs on the raspberry pi. It eases the 
process of starting up your vehicle by displaying some basic functionalities and describes 
how to use the given APIs to interact with the V2X systems. The following things are implemented
in the project (be advised that everything can be tunned to your project needs!):

    - Simple service-like architecture based on 4 Queues, each with a higher level of prioritization, where messages can be sent.
    - Example of parallel processes, each with different running threads. 
    - A class that describes all the messages, who's their owner and what their type is.
    - Subscription examples for certain messages
    - Gateway that handles all the sent messages and forwards them to the subscribers (to enable easy testing and developing).
    - A camera driver-like process that can also modify in real time some of the camera parameters (like ISO and aperture), send multiple images with different settings (like resolution) and enables easy camera recording functionality.
    - A serial communication driver-like process, that communicates with the Nucleo board, it read messages form the nucleo on one thread (like battery info) and sends messages to it from another (like speed command).
    - API that gathers data sent via UDP on the network (assync data, from cars and from semaphores)
    - API that communicates with the TrafficCommunication server. Gets location data from the localization device and sends traffic info to the server.
    - An asyncronous server-like process that communicates with the Demo project from the Computer. It acts as middle-ground between the car and the demo, gets movement commands from the PC or allows some parameters set. Allows the forwarding of data info from Brain project and displays them on the dashboard.
    

*The following diagram shows the connections between the different processes and 
the Gateway. All the messages on the arrows can be prioritized as you see fit (General, Warning or Critical).*

.. image:: ../images/brain/Architecture.png
   :align: center
   :width: 80%

++++++++++++++++++++++++
The starting point, Main
++++++++++++++++++++++++

The processes project consist of multiple processes that run concurrently and can be activated or deactivated
using certain **flags** present in the **Main** Script.

This is the script that initiates all the processes, including the most important one - the Gateway. 
The message queues are initialized as well and they are listed based on priority.

  #. Critical
  #. Warning
  #. General   
  #. Config

As mentioned, the queues can be used for prioritization of the messages. Critical, messages that are crucial to the functionality; 
Warning, something that requires attention; general, for all the information; config, for subscribing/unsubscribing to 
certain messages.

The Gateway process is started nonetheless, but all the other processes have **flags** assigned to them. 

*Camera* - enables the Camera process

*PCCommDemo* - it enables the PC Communication with the Demo app

*Sems* - enables Semaphores process

*Traffic* - enables the Traffic Communication process

*SerialHandler* - enables the Serial Handler process



+++++++++++
The Gateway
+++++++++++
The GateWay is responsible with checking continuously the messages on all the different queues.

To subscribe to a certain message type, a specific message must be sent on the config queue, which
subscribes a Pipe to a specific message. From now on, each message of that type arrives, the gateway 
will forward it to the registered pipe. 

The un-subscribing to specific messages can be done the same way as the subscribing.

On the checking of the queues prioritization can be given to the messages, such as discarding general ones if a critical 
messages has arrived.


++++++++++++++++++
The Camera Process
++++++++++++++++++
The Camera Process takes on the crucial role of interacting with the 
car's camera, which is the main sensor of the car.
This process has a thread that captures real-time images of the car's surroundings
on two different channels (big and small resolution) and sends them on the queue. 

The thread is also subscribed to the camera-config message, where other threads/processes can 
send messages to modify some parameters of the camera. 

One other message where the thread is subscribed, is the record message, where start and stop recording commands can be sent. 


++++
Demo
++++
The Demo is actually the display server. It subscribes to all the 
main messages in the car and sends the data to the Demo app, from whom it also receives commands 
such as speed and steering, and sends them on their queue.

This process enables remote controlling and data exchange. 

++++++++++++++++++++++++++
The Serial Handler Process
++++++++++++++++++++++++++
This process establishes and maintains a two-way conversation with the STM32 microcontroller embedded in our vehicle. 
It sends commands to control the car's various functions, such as: speed set, steering angle set, enable battery data reading, enable IMU data
reading and much more... On the other thread instead, it receives information, such as "acknowledge" of the sent command, sensor data (such as "Rotation is...),
readings from the powerboard, and so on.

++++++++++++++++++++++
The Semaphores Process
++++++++++++++++++++++
Explained in the V2X section.


+++++++++++++++++++++++++++++++++
The Traffic Communication Process
+++++++++++++++++++++++++++++++++
Explained in the V2X section.

 


++++++
To Run
++++++

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