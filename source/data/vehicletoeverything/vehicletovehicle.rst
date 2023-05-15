V2V - Vehicle to vehicle communication
======================================


The dynamic obstacles (moving cars) will stream their position on the map via WiFi UDP messages, including the car id and it's position. 
The technical data of the stream are the same as the ones of the localization system.

To run
------
The API is listening on a certain port for the communicated coordinates of all the moving obstacles. It uses the src/data/vehicletovehicle/vehicletovehicle.py 
script to intercept all the data.

The simulated car can be found here: test/vehicletovehicleSIM/broadcaster.py. 

vehicletovehicle is a module designed to get the indoor positioning and orientation of the moving obstacle/car, run by the Organizers. 
The moving vehicles stream their position on the network on the 5009 port, by using the UDP protocol. This API starts a Thread that gets
all the data and saves it as it's attributes (ID, position and angle). 

This simulates the bluetooth communication between smart cars in a smart city (connectivity field).

The information can be used in order to double validate the position of the cars so to avoid eventual collision. 