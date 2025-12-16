# residency-2025-proteus

# Video Documentation:

[![video documentation of proteus residency at B2](https://img.youtube.com/vi/fiz-EPAGUEg/0.jpg)](https://www.youtube.com/watch?v=fiz-EPAGUEg)

# Notes from B2 Staff:

The EulerRayCast.maxpat can use mocap 6DOF objects to put video projections where users 'point' on the scrim. 
Video and Audio assets on B2's OneDrive [Assets - GitHub > 250905 - Proteus Spatiotemporal Manipulations]

# Notes from B2 Resident (David Hunter):

# OSC to Web Browser

Here is an example for how to use the Qualisys tracking system rigid body objects and use them as pointers for a web browser based experience. 


## File Structure

index.html is where all your front-end html/css/js can go. The file contains socket.io to receive the oscillation messages through a websocket connected to index.js. Index.js is a simple node server that receives the OSC messages and sends them to the front-end index.html file.

---

# SET UP

## Install Node.js

Make sure Node and NPM (node package manager) is installed on the computer. This should be the case if you are using the BBX Mac Studio.


## Configure OSC (on TouchOSC App)

Make sure the device sending OSC messages and the computer receiving OSC messages are on the same wifi network.

Find your ip address using terminal command:
`ifconfig`

Look for the inet value, for example `10.233.69.205`
_It is not the inet6 value!_

Input that into the host field on TouchOSC

Set the port (outgoing) to 57121

Set the port (incoming) to 57122

For the example file I am using the TouchOSC App and the Automat5 template tab 3

- - -

# RUNNING THE EXAMPLE

## Run node

In VSCode open the terminal from the top bar menu: Terminal > New Terminal

If this is the first time running the project on a machine you might need to run this command first to install all the packages/libraries/dependencies:

`npm install`

Type the following command to start the node server which will allow messages to go from your OSC messager to your front-end index.html:

`node index.js`

The terminal should spit out the OSC server port and the address for index.html, which should be: `http://localhost:3000`

Load `http://localhost:3000` into the browser window and you should see index.html, see below:

![osc not yet connected](/assets/osc-to-web-1.png)  


When you interact with the OSC controller see OSC messages appear on the webpage and move the element around. OSC messages should also appear in the terminal and the console.

![osc connected and controlling element location and opacity](/assets/osc-to-web-2.png)

Make sure you have set TouchOSC correctly with host IP, port, and the Automat5 template tab 3. Here is an image of of the TouchOSC screen

![TouchOSC Automat5 template, tab 3](/assets/TouchOSC-Automat5-Tab3.PNG)

- - -

# EXTRAS

Run your files in the Chrome browser, launched from VS code following the directions above.

Use the application Syphoner (should be installed already on the BBX Mac Studio) to capture the Chrome browser window and send it to Resolume.

If you want to remove the address bar from the projection, set the top offset in Syphoner to `176px`

If you want to run the browser window to cover the whole width of the projection space, open the AppleScript file on the desktop and run it. Currently it is set to 3840px which covers 270° of the projection space. Please note that Chrome runs at double resolution so 3840px wide actually turns into 7680px wide, the true width of Black Box projection space at 270° projection. Therefore, to run at full 360° you would set the window width in the AppleScript to be 5440px.

Use Resolume to display the Syphoner output on the projection system.
