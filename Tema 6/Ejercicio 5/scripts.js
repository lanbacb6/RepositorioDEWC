window.onload = iniciar;

function iniciar() {

    document.getElementById("enviar").addEventListener("click", registrar, true);

}

function registrar(){

    console.log("Dentro de la funcion registrar");

    //Recogo los valores que ha introducido el usuario en el formulario.
    let Rtitulo = document.getElementById("titulo").value;
    let Rdirector = document.getElementById("director").value;
    let Rcadena = document.getElementById("cadena").value;
    let Ryear = document.getElementById("year").value;
    let Rterminado = document.getElementById("terminado").checked;

    //Creo el objeto con el tipo de formato que reconoce el servidor

    /*{
        "titulo" : "nombre de la serie",
        "director" : "nombre del director",
        "cadena" : "nombre de la cadena",
        "anyo" : 2000,
        "terminada" : "SI"
        } 
    */
    let serie = {
        titulo: Rtitulo,
        director: Rdirector,
        cadena: Rcadena,
        anyo: Ryear,
        terminada: Rterminado
    };


    //Creo la peticion
    let xhr = new XMLHttpRequest();    
    xhr.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
                //parseo la respuesta en formato JSON
            let respuesta = JSON.parse(this.responseText);
            document.getElementById("resultado").innerHTML = respuesta;
        }

    };

    let parametros = JSON.stringify(serie);

    xhr.open("POST","create_serie.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("objeto=" + parametros);

}