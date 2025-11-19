Explaining
==========

Dynamic View
------------

To add or modify a cluster in the dashboard, check the subfolders under:

``src/dashboard/frontend/src/app/cluster``

The backend component responsible for forwarding gateway messages to the frontend is:

``src/dashboard/processDashboard.py``

On the frontend side:

- Messages **explicitly handled** in the view (i.e., not shown in the JSON table) are processed in  
  ``src/dashboard/frontend/src/app/webSocket/web-socket.service.ts`` under the ``handledEvents`` list.

.. image:: ../../images/demo/front-end-explained.png
   :align: center
   :width: 80%

JSON Table
----------

Any message circulating through the gateway that is **not** explicitly handled elsewhere will appear in the JSON table automatically.

If you want to dynamically send messages *from* the JSON table, you must first add the corresponding entry to the  
`table_state`_ JSON file. The message names must match those defined in `allMessages`_.

.. _table_state: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/table_state.json
.. _allMessages: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/messages/allMessages.py

Fields explained:

- **Interval** – How frequently the message is received.  
- **Value** – The most recent value of the message.  
- **Range** – The value to send/save (editable range).  
- **Action** – Enables Save/Load actions for this message.  
- **Changed** – Indicates that the current value differs from what is stored in the Load file.

Button behavior:

- **Save** – Saves the selected value to the JSON file for future use  
  (e.g., saving tuned PID parameters).  
- **Load** – Sends the stored value through the gateway  
  (e.g., reloading previous PID tuning values).  
- **Reset** – Reverts the editable value to what is already stored in the JSON file  
  (e.g., undoing accidental overshoot while tuning).

.. image:: ../../images/demo/front-end-explained-extended.png
   :align: center
   :width: 80%

Calibration Procedure
---------------------
TO BE DONE!!!
