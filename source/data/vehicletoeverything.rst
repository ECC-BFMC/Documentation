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

  - How the localization system is working, and the mapping that comes with it.

* :doc:`Semaphore <vehicletoeverything/semaphore>`

  - How the semaphores are working.

* :doc:`Live traffic system <vehicletoeverything/livetraffic>`

  - How the livetraffic system is working and how to interact with it

* :doc:`Vehicle to vehicle <vehicletoeverything/vehicletovehicle>`

  - How the moving vehicles are working on the track.  

For all the V2X communications to work, all the cars RPi (or computers replaced) will have to be connected to the LAN. Prior the competition, the teams will 
share with the organizers the MAC of the car computer, so to get a static IP address for their car.

API's are given in the brain project for interaction with all the systems, together with simulated servers (or components) in order to ensure that the 
real systems will interact with yours in a propper manner.

A set of API's and the corresponding simulated systems is made available, so that the participants can ensure the functionality of all the systems present at the 
location. The API's will run on the vehicle while, under the Brain project, while the simulated systems on a remote machine, from the Computer project