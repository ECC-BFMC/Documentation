ROS with simulator data
========================

Both the car and the PC running the simulation have to be on the same network and the ssh communication has to be enabled on the RPi. In order for the nodes to be able to communicate between them, some environmental variables have to be set. A script was created for this purpose: On the RPI, you have to run the script as follows:

``source src/utils/network.sh PC_IP``

On the PC running the simulation, you have to run the script as follows:

``source src/utils/network.sh``

This setup will make the nodes on your car interact with the roscore from the PC, and you will be able to see the entire setup of the network. The file have to be sourced for each terminal. The core can be swapped to run on the phisical car as well.

Run the simulation on the PC:

``roslaunch sim_pkg map_with_car.launch``

Run the control nodes of the car on the RPI:

``roslaunch utils start_car_virtual.launch``

Now the simulator will publish some info on the topics and you can subscribe to them from your car (automobile/image_raw, automobile/localisation, automobile/IMU, automobile/feedback, automobile/semaphores/_).

Now the simulator will subscribe to some info on the topics and you can publish on them from your car (automobile/command)

Simulator
---------

This is the simulator


and this is how you put a piece of code here:

.. code-block:: bash

   locale  # check for UTF-8

   sudo apt update && sudo apt install locales
   sudo locale-gen en_US en_US.UTF-8
   sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
   export LANG=en_US.UTF-8

   locale  # verify settings