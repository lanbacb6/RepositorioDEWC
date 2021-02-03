window.onload = iniciar;

const SelecionaBando = document.getElementById("bando");

function iniciar() {
  document
    .getElementById("enviar")
    .addEventListener("click", cargarTabla, true);
  document
    .getElementById("enviar2")
    .addEventListener("click", cargarJsonfetch, true);
}

function cargarTabla() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      cargarJSON(xhr);
    }
  };
  xhr.open("GET", "listar_armas.php", true);

  document
    .getElementById("bando")
    .addEventListener("change", cargarJSONBando, true);
  xhr.send();
}

function cargarJSON(json) {
  docJSON = JSON.parse(json.responseText);

  let tabla =
    "<tr><th>Armas</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
  let armas = docJSON;

  for (arma of armas) {
    tabla += "<tr><td><strong>";

    tabla += arma.nombre;

    tabla += "</strong></td><td>";

    tabla += arma.descripcion;

    tabla += "</td><td><i>";

    tabla +=
      "<img src='Imagenes/" +
      arma.imagen +
      "' style='width: 48px; height: 48px;' />";

    tabla += "</img></td><td>";

    let bando = arma.bando;

    if (bando == 1) {
      tabla += "Aliados</td></tr>";
    } else {
      tabla += "Eje</td></tr>";
    }

    document.getElementById("tabla").innerHTML = tabla;
  }
}

function cargarJsonfetch() {
  fetch("listar_armas.php")
    .then((response) => response.json())

    .then((data) => {
      let tabla =
        "<tr><th>Armas</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
      for (arma of data) {
        tabla += "<tr><td><strong>";

        tabla += arma.nombre;

        tabla += "</strong></td><td>";

        tabla += arma.descripcion;

        tabla += "</td><td><i>";

        tabla +=
          "<img src='Imagenes/" +
          arma.imagen +
          "' style='width: 48px; height: 48px;' />";

        tabla += "</img></td><td>";

        let bando = arma.bando;

        if (bando == 1) {
          tabla += "Aliados</td></tr>";
        } else {
          tabla += "Eje</td></tr>";
        }

        document.getElementById("tabla").innerHTML = tabla;
      }
      document.getElementById("bando").addEventListener(
        "change",
        function () {
          console.log("entro funcion");

          let tabla =
            "<tr><th>Armas</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
          for (arma of data) {
            if (arma.bando == document.getElementById("bando").value) {
              tabla += "<tr><td><strong>";

              tabla += arma.nombre;

              tabla += "</strong></td><td>";

              tabla += arma.descripcion;

              tabla += "</td><td><i>";

              tabla +=
                "<img src='Imagenes/" +
                arma.imagen +
                "' style='width: 48px; height: 48px;' />";

              tabla += "</img></td><td>";

              let bando = arma.bando;

              if (bando == 1) {
                tabla += "Aliados</td></tr>";
              } else {
                tabla += "Eje</td></tr>";
              }
            }

            document.getElementById("tabla").innerHTML = tabla;
          }
        },
        true
      );
    })
    .catch((err) => console.log(err));
}

function cargarJSONBando() {
  let tabla =
    "<tr><th>Armas</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
  let armas = docJSON;

  for (arma of armas) {
    if (arma.bando == document.getElementById("bando").value) {
      tabla += "<tr><td><strong>";

      tabla += arma.nombre;

      tabla += "</strong></td><td>";

      tabla += arma.descripcion;

      tabla += "</td><td><i>";

      tabla +=
        "<img src='Imagenes/" +
        arma.imagen +
        "' style='width: 48px; height: 48px;' />";

      tabla += "</img></td><td>";

      let bando = arma.bando;

      if (bando == 1) {
        tabla += "Aliados</td></tr>";
      } else {
        tabla += "Eje</td></tr>";
      }

      document.getElementById("tabla").innerHTML = tabla;
    }
  }
}
