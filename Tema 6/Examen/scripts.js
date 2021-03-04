window.onload = iniciar;

function iniciar() {
    document.getElementById("cargarDatosXMLRequest").addEventListener("click", crearPeticion, true);
    document.getElementById("cargarDatosFetch").addEventListener("click", cargarDatosFetch ,true);
    document.getElementById("modificar").addEventListener("click", modificarDatos, true);
    
}

function crearPeticion(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            cargarJSON(xhr);
        }
    };

    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhr.send();

}

function cargarJSON(json) {
    let docJSON = JSON.parse(json.responseText);

    let comunidades = new Array();

    for(let i = 0; i < docJSON.length; i++){
        if(docJSON[i].ccaa != "Totales"){
            let comunidad = {
                "ccaa" : docJSON[i].ccaa,
                "dosisEntregadas" : docJSON[i].dosisEntregadas,
                "dosisAdministradas" : docJSON[i].dosisAdministradas,
                "dosisPautaCompletada" : docJSON[i].dosisPautaCompletada,
                "porcentajeEntregadas" : docJSON[i].porcentajeEntregadas,
                "porcentajePoblacionAdministradas" : docJSON[i].porcentajePoblacionAdministradas,
                "porcentajePoblacionCompletas" : docJSON[i].porcentajePoblacionCompletas

            }

            comunidades.push(comunidad);
        }        
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(this.responseText);
            let respuesta = JSON.parse(this.responseText);
            imprimirTabla(respuesta);
        }
    }

    let parametros = JSON.stringify(comunidades);
    xhr.open("POST", "insertar_comunidades.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros);
}

function cargarDatosFetch(){

    fetch("https://covid-vacuna.app/data/latest.json")
    .then((response) => response.json())
    .then((data) => {

        let comunidades = new Array();

        for(let i = 0; i < data.length; i++){
            if(data[i].ccaa != "Totales"){
                let comunidad = {
                    "ccaa" : data[i].ccaa,
                    "dosisEntregadas" : data[i].dosisEntregadas,
                    "dosisAdministradas" : data[i].dosisAdministradas,
                    "dosisPautaCompletada" : data[i].dosisPautaCompletada,
                    "porcentajeEntregadas" : data[i].porcentajeEntregadas,
                    "porcentajePoblacionAdministradas" : data[i].porcentajePoblacionAdministradas,
                    "porcentajePoblacionCompletas" : data[i].porcentajePoblacionCompletas
    
                }
    
                comunidades.push(comunidad);
            }        
        }

        fetch('insertar_comunidades.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comunidades)
            
        })
        .then((response) => response.json())
        .then((result) =>   imprimirTabla(result))
        .catch((error) => console.log("Error: " + error));
    })
    .catch((err) => console.log(err));
    

}

function modificarDatos(){

    let modificarComunidad = {
        "ccaa": document.getElementById("ccaa").value,
        "dosisEntregadas" : document.getElementById("entregadas").value,
        "dosisAdministradas" : document.getElementById("admin").value,
        "dosisPautaCompletada" : document.getElementById("completa").value,
        "porcentajeEntregadas" : document.getElementById("pentregadas").value,
        "porcentajePoblacionAdministradas" : document.getElementById("padmin").value,
        "porcentajePoblacionCompletas" : document.getElementById("pcompleta").value
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(this.responseText);
            let respuesta = JSON.parse(this.responseText);
            imprimirTabla(respuesta);
        }
    };

    let parametros = JSON.stringify(modificarComunidad);
    xhr.open("POST", "actualizar_comunidad.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros);

    

}

function imprimirTabla(datosJSON){

    console.log(datosJSON);

    document.getElementById("resultado").innerHTML = "<hr>Resultado cargados desde la Web <hr>";

    let tabla = "<tr><th>Comunidad</th><th>D.Entregadas</th><th>D.Admin</th><th>D.Completa</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>% Pobl. Completa</th></tr>";

    let select = document.getElementById("ccaa");
    

    for(let i = 0; i<datosJSON.length; i++){

        let option = document.createElement("option");
        let texto = document.createTextNode(datosJSON[i].ccaa);
        option.setAttribute("value", datosJSON[i].ccaa);
        option.appendChild(texto)
        select.appendChild(option);



        tabla += "<tr><td>";
        tabla += datosJSON[i].ccaa;
        tabla += "</td><td>";
        tabla += datosJSON[i].dosisEntregadas;
        tabla += "</td><td>"
        tabla += datosJSON[i].dosisAdministradas;
        tabla += "</td><td>"
        tabla += datosJSON[i].dosisPautaCompletada;
        tabla += "</td><td>"
        tabla += datosJSON[i].porcentajeEntregadas;
        tabla += "</td><td>"
        tabla += datosJSON[i].porcentajePoblacionAdministradas;
        tabla += "</td><td>"
        tabla += datosJSON[i].porcentajePoblacionCompletas;
        tabla += "</td></tr>"
        

    }   

    document.getElementById("table").innerHTML = tabla;
        
    
  
}