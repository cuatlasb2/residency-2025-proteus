const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const osc = require("osc");

// --- Setup Express + WebSocket ---
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // serve files from /public

// --- OSC Setup ---
const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
});

udpPort.on("ready", () => {
    console.log("OSC server listening on", udpPort.options.localPort);
});

udpPort.on("message", (oscMsg) => {
    console.log("Received OSC:", oscMsg);

    // Send message to browser clients
    io.emit("osc", oscMsg);
});

udpPort.on("error", (err) => {
    console.error("OSC Error:", err);
});

udpPort.open();

// --- Web Server ---
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Web server running at http://localhost:${PORT}`);
});