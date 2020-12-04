/*

A partir del formulario creado en la tarea1, realiza las funciones necesarias  para validarlo teniendo en cuenta:

    Nombre del disco: 20 caracteres, obligatorio.
    Grupo de música o cantante: 20 caracteres, obligatorio.
    Año de publicación: 4 caracteres numéricos.
    Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”): sin comprobación.
    Localización: almacenará un número de estantería: vacío o numérico.
    Prestado: sin comprobación.

Tendrás que tener en cuenta, además:

    Que utilizarás un método window.onload.
    Que la validación se asignará al formulario mediante un AddEventListener.
    Que los campos nombre del disco y grupo de música se validarán en la misma  función (campo20).
*/

let formulario = document.getElementById("FormularioDisco");
let formulario2 = document.forms["FormularioDisco"];

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}


function campo20() {
    let elemento = document.getElementById("nombre");
    let elemento2 = document.getElementById("grupo");
    limpiarError(elemento);
    limpiarError(elemento2);
    if (elemento.value === "") {
      alert("El campo no puede ser vacío");
      error(elemento);
      
      return false;
    }else if(elemento2.value === ""){
      alert("El campo no puede ser vacío");
      error(elemento2);
      return false;
    }


    return true;
}

function validar(e) {
    if (campo20() && confirm("Pulsa aceptar si deseas enviar el formulario")
    ) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}
  
  function limpiarError(elemento) {
    elemento.className = "";
}