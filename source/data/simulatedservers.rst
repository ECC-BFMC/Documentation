Simulated servers
==================

There are 2 simulated servers, which behave the same way as the servers that can be found in our location. You should clone the `Computer`_ repo on your PC.

.. _`Computer`: https://github.com/ECC-BFMC/Computer

.. code-block:: bash

    git clone https://github.com/ECC-BFMC/Computer.git
    cd Computer
    git submodule update --init --recursive

To start the simulated servers you will have to open two terminals(one for each one of them).

In the first terminal run the following command. It will simulate the communication the trafficCommunicationServer and the getting of positions from it.

.. code-block:: bash

    cd src/servers/trafficCommunicationServer
    python3 TrafficCommunication.py


In the second terminal run the following command. It will simulate the streaming data from the semaphore.

.. code-block:: bash

    cd src/servers/SemaphoreStreamSIM
    python3 udpStreamSIM.py
