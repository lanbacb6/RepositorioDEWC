/*
Vas a crear un juego (el memory) que consiste en encontrar parejas en 12 cartas con 6 parejas  de los personajes de los Simpson.
El juego consistirá en lo siguiente:

    La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un color (rojo).  Además habrá un cuadro de texto
    con el valor 0 pero no modificable.
    Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
    Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
    Si las dos imágenes son iguales, se dejará de mostrar la imagen, se cambiará el color de las celdas a verde y se añadirá 1  al cuadro de texto.
    Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el  color inicial.

En primer lugar, crea un esquema en una hoja con el arbol DOM del documento  html y en otra indica los métodos que vas
a crear asociados a qué evento.
Trata de utilizar el menor número de variables posibles: utiliza las propiedades de  los elementos para cambiar su
comportamiento.
Las imágenes son demasiado grandes, así que o bien la redimensionas o bien las muestras redimensionadas.
Deberás utilizar un código .css para los colores (y tamaño si así lo quieres) que puedes incustrar el mismo html o poner en un fichero aparte.
Puedes utilizar la siguiente función para permitir un "delay" (tiempo de espera) entre que se muestran las imágenes y se ocultan:

setTimeout(() => {
          // Código a ejecutar después de que pase...
        }, 1000); // ... el número de milisegundos que aquí se especifique, en este caso, 1 segundo.
*/

nodosCartas = document.getElementsByClassName("carta");
    for (const nodo of nodosCartas) {
      nodo.addEventListener("click", comprobarIguales, false);
    }

    let cartas = [];
    let imagesCartas = [
      "images/03_homer.png", 
      "images/01_lisa.png",
      "images/05_maggie.png",
      "images/02_bart.png",      
      "images/02_bart.png",
      "images/04_marge.png",
      "images/06_flanders.png",      
      "images/05_maggie.png",
      "images/04_marge.png",
      "images/01_lisa.png",
      "images/03_homer.png",
      "images/06_flanders.png",
      
    ];
    let clic_counter = 0;

    function verImagenes(nodo) { 
      document.getElementById(nodo.id).src = imagesCartas[nodo.id.split("_")[1]];
    }

    function comprobarIguales(objeto) {
      objeto = objeto.target;
      clic_counter+1;
      cartas[clic_counter - 1] = objeto;
      verImagenes(cartas[clic_counter - 1]);
     

      if (cartas[0] !== undefined && cartas[1] !== undefined && clic_counter === 2) {    

        clic_counter = 0;
        setTimeout(() => {
          if (cartas[0].src === cartas[1].src) {
            cartas[0].style = "background-color: green;";
            cartas[1].style = "background-color: green;";
            cartas[0].nextElementSibling.value = 1;
            cartas[1].nextElementSibling.value = 1;
          }
          for (let i = 0; i <= 1; i++) {
            document.getElementById(cartas[i].id).src = "";
            cartas[i] = undefined;
          }
        }, 1000);
      }
    }