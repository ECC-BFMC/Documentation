Cars and Semaphores
====================

UDP is a way to rapidly send & receive on the network un-targeted messages, that generally are just informative
and don't need a validation of the sender (due to communication speed necessity or simply because there's no need to pinpoint the 
sender). It should be simply used to validate messages or states.

The two messages that are streamed in this way are: Semaphores and Cars

Semaphore
---------

Each semaphore broadcast messages with a frequency of 5 Hz, including the semaphore position on the map and it's state.

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

=============  =============  =============  =============
 Semaphore cycle
----------------------------------------------------------
    State          State          State          State         
=============  =============  =============  =============
     RED          YELLOW          GREEN           RED          
=============  =============  =============  =============


Car
---

Each dynamic vehicle (moving car) broadcast messages with a frequency of 5 Hz, including the car position and it's id. 
The technical data of the stream (accuracy, delay) are the same as the ones taken from the localization system.


To run
------

The API is listening on 5007 port for UDP messages. You can run the src/data/CarsAndSemaphores/processCarsAndSemaphores.py 
script to intercept all the data and test it. 

The simulated script, which sends fake data, can be found on the Computer project, and you can run it on your computer in order to 
validate data transmission