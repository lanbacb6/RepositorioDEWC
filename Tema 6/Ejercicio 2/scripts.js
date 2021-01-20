window.onload = iniciar;

function iniciar() { 

    document.getElementById("enviar").addEventListener("click", lanzar_peticion, true);

}

function lanzar_peticion(){ 

    miXHR = new XMLHttpRequest();
    cargarAsync("localidad.php");
}

function cargarAsync(url) {
    if (miXHR) {       

        console.log(miXHR.readyState);

        let params = "localidad="+document.getElementById("localidad").value;

        miXHR.open("GET", url+"?"+params, true);       
        
        console.log(miXHR.readyState);

        miXHR.onreadystatechange = estadoPeticion;

        miXHR.send(null);

    }
}



function estadoPeticion() {
    console.log(miXHR.readyState);
    
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      
            if(miXHR.responseText === "SI"){
                document.getElementById("resultado").style = "background-color: green;"
                
            }else{
                document.getElementById("resultado").style = "background-color: red;"
                
            }

             document.getElementById("resultado").innerHTML = miXHR.responseText;
      
    }
}


