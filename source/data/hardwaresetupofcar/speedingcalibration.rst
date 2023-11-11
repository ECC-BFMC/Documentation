Speeding calibration
=====================

As part of our commitment to delivering exceptional experiences, each participant will receive a finely assembled RC car. Our dedicated assembly line has crafted these cars with precision, ensuring that they're ready for action right out of the box.

There might be minor variations in the speeding calibration due to the manual assembly process. This isn't a flaw, but a proof to the individual attention each car has received. For instance, while you might set the car's speed to 10 cm/s, it might be moving at, say, 10.5 cm/s in reality.

The Solution
------------
To enhance your experience and ensure consistent performance, we've deduced a mathematical solution to address these minor calibration variations…

Required Tools:
----------------

To accurately measure the real speed of the car, it's essential to have the right tools on hand and to follow the steps below:

1. Ruler: For precise measurements.
2. Two markers:
    a. One for the initial position of the car.
    b. One for the final position of the car.

Measuring Procedure:
----------------------

Below, you will find a figure illustrating the steps and the procedure required for the measurement process.

.. .. image:: ../../images/hardwaresetupforcar/demoMeasurement.png
..    :align: center
..    :width: 50%

1. Place the first marker underneath the midpoint of the rear axle when the car is at point 0.
2. Utilize Command #9 to establish the tested speed for a specified duration. This command is structured to precisely control the vehicle's velocity over a designated time interval.
3. Place the second marker underneath the midpoint of the rear axle at the final position.
4. Ensure that the starting and final positions are on the same straight line.
5. Use the ruler to measure the distance between the two markers.
6. Use this value in the formula below.
   
   .. math:: S = \frac{d}{t}
   .. math:: \text{where:}
   .. math:: d = \text{measured distance}
   .. math:: t = \text{provided time}

By following these steps, you'll obtain an accurate measurement of the car's speeding in cm/s. Ensure to perform these measurements in a stable environment without disturbances for the most accurate results.

Fine tune the speeding system
--------------------------------

To fine-tune the speeding of your RC car, we focus on the following main parameter:

**step_value parameter**
   - In situations where the velocity system response is either below or above the expected value during testing, this parameter should be adjusted. For example, when testing 10 cm/s for 10 seconds and getting distances like 105 or 95, adjustments are needed.

.. Adjusting the zero_default parameter
.. ---------------------------------------

.. .. math:: \Delta DC = D \times SV
.. .. math:: \text{where:}
.. .. math:: D = \text{Average discrepancy}
.. .. math:: SV = \text{actual step value}

.. 1. **Adjustment to zero_default (ΔDC)**:
..    This is the product of the discrepancy and the step value. It helps us determine how much we need to adjust our zero_default parameter to match our desired turning angles.

.. 2. **Average Discrepancy (D)**:
..    This represents the average difference between the desired and actual turning angles of the car, in both positive and negative directions.. To calculate the average discrepancy you can use the formula below:
   
..    .. math:: D = \frac{(dpa - apa) + (dna - ana)}{2}
..    .. math:: \text{where:}
..    .. math:: dpa = \text{desired positive angle}
..    .. math:: apa = \text{actual positive angle}
..    .. math:: dna = \text{desired negative angle}
..    .. math:: ana = \text{actual negative angle}

..    1. **Desired Positive Angle (dpa)**: The angle you want the RC car to turn in a positive direction.
..    2. **Actual Positive Angle (apa)**: The actual angle to which the RC car turns in a positive direction.
..    3. **Desired Negative Angle (dna)**: The angle you want the RC car to turn in a negative direction.
..    4. **Actual Negative Angle (ana)**: The actual angle to which the RC car turns in a negative direction.

.. 3. **Step Value (SV)**:
..    This value denotes the actual measure or increment by which the steering system operates.

.. Using the formulas above, you can calculate the `ΔDC` value, which will guide you on adjusting the `zero_default` value of the steering system. By doing this, you'll ensure that when you command your RC car to turn at a specific angle, it does so accurately on both sides!

.. After determining the ΔDC value using the discrepancy (D) and the actual step value (SV), you can adjust the `zero_default` value of the steering system with the following formula:

.. .. math:: \text{new zero default} = \text{current zero} \pm \Delta DC
.. .. math:: \text{where:}

.. - **new zero default** is the updated value to be set for the steering system.
.. - **current zero** is the present `zero_default` value of the steering system.
.. - **ΔDC** is the value we calculated earlier, which represents the adjustment needed.

.. **Understanding the Plus-Minus Sign**

.. When adjusting the `zero_default` value, it's important to understand the direction in which to make the adjustment:

.. - If the deviation is greater in the negative direction, you should increase the `zero_default` value. 
..   For example, if you test the steering direction for the value set (15, -15) and you get results like (15.5, -16.5), then you should increase the `zero_default` value.

.. Conversely:

.. - If the deviation is greater in the positive direction, decrease the `zero_default`.

.. This new zero default value will ensure that the RC car steers accurately according to the desired angle, taking into account any discrepancies found in the actual turning angles.

Adjusting the Step Value parameter
-----------------------------------

To fine-tune the velocity system responsiveness, users can use this formula:

.. math:: NSV = CSV + \Delta SV
.. math:: \text{where:}
.. math:: NSV = \text{New Step Value}
.. math:: CSV = \text{Current Step Value}
.. math:: \Delta SV = \text{Change in Step Value}

**ΔSV** can be calculated as:

.. math:: \Delta SV = -\log_{10} \left( \frac{S}{S_{set}} \right) \times CSV
.. math:: \text{where:}
.. math:: S = \text{Actual speed (calculated previously)}
.. math:: S_{set} = \text{Speeding set value (the desired target for speeding)}

**Understanding the Plus-Minus Sign**

When adjusting the `step_value` value, it's important to understand the direction in which to make the adjustment:

- If the obtained velocity is smaller than the desired one, then you need to increase the step value.

Conversely:

- If the obtained velocity is greater than the desired one, then you need to decrease the step value.

**Update predefined values for Steering**
------------------------------------------

Operational example: After conducting tests for the 10 cm/s value and determining the appropriate step_value value, you must update it in the following variable:

.. code-block:: cpp

   const float speedValuesP[25] = {4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 26.0, 30.0, 35.0, 40.0, 45.0, 50.0};
   const float speedValuesN[25] = {-4.0, -5.0, -6.0, -7.0, -8.0, -9.0, -10.0, -11.0, -12.0, -13.0, -14.0, -15.0, -16.0, -17.0, -18.0, -19.0, -20.0, -21.0, -22.0, -26.0, -30.0, -35.0, -40.0, -45.0, -50.0};
   const float stepValues[25] = {0.00107, 0.00088, 0.00076, 0.00067, 0.0006, 0.00055, 0.00051, 0.00047, 0.00043, 0.00041, 0.00039, 0.00037, 0.00035, 0.00034, 0.00033, 0.00032,
                                0.0003, 0.00029, 0.00028, 0.00025, 0.00024, 0.00021, 0.00019, 0.00018, 0.00017};


.. code-block::

   Embedded_Platform\include\drivers\speedingmotor.hpp

You must pay attention to the position within the array of the values. If 10 has an index of 2 in the positive values array, it should have the same index in the negative values array. The same applies to the step_value value.

**Utilize this guidance and the formulas provided to ensure that the speeding mechanism is adjusted appropriately for optimal performance.**
**Remember, accurate speeding calibration is crucial for optimal performance, so ensure you follow the above steps carefully.**