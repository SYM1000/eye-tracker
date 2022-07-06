# Proyecto Eye Tracker

El Proyecto cuenta con 2 experimentos que evaluán el desempeño del modelo.

## 1. Precisión
### Descripcion: 
Este experimento busca medir la precisión del modelo. El sujeto selecciona y mira fijamente alguno de los 9 puntos mostrados en la pantalla. 

En cada instante de tiempo se registra la posición de la pantalla donde el modelo predijo que estaba mirando el usuario y se compara con el objetivo real que estaba mirando el usuario.

### Intrucciones:
Para correr este experimento utilizamos el archivo `calibration.html`. La lógica de esta evaluación se encuentra en el archivo `calibrate.js`.

### Controles
Al correr este experimento se tienen varios controles descritos a continuación:

* **Precionar d:** Descarga un archivo con los datos capturados.
* **Precionar r:** Comienza o detiene a captura de información.
* **Precionar 1:** Indica al programa que el usuario está mirando el punto 1 (Esquina superior izquierda).
* **Precionar 2:** Indica al programa que el usuario está mirando el punto 2.
* **Precionar 3:** Indica al programa que el usuario está mirando el punto 3 (Esquina superior derecha).
* **Precionar 4:** Indica al programa que el usuario está mirando el punto 4.
* **Precionar 5:** Indica al programa que el usuario está mirando el punto 5 (Centro de la pantalla).
* **Precionar 6:** Indica al programa que el usuario está mirando el punto 6.
* **Precionar 7:** Indica al programa que el usuario está mirando el punto 7 (Esquina inferior izquierda).
* **Precionar 8:** Indica al programa que el usuario está mirando el punto 8.
* **Precionar 9:** Indica al programa que el usuario está mirando el punto 9 (Esquina inferior derecha).

### Pantalla:
![precision](/resources/imgs/precision.png)
Nota: **Los puntos están marcados del 1 al 9 comenzando de izquierda a derecha y de arriba a abajo**. Por ejemplo el punto de la esquina superior izquierda es el numero 1, el punto localizado en la esquina superior derecha es el 3, el putno en la esquina inferior izquierda etá marcado como 7, el de la esquina derecha como 9 y el putno central es el 5.

### Resultados:
Una vez se capturen los datos y se descarguen, se obtendrá un archivo llamado de la siguiente forma: `eye_tracker_data_[numero][_calibrado].txt`.

`numero` indica el punto al que el usuario estaba mirando durante el experimento y `_calibrado` es opcional e indica si se utilizó la calibración del modelo para realizar la evaluación.

Para ver los resultados, utilizamos el notebook `plot_eye_tracker_data.ipynb` localizado [aquí](/Resultados/plot_eye_tracker_data.ipynb).

Nota: Dentro de la carpeta [resultados](/Resultados/) se encuentran las capturas de evaluaciónes anteriores.

## 2. Tiempo de respuesta
### Descripcion:
Este experimento busca medir el tiempo de respuesta del modelo. El sujeto selecciona y mira fijamente alguna de las 4 esquinas mostrados en la pantalla y posteriormente mueve la mirada a cualquiera de las otras 3 esquinas disponibles.

### Intrucciones:
Para correr este experimento utilizamos el archivo `index.html`. La lógica de esta evaluación se encuentra en el archivo `script.js`.

Nota: En los archivos `index.js` y `script.js` se encuentrá código que fue utilizado para otro experimento.

### Controles
Al correr este experimento se tienen varios controles descritos a continuación:

* **Precionar 1:** Indica al programa que la esquina dónde se comenzará el experimento es la 1.
* **Precionar 2:** Indica al programa que la esquina dónde se comenzará el experimento es la 2.
* **Precionar 3:** Indica al programa que la esquina dónde se comenzará el experimento es la 3.
* **Precionar 4:** Indica al programa que la esquina dónde se comenzará el experimento es la 4.
* **Precionar c:** Limpia la consola.


### Pantalla:
![tiempo](/resources/imgs/tiempo.png)

### Resultados:
El resultado para cada corrida (comenzar en una esquina y terminar en cualquier otra) son impresos a consola con el siguiente formato:

`Inicio:  [número de esquina]  Destino:  [número de esquina]  Tiempo:  [valor en milisegundos]`. 

Una vez completada la corrida, el resultado de la misma será impreso automáticamente a consola

Nota: El tiempo en milisegundos se obtiene desde que la estimación de webgazer sale de la esquina seleccionada por el usuario y se detiene una vez llega a cualquier otra esquina disponible.

## Más información:
[Presentación final](/resources/Presentaci%C3%B3n%20estancia.pdf)

[Reporte final](/resources/Reporte%20Estancia%20de%20Investigacion.pdf)

## Experimento extra:
[En desarrollo] Utilizando sockets mandar la opción que el usuario seleccionó a una BCI.