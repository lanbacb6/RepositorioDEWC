window.onload = iniciar;

function iniciar() {
    document.getElementById("cargarDatosXMLRequest").addEventListener("click", peticion, true);
    document.getElementById("cargarDatosFetch").addEventListener("click", cargarDatosFetch, true);

}

function peticion(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarJSON(xhr);
      }
    };
    xhr.open("GET", "latest.json", true);
    xhr.send();

}

function cargarJSON(json) {
    let docJSON = JSON.parse(json.responseText);

    console.log((docJSON))

    console.log((docJSON[0].ccaa));

    let tabla = "<tr><th>Comunidad</th><th>D.Entregadas.</th><th>D.admin</th><th>D.Completada</th><th>%Entregadas</th><th>%Pobla Admin</th><th>%Pobla. Administrada</th></tr>";

    for(let i = 0; i <docJSON.length; i++){
        tabla += "<tr><td>";

        tabla += docJSON[i].ccaa;

        tabla += "</td><td>";

        tabla += docJSON[i].dosisAdministradas;

        tabla += "</td><td>"

        tabla += docJSON[i].dosisEntregadas;

        tabla += "</td><td>"

        tabla += docJSON[i].dosisEntregadasModerna;

        tabla += "</td><td>"

        tabla += docJSON[i].dosisPautaCompletada;

        tabla += "</td><td>"

        tabla += docJSON[i].porcentajePoblacionAdministradas;

        tabla += "</td><td>"
        tabla += docJSON[i].porcentajePoblacionCompletas;
        
    } 

    document.getElementById("table").innerHTML = tabla;
    
    
    let xhr = new XMLHttpRequest();   

    let parametros = JSON.stringify(docJSON.responseText);

    xhr.open("POST","insertar_comunidad.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("objeto=" + parametros);


}

function cargarDatosFetch () {

    fetch('latest.json')
        
    .then((response) => response.json())

    .then((data) => {
        let tabla = "<tr><th>Comunidad</th><th>D.Entregadas.</th><th>D.admin</th><th>D.Completada</th><th>%Entregadas</th><th>%Pobla Admin</th><th>%Pobla. Administrada</th></tr>";
        for (let i = 0; i <data.length; i++) {
            tabla += "<tr><td>";

        tabla += data[i].ccaa;

        tabla += "</td><td>";

        tabla += data[i].dosisAdministradas;

        tabla += "</td><td>"

        tabla += data[i].dosisEntregadas;

        tabla += "</td><td>"

        tabla += data[i].dosisEntregadasModerna;

        tabla += "</td><td>"

        tabla += data[i].dosisPautaCompletada;

        tabla += "</td><td>"

        tabla += data[i].porcentajePoblacionAdministradas;

        tabla += "</td><td>"
        tabla += data[i].porcentajePoblacionCompletas;
        
    } 

    document.getElementById("table").innerHTML = tabla;        
         
    })
    .catch((err) => console.log(err));

}