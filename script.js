// Este archivo comenzó como un script que realizaba una acción cuando el usuario veía una de las esquinas por cierto tiempo. 
// Ahora es utilizado para realizar una evaluación de los tiempos de respuesta del modelo.

// window.saveDataAcrossSessions = true // Guardar la información con la que entrenamos el modelo
// webgazer.showVideoPreview(false) // Mostrar miniatura de la camara del usuario
// import sendMessage from 'server.js'

// import { sendMessage } from "server";
// var sendMessage = require('./server.js')
// import sendMessage from './server.js';

const waitTime = 4000 // 4 segundos
let startTime = Number.POSITIVE_INFINITY
let current = ""
let allData = ""
let opcion = 0;
const option1 = document.querySelector('.option-1')
const option2 = document.querySelector('.option-2')
const option3 = document.querySelector('.option-3')
const option4 = document.querySelector('.option-4')

// Experimento del tiempo
var startPoint = 0
var currentPoint = 0
var startPointTime = ""
var endPoint = 0

webgazer.setGazeListener(function (data, elapsedTime) {
    if (data == null) {
        return;
    }

    option1.style.animation = ''
    option2.style.animation = ''
    option3.style.animation = ''
    option4.style.animation = ''


    /*
    Look Directions
    UPPERLEFT
    UPPERRIGHT
    LOWERLEFT
    LOWERRIGHT
    */

    if (startPoint !== 0) {
        if (currentPoint === startPoint) {
            startPointTime = Date.now()

        } else if (currentPoint !== startPoint) {
            console.log("Inicio: ", startPoint, " Destino: ", currentPoint, " Tiempo: ", (Date.now() - startPointTime))
            startPoint = 0
        }
    }



    if (data.x < window.innerWidth / 4 && data.y < window.innerHeight / 4) {
        if (current != "UPPERLEFT") {
            startTime = elapsedTime
            current = "UPPERLEFT"
            opcion = 1
        }

        // option1.style.background = 'orange'
        option1.style.animation = 'timer 4s infinite linear'
        currentPoint = 1

    } else if (data.x > window.innerWidth - (window.innerWidth / 4) && data.y < window.innerHeight / 4) {
        // option2.style.backgroundColor = 'orange'
        if (current != "UPPERRIGHT") {
            startTime = elapsedTime
            current = "UPPERRIGHT"
            opcion = 2
        }

        option2.style.animation = 'timer 4s infinite linear'
        currentPoint = 2

    } else if (data.x < window.innerWidth / 4 && data.y > window.innerHeight - (window.innerHeight / 4)) {
        // option3.style.backgroundColor = 'orange'
        if (current != "LOWERLEFT") {
            startTime = elapsedTime
            current = "LOWERLEFT"
            opcion = 3
        }

        option3.style.animation = 'timer 4s infinite linear'
        currentPoint = 3

    } else if (data.x > window.innerWidth - (window.innerWidth / 4) && data.y > window.innerHeight - (window.innerHeight / 4)) {
        // option4.style.backgroundColor = 'orange'

        if (current != "LOWERRIGHT") {
            startTime = elapsedTime
            current = "LOWERRIGHT"
            opcion = 4
        }

        option4.style.animation = 'timer 4s infinite linear'
        currentPoint = 4

    } else {
        startTime = Number.POSITIVE_INFINITY
        current = ""
        opcion = 0
    }

    // Ocurre cuando ha pasado una cierta cantidad de tiempo
    /* if (startTime + waitTime < elapsedTime) {

        if (current === "UPPERLEFT") {
            console.log("Opción 1")
        } else if (current === "UPPERRIGHT") {
            console.log("Opción 2")
        } else if (current === "LOWERLEFT") {
            console.log("Opción 3")
        } else if (current === "LOWERRIGHT") {
            console.log("Opción 4")
        }

        // reset variables
        startTime = Number.POSITIVE_INFINITY
        current = ""

        // reset styles
        option1.style.animation = ''
        option2.style.animation = ''
        option3.style.animation = ''
        option4.style.animation = ''

    } */

    //allData += "x: " + data.x + ", " + "y: " + data.y + ", timestamp: " + new Date().getTime() + ", opcion: " + opcion +  "\n"


}).begin();



// download current session weg gazer data (coordinates and timestamps)
window.addEventListener('keydown', (event) => {
    if (event.key === "d") {
        event.preventDefault()
        alert("downloading all data")

        var textFile = null,
            makeTextFile = function (text) {
                var data = new Blob([text], { type: 'text/plain' });
                if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                }
                textFile = window.URL.createObjectURL(data);
                return textFile;
            };

        var link = document.createElement('a');
        link.setAttribute('download', 'eye_tracker_data.txt');
        link.href = makeTextFile(allData);
        document.body.appendChild(link);

        window.requestAnimationFrame(function () {
            var event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        });


    } else if (event.key === "1") {
        // Para el experimento del tiempo de respuesta establece como punto de inicio la esquina 1
        startPoint = 1

    } else if (event.key === "2") {
        // Para el experimento del tiempo de respuesta establece como punto de inicio la esquina 2
        startPoint = 2

    } else if (event.key === "3") {
        // Para el experimento del tiempo de respuesta establece como punto de inicio la esquina 3
        startPoint = 3

    } else if (event.key === "4") {
        // Para el experimento del tiempo de respuesta establece como punto de inicio la esquina 4
        startPoint = 4

    } else if (event.key === "c") {
        console.clear()
    } else if (event.key == "x") {
        console.log("------- Cambiando test -------")
    }


})