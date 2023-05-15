Debugging the code
==================

Install putty and connect the nucleo directly to the PC. Check the COM of the device and then open putty.
Set putty as follows:

|   Connection type - Serial
|   Speed - 19200
|   Serial line - COMxx
|   Terminal == local-echo - Force on
|   Terminal == Local line editing - Force on


Go to session and press Open

Reset the Nucleo (black button) and check in the terminal for "I'm alive" message. If the message comes, the nucleo code is starting correctly.

In terminal, you can write messages as follows:

| ``#1:speed;;`` (Setting the navigation speed. where speed is [-0.2, +0.2])
| ``#2:angle;;`` (Setting the steering angle. where angle is [-20.0, +20.0])
| ``#3:angle;;`` (Setting the brake. where angle is [-20.0, +20.0])
| ``#4:pid;;``   (Setting the PID control for speed. Where pid is 1 or 0)
| ``#5:enc;;``   (Setting the encoder publishing speed. Where enc is 1 or 0)
| ``#6:speed;dist;;`` (setting a moving command. where speed is [-0.2, +0.2] and dist is [0.0, 2.0])
|