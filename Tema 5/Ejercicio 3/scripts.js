window.onload = iniciar;

function iniciar() {
    document.getElementById("GenerarFormulario").addEventListener("click",generarFormulario, true);
}

function generarFormulario (){

    //Generar un salto de linea.

    let salto = document.createElement("br");

    //Generamos label del nombre del disco
    let labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "name");
    //Ponemos nombre al label linea
    labelNombre.innerHTML = "Nombre del disco: ";

    //Generamos el imput del nombre del discos
    let inputNombre = document.createElement("input");
    //Elegimos el tipo
    inputNombre.setAttribute("type", "text");
    //Como se llamara ese campo
    inputNombre.setAttribute("name", "nombre");

    //Generamos label del genero del discos
    let labelGenero = document.createElement("label");
    labelGenero.setAttribute("for", "name");
    labelGenero.innerHTML = "Genero del disco: ";

    //Generamos las opciones.
    let opcion1 = document.createElement("option");
    //Valor que tiene la opcion 1.
    opcion1.setAttribute("value", "rock");
    //Que valor mostrarar en el cliente
    opcion1.innerHTML = "Rock";

    let opcion2 = document.createElement("option");
    opcion2.setAttribute("value", "pop");
    opcion2.innerHTML = "Pop";

    let opcion3 = document.createElement("option");
    opcion3.setAttribute("value", "punk");
    opcion3.innerHTML = "Punk";

    let opcion4 = document.createElement("option");
    opcion4.setAttribute("value", "indie");
    opcion4.innerHTML = "Indie";

    //Creamos el elemento Select para que seleciones el usuarios con las opciones que hemos indicado anterior mente
    let SelectGenero = document.createElement("select");
    labelGenero.setAttribute("name", "genero");
    SelectGenero.setAttribute("id", "genero");
    //Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    SelectGenero.appendChild(opcion1);
    SelectGenero.appendChild(opcion2);
    SelectGenero.appendChild(opcion3);
    SelectGenero.appendChild(opcion4);

    //Generamos el formulario
    let formulario = document.getElementById("formulario");
    formulario.appendChild(labelNombre);
    formulario.appendChild(salto);
    formulario.appendChild(inputNombre);
    formulario.appendChild(salto);
    formulario.appendChild(labelGenero);
    formulario.appendChild(SelectGenero);
    




}