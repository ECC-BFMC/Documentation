Traffic Communication
=====================

The API is handling the communication with the localization system and also streams certain data to the live-traffic monitoring system (Waze like).

The API is made out of 5 parts:
    - UDPListener - It listens on port 9000 for the communication from the server. Once it receives the message from the server, it validates the message by using the publick_key of the server, and, after the server is validated, activates the serverfound callback function, which creates a TCP connection with the LiveTraffic server on a separate thread
    - tcpClient - Is keeping the connection to the server alive or continuously trying to connect to it, in case the connection breaks. Once the connection is established, it requests the IP and port of a localizaiton device, by passing it's id. Once it receives the IP, creates a connection to the locsys device, on a separate thread.
    - PeriodicTask - It's a task that runs every second, checking if the connection to the LiveTrafficServ is established, and if it is, it sends the data inside the shared memory. The shared memory data. SharedMemory is used in the eventuality that car is ready to send some data but the server connection is not established
    - Locsys device - The locsys connection just keeps getting info from the localization system, putting them on a pipe, for the car to read.
    - Shared Memory - It's a shared object between the Car and the tcpClient. It has a method for inserting data to send to the server(done by the car) and one for getting the data to send, done by the periodictask.
    
    

The data of the locsys will be sent to the car as x and y, z and quality of trustness in the position.

The data which must be sent to the livetraffic server is the following:



The shared memory
-----------------

**Speed of the vehicle, with 1HZ.**

``m = "deviceSpeed"``

``val = [8.1] # 8.1 is a speed example, Where speed is measured in cm/s``

``shared_memory.insert(m, val)``


**Position of the vehicle, with respect to the track coordinate system, with 1HZ.**

``m = "devicePos"``

``val = [12.3, 6.9] # 12.3 is a x example, 6.9 is a y example, Where position is measured in meters``

``shared_memory.insert(m, val)``



**Obstacle encountered, once x obstacle.**

``m = "historyData"``

``val = [2, 7.2, 3.8] # 2 is the id of the obstacle, 7.2 is the x of the obstacle, 3.8 iw the y of the obstacle. Where the id's can be found in the following table.``

``shared_memory.insert(m, val)``


+-----+---------------------------------+
| ID  | Description                     |
+=====+=================================+
| 1   | Traffic Sign - Stop             |
+-----+---------------------------------+
| 2   | Traffic Sign - Priority         |
+-----+---------------------------------+
| 3   | Traffic Sign - Parking          |
+-----+---------------------------------+
| 4   | Traffic Sign - Crosswalk        |
+-----+---------------------------------+
| 5   | Traffic Sign - Highway entrance |
+-----+---------------------------------+
| 6   | Traffic Sign - Highway exit     |
+-----+---------------------------------+
| 7   | Traffic Sign - Roundabout       |
+-----+---------------------------------+
| 8   | Traffic Sign - One way road     |
+-----+---------------------------------+
| 9   | Traffic Sign - No Entry         |
+-----+---------------------------------+
| 10  | Static car on parking           |
+-----+---------------------------------+
| 11  | Pedestrian on crosswalk         |
+-----+---------------------------------+
| 12  | Pedestrian on road              |
+-----+---------------------------------+
| 13  | Roadblock                       |
+-----+---------------------------------+
| 14  | Traffic light                   |
+-----+---------------------------------+
| 15  | Fog                             |
+-----+---------------------------------+
| 16  | Tunnel                          |
+-----+---------------------------------+
| 16  | Ramp                            |
+-----+---------------------------------+



Localization system 
-------------------

It has four main components: server, robot client(cars) and anchor device and tag device. 
The anchors are set into know positions on the track. The tag devices, communicate with the anchors in order to get their position on the map; then the tags connect 
to the server and sends in the location data. The server collects and stores the data from the tag devices (location on map) and waits for connections from the 
robot clients; then, upon connection, it serves the desired data to the clients. Down below a picture describing the process.

.. image::  ../../images/vehicletoeverything/Localisation_system.png
  :align: center
  :width: 50%

The system will be installed only at the phisical competition. It is made of two components: one fixed component that will be glued to the car body upon arrival 
and the actual device, which the team will get only while on the track. The active part will have displayed the ID of the connection. In the following image you 
can see the place where the device will be placed, the fixed component and the actual device.

.. image::  ../../images/vehicletoeverything/Localisation_system_HW.png
  :align: center
  :width: 50%

The device weights 280 grams and the mandatory position for the device is the one in the picture. The design can be found here:
  - `Bottom`_
  - `Box`_
  - `Top`_
  
  .. _`Bottom`: https://github.com/ECC-BFMC/Documentation/blob/master/source/3DModels/Locsys/Locsys_Bottom.STL
  .. _`Box`: https://github.com/ECC-BFMC/Documentation/blob/master/source/3DModels/Locsys/Locsys_Box.STL
  .. _`Top`: https://github.com/ECC-BFMC/Documentation/blob/master/source/3DModels/Locsys/Locsys_Tap.STL

Technical data of the system:
 - The frequency of the given messages is ~5 Hz
 - The error of the system is of maximum 15 cm radius
 - The delay of the received messages is ~1 second


Mapping of the track
--------------------
A digital map is provided in order to help the teams navigate in the environment. The map is saved in XML format and it is exported with the help of the GraphML 
library (making it easier to be imported on your platform). There are two types of information: Nodes and Connections. Each node is placed in the middle o a lane 
and the distance between 2 nodes(on the same lane) will be roughly ~30 cm, with some variations. A connection describes the relations between twp nodes (dotted 
or continuous line). Here you can see a straight road visual example:

.. image::  ../../images/vehicletoeverything/StraighRoadExample.PNG
  :align: center
  :width: 50%

Every node has 3 attributes: Id, X coordinate, Y coordinate. On the connectivity table instead, we have the start node id, the end node id and the type of 
connection (straight or dotted road: TRUE or FALSE). 

+------+-------+-------+--------+--------+----------+
| Nodes table          | Connections table          |
+======+=======+=======+========+========+==========+
|  id  |   X   |   Y   |  Id_1  |  Id_2  |  Dotted  |
+------+-------+-------+--------+--------+----------+
|   1  |  3.6  |  2.4  |   1    |   2    |   TRUE   |
+------+-------+-------+--------+--------+----------+
|   2  |  4.0  |  2.4  |   2    |   3    |   FALSE  |
+------+-------+-------+--------+--------+----------+
|   3  |  4.4  |  2.4  |   3    |   4    |   FALSE  |
+------+-------+-------+--------+--------+----------+
|   4  |  4.8  |  2.4  |                            |
+------+-------+-------+--------+--------+----------+


In the intersections case, there will be 3 points with the same coordinates for a 3 roads intersection(A1, A2, A3) and 4 points for a 4 roads intersection(A1, 
A2, A3, A4). This symbolization is done so to simulate a layered highway intersection, and so, helping you plan the path without taking into consideration U 
turn cases inside the intersection (if we only have a single point connected to all the nodes, then a turn like 18-A-17 would be possible). The representation 
is done in the following images.

|pic1|  |pic2|

.. |pic1| image:: ../../images/vehicletoeverything/3roadsExample.PNG
   :width: 35%

.. |pic2| image:: ../../images/vehicletoeverything/4roadsExample.PNG
   :width: 35%

You can find the figure and the digital representation of the competition track at the following links: 
 - `Competition track figure`_
 - `Competition track digital`_

  .. _`Competition track figure`: https://github.com/ECC-BFMC/Documentation/blob/master/source/racetrack/Competition_track_graph.png
  .. _`Competition track digital`: https://github.com/ECC-BFMC/Documentation/blob/master/source/racetrack/Competition_track_graph.graphml


To run
------
Run the src/data/TrafficCommunication/processTrafficCommunication.py

- For tesing purposes, publickey_server_test.pem should be used (self.filename = "src/data/TrafficCommunication/useful/publickey_server_test.pem" should be the value of line 39), as it connects to the simulated server.
- For the competition, publickey_server.pem should be used (self.filename = "src/data/TrafficCommunication/useful/publickey_server.pem" should be the value of line 39)  
