// Archivo usado para experimentar con sockets. No tomar en cuenta
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// receive a messsage from the server
socket.on("message", (arg) => {
    console.log("Cliente recibe el mensaje: " + arg)
});

// send a message to the server
socket.emit("howdy", "stranger")