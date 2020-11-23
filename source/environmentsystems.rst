Environment systems
===================

Localization system
'''''''''''''''''''
An indoor localization system is available at the location, which aims to send the relative position for each robot on the 
race track. This system bases on a video camera network, where each unit is a Raspberry Pi. 
This approach uses ArUco markers to calibrate the system and determinate the position and orientation 
of the robots. This localization system has three main components: server, robot client and camera client. 
The server collects the data from the camera client(position of the car on the camera), calculates the position of the cars o 
the system and serves the robot clients with theirs coordination. The image below shows the concept. 

.. image::  images/localizationSystem.png
   :align: center
   :scale: 50%


In order to use the localization system, each team will have to satisfy the following requirements:

 - A AruCo marker has to placed on the robot, which is always detected by the camera network. 
   This AruCo marker is 10x10 cm size and 1-2 cm wide white border. The AruCo marker will be made available by the organizers
 - The robot client has to interact with the server, so the robot must connect to our network. 

Technical data of the system:
 - The frequency of the send messages is 1
 - The error of the system is about ~10 cm

An example client written in Python is available in the StartUp project together with a simulated server that streams random data to the connected clients.

Mapping
'''''''

A digital map is a description of the elements and the relationships between each other. In our case, 
it has to provide information about our 1/10 scale city so that your autonomous vehicles can calculate and the possible paths from the start point to the goal.

In our case the map will be saved in XML format, with two types of informations: Nodes and connections. Each node is placed in the middle o a lane and the distance 
between 2 nodes(on the same lane) will be roughly ~30 cm, with some variations. The connections describe the relationship between the nodes. All the data is 
exported by using the GraphML library, making it easier to be imported on your platform. Here we can see a straight road visual example:

.. image::  images/StraighRoadExample.PNG
  :align: center
  :scale: 60%

Every node has 3 attributes (Tab 1): Id, X coordinate, Y coordinate. 
On the connectivity table(Tab 2), instead, we have the start node id, the end node id and the type of connection (straight or dotted road). 

+------+-------+-------+--------+--------+----------+
| Nodes table          | Connections table         |
+======+=======+=======+========+========+==========+
|  id  |   X   |   Y   |  Id_1  |  Id_2  |  Dotted  |
+------+-------+-------+--------+--------+----------+
|   1  |  3.6  |  2.4  |   1    |   2    |   TRUE   |
+------+-------+-------+--------+--------+----------+
|   2  |  4.0  |  2.4  |   2    |   3    |   FALSE  |
+------+-------+-------+--------+--------+----------+
|   3  |  4.4  |  2.4  |   3    |   4    |   FALSE  |
+------+-------+-------+--------+--------+----------+
|   4  |  4.8  |  2.4. |                            |
+------+-------+-------+--------+--------+----------+


In the intersections case, there will be 3 points with the same coordinates for a 3 roads intersection(A1, A2, A3) and 4 points for a 4 road intersection(A1, A2, A3, A4).
This symbolization is done so to simulate a layered highway intersection, and so helping you to plan the path without taking into consideration U turn cases inside the intersection
(if we only have a single point connected to all the nodes, then a turn like 18-A-14 would be possible). The representation is done in the following images.

+---------------------------------------+---------------------------------------+
| .. image:: images/3roadsExample.PNG   | .. image:: images/4roadsExample.PNG   |
+---------------------------------------+---------------------------------------+

You can find the figure and the digital representation on the following links: 
 - `Test track figure`_
 - `Test track digital`_
 - `Competition track figure`_
 - `Competition track digital`_.

  .. _`Test track figure`: https://github.com/ECC-BFMC/BFMC_Main/blob/master/source/images/Test_track.png
  .. _`Test track digital`: https://github.com/ECC-BFMC/BFMC_Main/blob/master/source/templates/Test_track.graphml> 
  .. _`Competition track figure`: https://github.com/ECC-BFMC/BFMC_Main/blob/master/source/images/Competition_track.png
  .. _`Competition track digital`: https://github.com/ECC-BFMC/BFMC_Main/blob/master/source/templates/Competition_track.graphml> 

Semaphore
''''''''''

Each one of the four semaphores send UDP broadcast messages every 0.1 ms on port 50007.
The IP's and ID's of the semaphores are:

==============  ==============  ==============  ==============
Id's and Ip's
--------------------------------------------------------------
1                2               3               4
==============  ==============  ==============  ==============
Intersection     Intersection    Intersection    Start         
192.168.1.12     192.168.1.13    192.168.1.15    192.168.1.14  
==============  ==============  ==============  ==============

Message structure
`````````````````
Message contains semaphore ID and state on 2 bytes.

=========  =========  
 Message structure  
--------------------
  Byte1      Byte2    
=========  =========
   ID       State
=========  =========

Semaphore State
`````````````````
The states of the semaphores are described in the following table

=============  =============  =============
 Semaphore State
-------------------------------------------
      0              1              2
=============  =============  =============
     RED          YELLOW          GREEN
=============  =============  =============

Cycle
`````````````````
The cycle of each semaphore is described in the table below

=============  =============  =============  =============  =============
 Semaphore cycle
-------------------------------------------------------------------------
    State          State           State          State         State
=============  =============  =============  =============  =============
     RED          YELLOW          GREEN          YELLOW          RED
=============  =============  =============  =============  =============

An example client written in Python is available in the StartUp project together with a simulated server that streams random data to the network clients.