let formulario = document.getElementById("formulario");

window.onload = iniciar;


function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombreApellidos(){

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");

    limpiarError(nombre);
    limpiarError(apellidos);

    if(nombre.value === ""){
        document.getElementById("errores").innerHTML = "El campo Nombre no puede estar vacío" 
        error(nombre);      
        return false;
    }else if(apellidos.value === ""){
        document.getElementById("errores").innerHTML = "El campo Apellidos no puede estar vacío" 
        error(apellidos);
        return false;

    }

    return true;

}

function validarEdad(){

    let expEdad = /^([0-9])$|^([1-9][0-9])$|^([1]?[0][0-5])$/g // la expresion indica que puede contener un numero del 0 9 o puede contener 1-9 o puede contener un numero contega 1 0 5 como maximo

    let edad = document.getElementById("edad");

    limpiarError(edad);

    if(expEdad.test(edad.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "La edad debe tener un numero entre 0 y 105"
        error(edad);
        return false;
    }
    

}

function validarNIF(){

    let expNig = /^[0-9]{8}-[A-Za-z]{1}$/g; // la expresion indica que debe de contener 8 numeros del 0 - 9 como obligatoria un - y una letra que sea mayuscula o minuscula

    let nif = document.getElementById("nif");
    limpiarError(nif);

    if(expNig.test(nif.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "Debe de contener 8 numeros y una letra"
        error(nif);
        return false;
    }

  
}

function validarCorreo(){


    let expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/g; //La expresion indica que puede contener cualquier letra numeros 0-9 y _,- continuado de @ despues lo mismo con un . y entre 2 y 4 letras en minuscula
    let correo = document.getElementById("email");
    limpiarError(correo);

    if(expCorreo.test(correo.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "Correo no valido"
        error(correo);
        return false;
    }
}
 
function validarProvincia(){

    let provincia = document.getElementById("provincia");
    limpiarError(provincia);

    if(provincia.value == 0){
        document.getElementById("errores").innerHTML = "Seleciona una provincia"
        error(provincia);
        return false;
    }else{
        return true;
    }

}

function validarFecha(){
    
    let expFecha = /^\d{2}\/\d{2}\/\d{4}$/g; // la expresion nos indica que debe contener dos numeros / otros dos numeros / y cuatro numeros obligatorios 
    let fecha = document.getElementById("fecha");
    limpiarError(fecha);

    if(expFecha.test(fecha.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "Error fecha dd/mm/yyyy"
        error(fecha);
        return false;
    }

}

function validarTelefono(){

    let expTelefono = /^([0-9]){9}$/g; // la expresion indica que debe contener 9 digitos con el rango de numeros 0 al 9
    let telefono = document.getElementById("telefono");
    limpiarError(telefono);

    if(expTelefono.test(telefono.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "error telefono 9 digitos"
        error(telefono);
        return false;
    }
}

function validarHora(){

    let expHora = /^\d{2}:\d{2}$/g; // la expresion indica que debe contener dos numero : obligatorio  y dos numeros
    let hora = document.getElementById("hora");
    limpiarError(hora);

    if(expHora.test(hora.value)){
        return true;
    }else{
        document.getElementById("errores").innerHTML = "error hora hh:mm"
        error(hora);
        return false;
    }
}


function validar(e) {
    if (validarNombreApellidos() && validarEdad() && validarNIF() && validarCorreo() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && confirm("Pulsa aceptar si deseas enviar el formulario")
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

document.getElementById("nombre").addEventListener("blur",upperCaseNombre);

document.getElementById("apellidos").addEventListener("blur",upperCaseApellidos);

function upperCaseNombre() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase()
}

function upperCaseApellidos() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase()
}