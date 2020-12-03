/*

Modifica las funciones de tal manera que, en caso de que se produzca un  error en la validación,
el campo implicado tenga el reborde rojo, y la etiqueta  que lo acompaña también aparezca de color rojo.
Para ello deberás crear las clases css necesarias (puedes incluirlas en el  propio html si lo deseas)
para que se visualice correctamente. Ten en cuenta que si el usuario mete correctamente el nombre, deberá volver  a su color habitual.


*/

let formulario = document.getElementById("FormularioDisco");

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}


function campo20() {
    let elemento = document.getElementById("nombre");
    let elemento2 = document.getElementById("grupo")
    let etiqueta = document.getElementById("nombre").previousElementSibling;
    let etiqueta2 = document.getElementById("grupo").previousElementSibling;
    console.log(etiqueta)
    limpiarError(elemento);
    limpiarError(etiqueta);
    limpiarError(elemento2);
    limpiarError(etiqueta2);

    if (elemento.value === "") {
      alert("El campo Nombre no puede ser vacío");
      error(etiqueta);
      error2(elemento);      
      return false;

    }else if(elemento2.value === ""){
      alert("El campo Grupo no puede ser vacío");
      error(etiqueta2)
      error2(elemento2);
      return false;
    }


    return true;
}

function validarAnio () {
  let elemento = document.getElementById("anio").value;
  
  limpiarError(elemento);
  if (isNaN(elemento) || elemento.value === "") {
      error(elemento, "El Año de publicación tiene que ser numero.");
      result = false;
  } else if (elemento.toString().length < 4) {
      error(elemento, "El año de publicación debe ser de 4 caracteres.");
      result = false; 
  }
  return result;
}

function validarEstanteria () {
  let elemento = document.getElementById("Estanteria").value;
  let result = true;
  if (isNaN(elemento)) {
      error(elemento, "La localización es erronea")
      result = false;
  }
  return result;
}

function validar(e) {
  if (campo20() && validarAnio() &&  validarEstanteria() && confirm("Pulsa aceptar si deseas enviar el formulario")
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


function error2(elemento){

  elemento.className = "error2";
  elemento.focus();

}
  
function limpiarError(elemento) {
    elemento.className = "";
}