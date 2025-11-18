explaining
==========



.. image:: ../../images/demo/front-end-explained.png
  :align: center    
  :width: 80%

All the messages that are circulating through the gateway and are not specifically handled will be automatically displayed in the JSON table.

If you wish to dynamically send messaged from the gateway, you can do so first by adding it `here`_ (they have to match the messages in the `allMessages`_ file). 

.. _`here`: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/table_state.json
.. _`allMessages`: https://github.com/ECC-BFMC/Brain/blob/master/src/utils/messages/allMessages.py

The specific fields:
- Interval shows how frequent the specific message is received.
- Value indicates the last value
- Range of values: indicates the value to send/save.
- Action, indicates that you want the Save and Load buttons to act on the specific message
- Changed, indicates that the value selected is different from what's saved in the Load file.

The buttons behavior:
- Save button saves the specific value in the json for future use (ex: final PID control values).
- Load button sends those messages over the gateway (ex: fine tuning the PID control values).
- Reset button resets the value in the table with the value that is already in the JSON file (ex: overshooting the PID control values) 

.. image:: ../../images/demo/front-end-explained-extended.png
  :align: center    
  :width: 80%