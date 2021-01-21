window.onload = iniciar;

function iniciar() {

    document.getElementById("cargaCatalogo").addEventListener("click", cargarCatalogo, true);

}

function cargarCatalogo(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarJSON(xhr);
      }
    };
    xhr.open("GET", "datosjson.php", true);
    xhr.send();

}

function cargarJSON(json) {
    //OBJETO JSON
    let docJSON = JSON.parse(json.responseText);

    let tabla = "<tr><th>Título</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";
    let series = docJSON.CATALOGO.SERIE;

    for (serie of series) {
      tabla += "<tr><td><strong>";

      tabla += serie.TITULO;

      tabla += "</strong></td><td>";

      tabla += serie.CADENA;

      tabla += "</td><td><i>";

      tabla += serie.DIRECTOR;

      tabla += "</i></td><td>";

      if (serie.YEAR < 2000) {

        let year = serie.YEAR;
        tabla += "<p class='rojo'>" + year + "</p>";

      } else if (serie.YEAR >= 2001 && serie.YEAR <= 2010) {

        let year = serie.YEAR;
        tabla += "<p class='amarillo'>" + year + "</p>";

      } else if (serie.YEAR > 2011) {

        let year = serie.YEAR;
        tabla += "<p class='verde'>" + year + "</p>";

      }

      tabla += "</td><td id='celdaImagen'>";

      let src = elegirImagen(serie.TERMINADA);
      tabla += "<img src='" + src + "' style='width:100%;'>";

      tabla += "</img></td></tr>";
    }
    document.getElementById("demo").innerHTML = tabla;
  }

  function elegirImagen(estadoFinalizada) {
    if (estadoFinalizada == "SI") {
      return "./Imagenes/Si.png";
    } else if (estadoFinalizada == "NO") {
      return "./Imagenes/No.png";
    }
  }