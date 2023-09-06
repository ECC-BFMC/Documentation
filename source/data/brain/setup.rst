Project Setup
=============

1. **Download Raspberry Pi Imager**
   ---------------------------------
   You can download the Raspberry Pi Imager from the official website:
   `Raspberry Pi Imager Download <https://www.raspberrypi.com/software/>`

2. **Choose the Raspberry Pi OS**
   -------------------------------
   When configuring the Raspberry Pi Imager, select "Raspberry Pi OS Lite" as your operating system (OS) of choice.

3. **Set Up Your Raspberry Pi**
   -----------------------------
   - Configure your desired username and password.
   - Set up your Wi-Fi network settings.
   - Enable SSH connection for remote access.

4. **Write the OS Image**
   -----------------------
   Use Raspberry Pi Imager to write the selected OS image to your SD card.

5. **Insert SD Card and Power Up Raspberry Pi**
   --------------------------------------------
   Place the SD card into your Raspberry Pi and power it up.

6. **Find the IP Address of Your Raspberry Pi**
   --------------------------------------------
   Locate the IP address of your Raspberry Pi on your local network.

7. **Connect to the Raspberry Pi via SSH**
   ----------------------------------------
   Use SSH to establish a connection to your Raspberry Pi:

    ```bash
    ssh <username>@<Raspberry_Pi_IP_Address>
    ```

8. **Clone the Brain Repository**
   -------------------------------
   Clone the Brain repository from GitHub to your desired location (e.g., under "Documents"):

    ```bash
    git clone https://github.com/ECC-BFMC/Brain
    ```

9. **Update and Install Necessary Software**
   ------------------------------------------
   Run the following commands to update and upgrade your Raspberry Pi's software and install required packages:

    ```bash
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install python3-opencv
    pip3 install -r requirements.txt
    ```

10. **Enjoy Your Raspberry Pi Brain Setup**
    ----------------------------------------
    Your Raspberry Pi is now set up with the Brain repository, and all the necessary software is installed. Enjoy exploring and experimenting with your Raspberry Pi Brain project!
