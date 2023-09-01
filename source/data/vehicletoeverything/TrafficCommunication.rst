Traffic Communication
=====================

The API is handling the communication with the localization system and also streams certain data to the live-traffic monitoring system (Waze like).

The API is made out of 5 parts:
- UDPListener - It listens on port 9000 for the communication from the server. Once it receives the message from the server, it validates the message by using the publick_key of the server, and, after the server is validated, activates the serverfound callback function, which creates a TCP connection with the LiveTraffic server on a separate thread
- LiveTrafficSrv - Is keeping the connection to the server alive, continuously trying to connect to it, in case the connection breaks. And, once the connection is established, it requests the IP and port of a localizaiton device, by passing it's id. Once it receives the IP, creates a connection to the locsys device, on a separate thread.
- Locsys device - The locsys connection just keeps getting info from the locsys, putting them on a pipe, for the car to read.
- PeriodicTask - It's a task that runs every second, checking if the connection to the LiveTrafficServ is established, and if it is, it sends the data inside the shared memory. The shared memory data
- Shared Memory - It's a shared object between the Car and the LiveTrafficSrv. It has a method for inserting data to send to the server(done by the car) and one for getting the data to send, done by the periodictask.

The data of the locsys will be sent to the car as x and y, corresponding to the vehicle position on the track. 

The data which must be sent to the livetraffic server is the following:

Speed of the vehicle, with 1HZ.
m = deviceSpeed
val = [0.2] # 0.2 is a speed example, Where speed is measured in cm/s
shared_memory.insert(m, val)


Position of the vehicle, with respect to the track coordinate system, with 1HZ.
m = devicePos
val = [12.3, 6.9] # 12.3 is a x example, 6.9 is a y example, Where position is measured in m
shared_memory.insert(m, val)


Rotation of the vehicle, with respect to the track rotation, with 1HZ.
m = deviceRot
val = [108] #108 is the rotation, Where rotation is measured in degrees, 0 being on x axis, positive number counter-clockwise, just positive angle (181 being correct, instead of -179)
shared_memory.insert(m, val)

historyData
Obstacle encountered, once x obstacle.
m = deviceRot
val = [2, 7.2, 3.8] # 2 is the id of the obstacle, 7.2 is the x of the obstacle, 3.8 iw the y of the obstacle. Where the id's can be found in the following table.
shared_memory.insert(m, val)

+-----+-------------------------------------+
| ID  | Description                         |
+=====+=====================================+
| 1   | Traffic Sign - Stop                 |
+-----+-------------------------------------+
| 2   | Traffic Sign - Priority             |
+-----+-------------------------------------+
| 3   | Traffic Sign - Parking              |
+-----+-------------------------------------+
| 4   | Traffic Sign - Crosswalk            |
+-----+-------------------------------------+
| 5   | Traffic Sign - Highway entrance     |
+-----+-------------------------------------+
| 6   | Traffic Sign - Highway exit         |
+-----+-------------------------------------+
| 7   | Traffic Sign - Roundabout           |
+-----+-------------------------------------+
| 8   | Traffic Sign - One way road         |
+-----+-------------------------------------+
| 9   | Traffic Sign - No Entry             |
+-----+-------------------------------------+
| 10  | Static car on parking               |
+-----+-------------------------------------+
| 11  | Pedestrian on crosswalk             |
+-----+-------------------------------------+
| 12  | Pedestrian on road                  |
+-----+-------------------------------------+
| 13  | Roadblock                           |
+-----+-------------------------------------+
| 14  | Traffic light                       |
+-----+-------------------------------------+

To run
------
Run the src/data/TrafficCommunication/processTrafficCommunication.py

- For tesing purposes, publickey_server_test.pem should be used (self.filename = "src/data/TrafficCommunication/useful/publickey_server_test.pem" should be the value of line 39), as it connects to the simulated server.
- For the competition, publickey_server.pem should be used (self.filename = "src/data/TrafficCommunication/useful/publickey_server.pem" should be the value of line 39)  
