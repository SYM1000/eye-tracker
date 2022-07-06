// Archivo usado para experimentar con sockets. No tomar en cuenta.

import express from 'express'
const app = express();
import http from 'http'
// const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
import { Server } from 'socket.io'
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit("message", "Hola, cliente")
    // sendMessage("Hola desde el server")

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


function sendMessage(text) {
    // Sends a message using our socket
    console.log("enviando mensaje por socket")
    // io.emit("message", text)
}

export {io, sendMessage}