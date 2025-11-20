Explaining
==========

To add or modify a cluster in the dashboard, check the subfolders under: ``src/dashboard/frontend/src/app/cluster``

Currently `allMessages`_ going through the gateway are forwarded to the front-end. The backend component responsible for forwarding 
gateway messages to the frontend is: ``src/dashboard/processDashboard.py``. You can adapt it as needed.

The frontend has two main components: Dynamic view and JSON table.

Dynamic View
------------

- Messages **explicitly handled** in the dynamic view (image below) are processed in  
  ``src/dashboard/frontend/src/app/webSocket/web-socket.service.ts`` under the ``handledEvents`` list.

.. image:: ../../images/demo/front-end-explained.png
   :align: center
   :width: 80%

JSON Table
----------

Any message that is sent tot he frontend and is **not** explicitly handled in the dynamic view will appear in the JSON table automatically.

If you want to dynamically send messages **from** the JSON table, you must first add the corresponding entry to the  
`table_state`_ JSON file. The message names must match those defined in `allMessages`_.

.. _table_state: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/table_state.json
.. _allMessages: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/messages/allMessages.py

Fields explained:

- **Interval** – How frequently the message is received or sent.  
- **Value** – The most recent value of the message.  
- **Range** – The value to send/save (editable range, in case the message is set as a sending one).  
- **Action** – Enables Save/Load actions for this message.  
- **Changed** – Indicates that the current value differs from what is stored in the `table_state`_ file.

Button behavior:

- **Save** – Saves the selected value to the JSON file for future use  
  (e.g., saving tuned PID parameters).  
- **Load** – Sends the stored value through the gateway  
  (e.g., loading  PID tuning values).  
- **Reset** – Reverts the editable value to what is already stored in the JSON file  
  (e.g., undoing accidental overshoot while tuning).

.. image:: ../../images/demo/front-end-explained-extended.png
   :align: center
   :width: 80%

Calibration Procedure
---------------------
TO BE DONE!!!
