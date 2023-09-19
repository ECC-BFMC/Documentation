Debugging
==============================

You can easily try do debug your Nucleo code by communicating with it via serial. In order to do so, you can install putty and connect the Nucleo 
directly to the PC. Check the COM of the device and then open putty, by setting it as follows:

    - Connection type - Serial
    - Speed - 19200
    - Serial line - COMxx
    - Terminal == local-echo - Force on
    - Terminal == Local line editing - Force on

Go to session and then press Open.

Now you can reset the Nucleo (black button) and check in the terminal for "I'm alive" message.