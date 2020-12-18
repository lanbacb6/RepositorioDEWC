/*
Dispones del código de una página web en html: pagina.html. Introduce en el apartado de script el código necesario para extraer:

    El número de párrafos de la página.
    El texto del segundo párrafo.
    El número de enlaces de la página.
    La dirección del primer enlace.
    La dirección del penúltimo enlace.
    El número de enlaces que apuntan a /wiki/Municipio
    El número de enlaces del primer párrafo.

Para agregar texto en la página deberás introducir una etiqueta div con el id=info y  añadir en ella toda la información detallada
mediante:


let info = document.getElementById(“info”);

info.innerHTML = “Texto informativo”;

*/

window.addEventListener("load", inicio);

function inicio() {

    // variable contenido id de info donde se mostrara 
    let info = document.getElementById("info");

    // Para saber cuantos parrafos tiene el articulo.
    
    let parrafo = document.getElementsByTagName("p");

    info.innerHTML = "Este articulo tiene " + parrafo.length +" parrafos <br><br>";

    // texto segundo parrafo.

    let texto = document.getElementsByTagName("p");

    info.innerHTML +=" <strong>Parrafo 2:</strong> <br> " +texto[1].textContent+"<br><br>"

    // Para saber cuantos enlaces tiene el articulo.  

    let enlaces = document.getElementsByTagName("a");

    info.innerHTML += "Este articulo tiene "+ enlaces.length +" enlaces <br><br>";

    //Mostrar la direccion primer enlace.

    let direccion = document.getElementsByTagName("a");

    info.innerHTML += "Primer enlace "+direccion[0].href+"<br><br>"


    // Mostrar la direccion del penultimo enlace.

    info.innerHTML+= "Penultimo enlace "+direccion[direccion.length -2].href+"<br>"

    //Enlace enlaces que apuntan a /wiki/Municipio

    let cantidad = 0;

    for(let i = 0; i < doc.lastChild.getElementsByTagName("a").length;i++) {
        if(doc.lastChild.getElementsByTagName("a")[i].attributes["href"].value == "/wiki/Municipio") {
            cantidad++;
        }
    }

    info.innerHTML += "La cantidad de enlaces con dirección /wiki/Municipio es "+cantidad+".<br><br>";

    //El número de enlaces del primer párrafo.

  





}


