// Archivo usado para experimentar con sockets. No tomar en cuenta

import { sendMessage } from "./server"

window.addEventListener('keydown', (event) => {
    if (event.key === "d") {
        // enviar un mensaje desde el server
        event.preventDefault()
        sendMessage("hola")
        console.log("Mensaje enviado")
    }
})