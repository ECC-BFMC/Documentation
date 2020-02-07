Semaphore operation
===================

Each one of the three semaphores send UDP broadcast messages every 0.1 ms on port 50007.

Message structure
`````````````````

Message contains semaphore ID and state on 2 bytes.

=========  =========  
 Message structure  
--------------------
  Byte1      Byte2    
=========  =========
   ID       State
=========  =========

Sample code for properly formatting the received data:


.. code-block:: Python

   data, addr = self.sock.recvfrom(4096) # buffer size is 1024 bytes
   # Format received data
   received_data = int.from_bytes(data,'big')


Semaphore ID
------------

The IDs that are sent are presented in the following table:

=============  =====================  =============
 Semaphore ID
---------------------------------------------------
1              2                      3
=============  =====================  =============
Intersection   Intersection           Start
               (opposite direction)   semaphore
=============  =====================  =============

Sample code for getting semaphore ID:

.. code-block:: Python
	
   # Extract ID from message
   ID = int(received_data / 256)

A filter on message origin can be used, as the following table shows:

=============  =============  =============
 Semaphore IP
-------------------------------------------
      1              2              3
=============  =============  =============
192.168.1.12   192.168.1.13   192.168.1.14 
=============  =============  =============

Semaphore State
---------------

=============  =============  =============
 Semaphore State
-------------------------------------------
      0              1              2
=============  =============  =============
     RED          YELLOW          GREEN
=============  =============  =============

Sample code for getting semaphore state:

.. code-block:: Python

   # Extract state from message
   s1_state = (received_data % 256)

You can find the example code on the following [`link <https://bfmcstartup.readthedocs.io/en/stable/dataacquisition/TrafficLights.html>`_]. 

