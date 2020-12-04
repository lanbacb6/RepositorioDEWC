/*

•Walter White y Jesse Pinkman tienen que controlar las bolsas de producto azul que  cocinan para distribuir en Alburquerque. Para ello tienen que crear un formulario

que almacene la información de cada bolsa y validarlo teniendo en cuenta lo siguiente:

•Fecha de creación: obligatorio y con formato dd/mm/aaaa.
•Cocinero: será un nombre en clave formado por dos letras en mayúscula, un  símbolo y cuatro dígitos (ej. WW$1234)
•Destinatario: estará formado por dos o tres letras mayúsculas correspondientes  al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el  código de distrito de 4 digitos (ej. NM_alburquerque:1234).
•Gramos: será un número del 100 al 5000.
•Composición: estará formado por una cantidad en gramos seguida de dos  conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)
•Número de cuenta de EEUU: ver diapositiva siguiente:
•Supongamos que un número de cuenta estadounidense tiene el siguiente formato:
•Dos letras: suponemos que el valor de cada letra es del 1 al 26 (no hay ñ ni ll).
•Dos dígitos: debe corresponderse con la suma de la primera letra y la segunda:  en caso de que sea menor que 10 se pone el 0 delante.
•Un guión.
•Doce dígitos de cuenta.
•Un guión.
•Dos dígitos de control: el primero deben ser la suma de los 6 primeros  dígitos de la cuenta dividido entre 6 y extrayendo solamente su parte entera; y el último exactamente igual, pero con los 6 siguientes.
•Si el número está correcto se colocará en un campo de texto al lado del anterior,  pero sin guiones: solamente los números y las letras.

*/


//regexObj.test(cadena) validar cadena.
//let cuenta = /^[0-9]*[g][a-zA-Z]{1,2}[0-9]?[a-zA-Z]{1,2}[0-9]?/g

let formulario = document.getElementById("FormularioBreakingBad");


window.onload = iniciar;

let fecha = document.getElementById("fecha").value;
let cocinero = document.getElementById("cocinero").value;
let destinatario = document.getElementById("Destinatario").value;
let gramos = document.getElementById("gramos").value;
let composicion = document.getElementById("composicion").value;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarFecha(fecha){

    let expfecha = /^\d{2}\/\d{2}\/\d{4}$/g;

    if(expfecha.test(fecha)){
        return true;
    }else{
        alert("Fecha no valida.");

        return false;
    }
}

function validarCocinero(cocinero){

    let expconcinero = /^[A-Z]{2}\@\d{4}$/g;

    if(expconcinero.test(cocinero)){
        return true;
    }else{
        alert("Cocinero no valido.");

        return false;

    }
}

function validarDestinatario(destinatario){

    let expdestinatario = /^([A-Z]{2,3})_([a-z]{1,20}):([0-9]{4})$/g

    if(expdestinatario.test(destinatario)){
        return true;

    }else{

        alert("Destinatario no valido.");

        return false;
    }
}

function validarGramos(gramos){

    let expgramo = /^(([1-9][\d]{2})|[1-4]{1}\d{3}|500)$/g

    if(expgramo.test(gramos)){
        return true;

    }else{
        alert("Gramos no valido.");

        return false;
    }
}

function validarComposicion(composicion){
    let expcomposicion = /^\d{3}[A-Za-z]{2}\d{1}[A-Z]{2}\d{1}$/g

    if(expcomposicion.test(composicion)){
         return true;
    }else{
        alert("Composicion no valido.");
        return false;
    }
}

function validar(e) {
    if (validarFecha(fecha) && validarCocinero(cocinero) &&  validarDestinatario(destinatario) && validarGramos(gramos) && validarComposicion(composicion) && confirm("Pulsa aceptar si deseas enviar el formulario")
    ) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }










