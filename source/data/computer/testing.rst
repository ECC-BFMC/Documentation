Simulated servers
=================
Starting the servers
---------------------
To start the simulated servers you will have to open two terminals(one for each one of them).

Starting the trafficCommunication server
-----------------------------------------
In the first terminal navigate to Computer/servers/trafficCommunicationServer. You can do that by using "cd" command.
In the second terminal navigate to Computer/servers/carsAndSemaphoreStreamSIM.
After you reached the destination, you will have to start it with the following command:

.. code-block:: bash

    python3 TrafficCommunication.py


and

.. code-block:: bash

    python3 udpStreamSIM.py


This two servers will simulate the position of the car on the map and the position of other cars and semaphores on the map. For semaphores it will also give the state.