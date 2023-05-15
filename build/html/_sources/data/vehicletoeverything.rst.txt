V2X - Vehicle to everything
============================

.. toctree::
   :maxdepth: 1
   :hidden:
   
   vehicletoeverything/localizationsysandmap
   vehicletoeverything/semaphore
   vehicletoeverything/livetraffic
   vehicletoeverything/vehicletovehicle

* :doc:`Localization system and mapping <vehicletoeverything/localizationsysandmap>`

  - Diagrams with connections

* :doc:`Semaphore <vehicletoeverything/semaphore>`

  - Diagrams with connections

* :doc:`Live traffic system <vehicletoeverything/livetraffic>`

  - Diagrams with connections

* :doc:`Vehicle to vehicle <vehicletoeverything/vehicletovehicle>`

  - Diagrams with connections   

For all the V2X communications to work, all the cars RPi (or computers replaced) will have to be connected to the LAN. Prior the competition, the teams will 
share with the organizers the MAC of the car computer and two other computers used for development & connection at the location.

API's are given in the brain project for interaction with all the systems, together with simulated servers (or components) in order to ensure that the 
real systems will interact with yours in a propper manner.

A set of API's and the corresponding simulated systems is made available, so that the participants can ensure the functionality of all the systems present at the 
location. The API's are located under src/data and the simulated systems under tests directory. The API's will run on the vehicle while the simulated systems on 
a remote machine.

The data acquisition layer contains all the API's necessary in order to communicate with all the systems present at the location.
For every API, a simulated system was designed, which you can run on a different machine and create a real connection, identical 
with the one you will find here, and communicate unreal information. This will help you ensure the integrity of the packages and 
of the functionalities. 

For every API, the testing module is also described in the links below.

All the simulated components given by the organizers have to be run with python2.7!

The given client API's are python2.7 and python3.7 compatible

Both the car and the remote machine/s have to be on the same network.