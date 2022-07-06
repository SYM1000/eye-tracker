// Este script prueba la precisión del modelo

// window.saveDataAcrossSessions = true // Guardar la información a través de sesiones con la que entrenamos el modelo
// webgazer.showVideoPreview(false) // Ocultar miniatura de la camara del usuario
let allData = ""
let target = "9"
let testingTime = 2000
let my2vw = window.innerWidth * 0.02
let my50vw = window.innerWidth * 0.5
let my50vh = window.innerHeight * 0.5
let my98vw = window.innerWidth - my2vw
var isRecording = false

allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
allData += "target_point: " + target + " target_x: " + my98vw + " target_y: " + (window.innerHeight - my2vw) + "\n"

webgazer.setGazeListener(function (data, elapsedTime) {
    if (data == null) {
        return;
    }

    if (isRecording) {
        allData += "x: " + data.x + " y: " + data.y + "\n"
    }

}).begin();


window.addEventListener('keydown', (event) => {
    if (event.key === "d") {
        // Descargar un txt con los datos
        event.preventDefault()
        downloadData();

    } else if (event.key === "r") {
        // Comenzar o detener la captura de datos
        isRecording = !isRecording

    } else if (event.key === "1"){
        // Establece el punto numero 1 como objetivo de la vista del usuario
        target = 1
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.02) + " target_y: " + (window.innerWidth * 0.02) + "\n"

    } else if (event.key === "2"){
        // Establece el punto numero 2 como objetivo de la captura
        target = 2
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.5) + " target_y: " + (window.innerWidth * 0.02) + "\n"

    } else if (event.key === "3"){
        // Establece el punto numero 3 como objetivo de la captura
        target = 3
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth - (window.innerWidth * 0.02)) + " target_y: " + (window.innerWidth * 0.02) + "\n"

    } else if (event.key === "4"){
        // Establece el punto numero 4 como objetivo de la captura
        target = 4
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.02) + " target_y: " + (window.innerHeight * 0.5) + "\n"

    } else if (event.key === "5"){
        // Establece el punto numero 5 como objetivo de la captura
        target = 5
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.5) + " target_y: " + (window.innerHeight * 0.5) + "\n"

    } else if (event.key === "6"){
        // Establece el punto numero 6 como objetivo de la captura
        target = 6
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth - (window.innerWidth * 0.02)) + " target_y: " + (window.innerHeight * 0.5) + "\n"

    } else if (event.key === "7"){
        // Establece el punto numero 7 como objetivo de la captura
        target = 7
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.02) + " target_y: " + (window.innerHeight - (window.innerWidth * 0.02)) + "\n"

    } else if (event.key === "8"){
        // Establece el punto numero 8 como objetivo de la captura
        target = 8
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth * 0.5) + " target_y: " + (window.innerHeight - (window.innerWidth * 0.02)) + "\n"

    } else if (event.key === "9"){
        // Establece el punto numero 9 como objetivo de la captura
        target = 9
        allData = ""
        allData += "screen_width: " + window.innerWidth + " screen_height: " + window.innerHeight + "\n"
        allData += "target_point: " + target + " target_x: " + (window.innerWidth - (window.innerWidth * 0.02)) + " target_y: " + (window.innerHeight - (window.innerWidth * 0.02)) + "\n"
    }

})


function downloadData() {
    alert("downloading all data");

    var textFile = null, makeTextFile = function (text) {
        var data = new Blob([text], { type: 'text/plain' });

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        // returns a URL you can use as a href
        return textFile;
    };

    var link = document.createElement('a');
    // agregar "calibrado" cuando queremaos medir el modelo después de ser calibrado
    var fileName = 'eye_tracker_data_' + target + "_calibrado" + '.txt'
    link.setAttribute('download', fileName);
    link.href = makeTextFile(allData);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}

