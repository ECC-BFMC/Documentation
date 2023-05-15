Live traffic system
===================
An live traffic server will be available at the location. The car will have to send to it the position (with 0.5 meter radius error) the position and
the id of the encountered obstacle. Down below, you can see the table with the id and description of the obstacles.

+------+------------------------+
| ID   | Description            |
+======+========================+
|   1  | TS - Stop              |
+------+------------------------+
|   2  | TS - Priority          |
+------+------------------------+
|   3  | TS - Parking           |
+------+------------------------+
|   4  | TS - Crosswalk         |
+------+------------------------+
|   5  | TS - Highway entrance  |
+------+------------------------+
|   6  | TS - Highway exit      |
+------+------------------------+
|   7  | TS - Roundabout        |
+------+------------------------+
|   8  | TS - One way road      |
+------+------------------------+
|   9  | TS - No Entry          |
+------+------------------------+
|  10  | Static car on road     |
+------+------------------------+
|  11  | Static car on parking  |
+------+------------------------+
|  12  | Pedestrian on crowwalk |
+------+------------------------+
|  13  | Pedetrian on road      |
+------+------------------------+
|  14  | Roadblock              |
+------+------------------------+
|  15  | Traffic light          |
+------+------------------------+

TS - Traffic Sign

To run
------
The API is listening for the server on the LAN. It validates the server and then requests to connect to it with the car given ID. The server validates the car ID 
with it's key and validates the connection. The client then sends the coordinates and the ID's of the encountered obstacles via the given function.
It uses the src/data/obstaclehandler/environment.py. script to intercept all the data.

The simulated server can be found here: test/environmentalSERVER/env.py. 

- The server saves the received data under test/environmentalSERVER/savings
- For tesing purposes, publickey_server_test.pem should be used (file src/data/obstaclehandler/server_subscriber.py line 57)
- For the competition, publickey_server.pem should be used (file test/obstaclehandler/server_subscriber.py line 56)
- For the competition, a pair of privatekey_client.pem and publickey_client.pem will have to be generated. The publickey_client will have to be sent to the organizers 
  via the communicated channel. The privatekey should be saved locally and used (file test/obstaclehandler/server_subscriber.py line 59)

  // generate a private key with the correct length

  ``openssl genrsa -out private-key.pem 2048``

  // generate corresponding public key

  ``openssl rsa -in private-key.pem -pubout -out public-key.pem``

Live traffic system
--------------------

livetraffic is a module designed so that the clients/cars can send the coordinates of obstacles to the server, which, this way, can monitor 
the traffic conditions on the track.
The server streams it's TCP port on the broadcast port (23456). The client then tries to connect to the server on the communicated TCP port, by sending it's
own ID and the ID crypted with the car PrivateKey. The server decrypts the car encrypted message with corresponding public key. If the ID's match, that means
that the client is validated by the server. The server then replies with a plain and an encrypted message with it's own private key. The client decrypts the 
encrypted message with the server public key and checks that the messages are the same. If the messages are the same, the server is validated by the client 
and the connection is initiated. The server then serves the client by listening to the ID's and obstacles it will send. 

This simulates a real life automatic traffic monitor, which updates itself by using the data from the connected devices.

More details on the connection itself can be found in the src/data/environmentalserver/server_subscriber.py

The information can be used by the team as a validation that the car is detecting the obstacles.