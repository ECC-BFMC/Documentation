Embedded platform
=================

.. toctree::
   :maxdepth: 1
   :hidden:

   embeddedplatform/preliminarySetup
   embeddedplatform/continuous
   embeddedplatform/newComponent
   embeddedplatform/debugging
   embeddedplatform/mainFlow

The embedded platform refers to the code that is written on the Nucleo board, more precisely the low level application, which runs on the 
micro-controller. It aims to provide an interface between high level processing and low level motors control and sensor reading. The code 
uses mbed os version=5.6. 

The project is structured on 4 layers: Brain, Drivers, Periodics and Utils. 
    - The 'Brain' folder contains the state machine of the Nucleo. More controlling methods can be handled here. 
    - The 'Drivers' folder contains the code to interact directly with the steering motor, speeding motor and with the IMU.
    - The 'Periodics' folder contains the tasks that are executed periodically by the Nucleo board, based on interruptions, such as writing the sensors values on the serial Tx or checking the serial Rx, then applying the necessary callbacks (used for movements control).
    - The 'Utils' folder contains various working tools, such as the serial communication message construction/deconstruction, callbacks on the necessary functions, tasks execution and queues.


The low level control application, which runs on the Nucleo-F401RE, is implemented in C/C++ language. In the following you can find some tips on how
to further develop on top of the project.