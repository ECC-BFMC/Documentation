Setup 
=====
1. **Clone the Computer Repository**
   -------------------------------
   Clone the Computer repository from GitHub to your desired location (e.g., under "Documents"):

    ```bash
    git clone https://github.com/ECC-BFMC/Computer
    ```
2.  **Get raspberryPI`s IP address**
    ---------------------------------
    You will need raspberryPI`s IP address
    - Open the terminal.
    - Enter the following command: ```ping raspberrypi.local``` and push [Enter].
    - The IP address will be displayed just below the command.
    .. image:: ../images/computer/raspberry_address.png
        :align: center
        :width: 110%

3.  **IP address**
    ---------------------------------
    After you found your IP address you will have to write it in two places to be able to connect to Demo and Dashboard
    - Go to Demo => threadRemotehandler.py in the __init__ function of the threadRemoteHandlerPC class;
    - Change the current IP address with the raspberryPI`s IP
    - From now you will be able to connect the raspberry PI and Demo interface.
    .. image:: ../images/computer/threadRemoteHandler.png
        :align: center
        :width: 100%

    - Go to Dashboard => setup => PairingData.json.;
    - Change the current IP address with the raspberryPI`s IP
     .. image:: ../images/computer/dashboard_pair.png
        :align: center
        :width: 150%
4.  **To be able to run any of the interfaces/servers you have to install the required libraries**
    Run the following commands to update and upgrade your software and install required packages:
    ```bash
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install python3-opencv
    pip3 install -r requirements.txt
    ```
    You will find the requirements text file in the main folder.
5. **Enjoy using the Computer repository**
    - All is now set up. All the necessary software is installed. Enjoy tracking your progress with the Dashboard interface, use the Demo interface as way to an example and use the servers to improve your code.