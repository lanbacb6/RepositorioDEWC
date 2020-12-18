/*

    Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
    Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
    Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
    Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.

*/


window.onload = iniciar;


function iniciar(){
    document.getElementById("crear").addEventListener("click", crearElemento);
    document.getElementById("borrarArriba").addEventListener("click", borrarArriba);
    document.getElementById("borrarAbajo").addEventListener("click", borrarAbajo);

    
  
}

function crearElemento(){

 
    let ciudad = prompt("Introduzca el nombre de la nueva ciudad")
 
    // crear un elemento li
     let li = document.createElement("li");
 
     // crear un nodo de texto y se lo añado al li
     let texto = document.createTextNode(ciudad);
     li.appendChild(texto);
 
     // añado el li a la lista primero
     let lista = document.getElementById("lista");
     lista.appendChild(li);
 
 }


function borrarArriba() {

    //Cogemos la lista
    let lista = document.getElementById("lista");   


    // Cogemos el primer y lo eliminamos
    lista.removeChild(lista.firstElementChild);


}

function borrarAbajo(){

    
    //cogemos la lista 
    let lista = document.getElementById("lista");   


    //Cogemos el utlimo elemento de la lista t lo eliminamos
    lista.removeChild(lista.lastElementChild);

}


