window.onload = iniciar;

function iniciar() { 

    document.getElementById("cargaCatalogo").addEventListener("click", cargarCatalogo);

}


function cargarCatalogo() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarXML(xhr);
      }
    };
    xhr.open("GET", "series.xml", true);
    xhr.send();
}

function cargarXML(xml) {
    let docXML = xml.responseXML;
    let tabla = "<tr><th>Título</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";
    let series = docXML.getElementsByTagName("SERIE");
    for (let i = 0; i < series.length; i++) {
      tabla += "<tr><td><strong>";

      tabla += series[i].getElementsByTagName("TITULO")[0].textContent;

      tabla += "</strong></td><td>";

      tabla += series[i].getElementsByTagName("CADENA")[0].textContent;

      tabla += "</td><td><i>";

      tabla += series[i].getElementsByTagName("DIRECTOR")[0].textContent;

      tabla += "</i></td><td>";

      if (series[i].getElementsByTagName("YEAR")[0].textContent < 2000) {

        let year = series[i].getElementsByTagName("YEAR")[0].textContent;
        tabla += "<p class='rojo'>" + year + "</p>";

      } else if (series[i].getElementsByTagName("YEAR")[0].textContent >= 2001 && series[i].getElementsByTagName(
        "YEAR")[0].textContent <= 2010) {

        let year = series[i].getElementsByTagName("YEAR")[0].textContent;
        tabla += "<p class='amarillo'>" + year + "</p>";

      } else if (series[i].getElementsByTagName("YEAR")[0].textContent > 2011) {

        let year = series[i].getElementsByTagName("YEAR")[0].textContent;
        tabla += "<p class='verde'>" + year + "</p>";

      }

      tabla += "</td><td id='celdaImagen'>";

      let src = elegirImagen(series[i].getElementsByTagName("TERMINADA")[0].textContent);
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

