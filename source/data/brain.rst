Brain Project
=============

.. toctree::
   :maxdepth: 1
   :hidden:

   brain/newComponent
   brain/mainFlow

* :doc:`New component <brain/newComponent>`
  
  - How to integrate new components into the existing codebase.

* :doc:`How it works <brain/mainFlow>`
  
  - Explanations regarding the internal flow and structure of the code.

Alternative Projects
--------------------

There are two alternative implementations: **Startup_c** and **Brain_ROS**.  
However, **neither is currently maintained**, so if you choose to develop using one of them, you will need to adapt it using the information provided in this documentation.

Overview
--------

This documentation describes the **Brain** project, which runs on the Raspberry Pi.  
It simplifies the startup of your autonomous vehicle by providing:

- Basic built-in functionalities  
- A clear structure for adding your own modules  
- APIs for interacting with the **V2X systems**

Everything in the project can be tuned or extended according to your specific requirements.

Features
--------

The Brain project includes the following elements and mechanisms:

- **Service-like architecture** based on **four prioritized message queues**, where components can send messages depending on urgency.
- **Examples of parallel processes**, each using different worker threads to handle tasks concurrently.
- **A message definition class** describing all messages, their owners, and their types.
- **Subscription examples** for various message topics.
- **A gateway** that receives messages and forwards them to all subscribers (useful for testing and development).
- **Camera driver process**, capable of:
  - Adjusting camera parameters in real time (ISO, aperture, etc.)
  - Sending images in multiple formats or resolutions
  - Enabling straightforward video recording
- **Serial communication driver**, responsible for:
  - Reading data from the Nucleo board (e.g., battery status)
  - Sending commands to the Nucleo (e.g., speed commands)
  - Running read/write operations on separate threads
- **UDP-based V2X API**, receiving asynchronous data from:
  - Other cars
  - Semaphores (traffic lights)
- **TrafficCommunication server API**, which:
  - Receives location data from the localization device  
  - Sends traffic-related information back to the server
- **Asynchronous server process** for communication with the *Demo* project on the Computer:
  - Acts as a middleware between the vehicle and the demo software  
  - Receives movement commands from the PC  
  - Allows setting various parameters  
  - Forwards data from the Brain project to the dashboard for visualization

Should include messages handling, state machine, workerprocess...
TO BE CHECKED!!