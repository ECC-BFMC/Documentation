Localization system
====================

We made a indoor localization system, which aims to send the relative position for each robot on the 
race track. This system bases on a video camera network, where each unit is a Raspberry Pi. 
This approach uses ArUco markers to calibrate, determinate the position and orientation 
of robot. This localization system has three main components: server, robot client and camera client. 
The server collects the data from the camera client and it serves the robot clients with theirs coordination. 
THe image below shows the concept. 

.. image::  images/localizationSystem.png
   :align: center
   :scale: 50%


In the case,  a team want to use this localization system, they need to satisfy following requirements:

 - A AruCo marker has to placed on the robot, which always can detected by the camera network. This AruCo marker has 10x10 cm size and 1-2 cm wide white border. 
 - The robot client has to interact with our serves, so the robot must connect to our network. An example client written in Python will be published soon in the start up project. 
