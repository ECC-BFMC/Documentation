Semaphore
=========

Each semaphore broadcast messages with a frequency of 10 Hz, including the semaphore id and it's state.

State
-----
The states of the semaphores are described in the following table

=============  =============  =============
 Semaphore State
-------------------------------------------
      0              1              2
=============  =============  =============
     RED          YELLOW          GREEN
=============  =============  =============

Cycle
------
The cycle of each semaphore is described in the table below

=============  =============  =============  =============  =============
 Semaphore cycle
-------------------------------------------------------------------------
    State          State           State          State         State
=============  =============  =============  =============  =============
     RED          YELLOW          GREEN          YELLOW          RED
=============  =============  =============  =============  =============

To run
------
The API is listening on a certain port for the communicated ID and states of all the traffic lights. It uses the src/data/trafficlights/Example.py 
script to intercept all the data.

The simulated semaphore can be found here: test/trafficlightSIM/Simulator.py

Traffic Lights
---------------

trafficlights is a module designed to get the ID and the state of the traffic lights on the map. 
The traffic lights stream their position on the network on the 5007 port, by using the UDP protocol. This API starts a Thread that gets
all the data and saves it as it's attributes (ID and states). 

This simulates the bluetooth communication between smart cars and the infrastructure in a smart city (connectivity field). 

The information can be used in order to double validate the state of a traffic light so to avoid eventual collision. 