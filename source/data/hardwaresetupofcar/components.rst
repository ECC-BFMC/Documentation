Components list
===============

Here's the description of the car, with all it's commercial hardware components:

.. image:: ../../images/hardwaresetupforcar/Car.png
   :align: center
   :scale: 100%

Here you can find the exact version of each used component:
    - Servo: `RS-610WP <https://www.conrad.com/p/reely-standard-servo-rs-610wp-mg-analogue-servo-gear-box-material-metal-connector-system-jr-2141322>`_ (or similar variants).
    - Brushless Motor: `Quickrun Fusion SE <https://www.hobbywingdirect.com/collections/quicrun-fusion-se>`_ (1800 KV version).
    - Power distribution board: `Custom-made <https://bosch-future-mobility-challenge-documentation.readthedocs-hosted.com/data/connectiondiagram/powerboard.html>`_.
    - Brain board:  `Raspberry Pi 4b <https://www.raspberrypi.com/products/raspberry-pi-4-model-b/>`_ (2Gb or 4GB version.. Due to product shortage).
    - Controller Board: `Nucleo F401RE <https://www.st.com/en/evaluation-tools/nucleo-f401re.html>`_.
    - Camera: `Raspbery Pi camera v3 <https://www.raspberrypi.com/products/camera-module-3/?variant=camera-module-3-wide>`_ (Wide version).
    - IMU: `BNO055 <https://www.bosch-sensortec.com/products/smart-sensors/bno055/>`_ (With various boards types. Yet identical sensor).
    - Battery: `2 cells LiPo <https://www.conrad.com/p/conrad-energy-scale-model-battery-pack-lipo-74-v-5500-mah-no-of-cells-2-20-c-softcase-xt90-1344152>`_ (or similar).
    - Chassis: `Reely TC-04 <https://www.conrad.com/p/reely-tc-04-onroad-chassis-110-rc-model-car-electric-road-version-4wd-arr-1406735>`_.

In this schematics you can see the connections diagram of all the HW components in the car. The GPIO lines are marked on each components.

.. image:: ../../images/hardwaresetupforcar/ConnectionDiagram.png
   :align: center
   :scale: 100%

Note
----
Please keep in mind that:
    - The chassis performances can be improved and we prepared a guide for that.
    - The powerboard has some tricky updates that can be done, and we prepared a guide for that as well.
    - The 3d models for the printed parts are all available as solidworks projects.