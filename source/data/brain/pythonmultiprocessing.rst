Python and multiprocessing
==========================

Repo cloning
-------------
Clone the startup repo on your local RPI. We suggest to also create another repository, accessible to all your team members, for the development of the project.
https://github.com/ECC-BFMC/Brain

Remote car control and camera stream
--------------------------------------

In this section is presented the architecture of the main startup tools: Camera Streamer and Remote Control. The following figure shows the structure of our application, 
where the remote controller and the camera streamer features are activated and connected (remote device and given RPi). 

On the RaspberryPi (RcCar) the following processes run: 'cameraStreamer' and 'RemoteControlReceiverProcess' on 'Utils' layer, 'cameraProcess' and 'SerialHandlerProcess' on the 'Hardware' layer. 
Each process uses some paralel threads, for simultaneous handling of the tasks: 'CameraPublisher', 'WriteThread' & 'ReadThread', 'StreamSending', 'ReceivingComand'. 

On the remote device run the 'cameraReceiver' and the 'RemoteControlTransmitter' processes on 'Utils' layer. 
Each processes use some paralel threads, for simultaneous handling of all the tasks: 'StreamReceiving', 'SendCommand', 'RcBrain'and 'KeyboardListener'. 

.. .. image:: diagrams/pics/ComponentDia_StartUp.png
..     :align: center

Another tool is already implemented on the car, and that is the 'CameraSpoofer' process. It takes as an input a directory of videos and pipes them 
to the 'CameraStreamerProcess'. For it to work `enableStream` and `enableCameraSpoof` flags have to enable in the 'main.py', where the `CameraProcess` 
will be in replaced by 'CameraSpoofer' process. It will work similarly to the `CameraProcess`, only it will stream the saved videos.

.. .. image:: diagrams/pics/ComponentDia_CameraSpoofer.png
..     :align: center

Installation
------------

The application is compatible with other version of Python3. For using the implemented applications you have to install the Python API of Opencv (`cv2`) on the remote 
device (PC) and your Raspberry. If you are using Debian based operating system, you can do it easily by running the following code in terminal:

``sudo apt-get install python3-opencv``


The `requirements` files contains the other dependencies, they are different for the Raspberry Pi and your remote device. The script, which runs on Raspberry Pi, 
depends on `pySerial`, `picamera`, `cv2` code libraries. The remote debug and development tools relies on `pynput` and `cv2` libraries. You can install these 
libraries by applying the following codes:
  
*Raspberry Pi*

``pip3 install -r requirements_rpi.txt``

*PC*

``pip3 install -r requirements_remote.txt``

*Note:*
  The remote tools were tested on Linux and Windows. On Linux they are worked correctly without any error. On Windows the camera receiver works nicely, but the remote 
  controller transmitter may produce a delay. On Mac Os the remote tools weren't tested. 

Configuration
--------------

The first step before being able to test the platform and add more functionalities to it is to configure the scripts that one can find in this repository. 
To do so, you will have to set of your IP addresses, for your Raspberry and for your PC, and, if necessary, the ports used for communication. This configuration 
should occur every time the IP of one of your devices has changed.

The following files should be considered:

*Raspberry Pi*
    
  ``src/utils/camerastreamer/camerastreamer.py``

*PC*

  ``src/utils/remotecontrol/remotecontroltransmitter.py``


How to control your car
------------------------

In order to control your car, you will have to start your application onto RaspberryPi and enable from `main.py` the Remote Control feature, by setting the `enableRc` 
flag to true value. Also, you will have to launch the Remote Control Transmitter on your PC and make sure that the IP of your devices are configured correctly. 
After that, run the following:

*Raspberry Pi*

``python3 main.py``

*PC*

``python3 -m bin.remotecontroltransmitter``


How to stream your camera
--------------------------
If you want to stream the camera and view on the remote device, you will have to start the same application onto RaspberryPi and enable from `main.py` the Camera Steamer 
feature, by changing the `enableStream` flag to true value. On the remote device you will have to run the Camera Receiver script. The IP address of the remote device must 
be introduced in the `CameraStreamer` class. After the configuration, you can run the following code: 

*Raspberry Pi*

``python3 main.py``

*PC*

``python3 -m bin.camerareceiver``
  

IMU Displayer
--------------

For our case, we will use the RTIMULib tool. Feel free to implement the functionality by yourselves, even by using another library.
Consider this guide: https://github.com/RPi-Distro/RTIMULib/tree/master/Linux. For our example, follow the **connecting to IMU** side. 
The library has already been installed.

We have provided two scripts, 'imu.py' under hardware/imu and 'imuHandler.py under utils/imu, which should serve as a base for further development with the sensor. 
The imu.py is written as a thread and the imuHandler.py is used as an example of running the thread.

In order to test the scripts go to the computer/src:

``sudo python3.7 utils/IMU/imuHandler.py``

For a more thorough understanding of the board capabilities you should read the official datasheet of the BNO sensor at https://www.bosch-sensortec.com/products/smart-sensors/bno055.html 
and RTIMULib's documentation on it's official GitHub repository: https://github.com/RPi-Distro/RTIMULib