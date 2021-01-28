window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", registrar, true);
    document.getElementById("enviar").addEventListener("click", cargarJson, true);
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
	

        fetch('create_serie.php', {
            method: 'POST',
            headers: {           
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:"objeto=" +JSON.stringify(serie)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            document.getElementById("error").innerHTML = result;
        })
        .catch (function (error) {
            console.log('Request failed', error);
        });

        

}

function cargarJson() {
    fetch('listar_series.php') 

    //devuelve el JSON contiene la BD SERIES
    .then((response) => response.json())
    //DATA contiene los datos de la BD (Series)
    .then((data) => {
        let tabla = "<tr><th>Titulo</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";
        for (let serie of data) {
          tabla += "<tr><td><b>";
          tabla += serie.titulo;
          tabla += "</b></td><td>";
          tabla += serie.cadena;
          tabla += "</td><td><i>";
          tabla += serie.director;
          if (serie.anyo < 2000) {
            tabla += '</i></td><td class="rojo">';
          } else if (serie.anyo >= 2001 && serie.anyo <= 2010) {
            tabla += '</i></td><td class="amarillo">';
          } else if (serie.anyo >= 2011) {
            tabla += '</i></td><td class="verde">';
          }
          tabla += serie.anyo;
          tabla += "</td><td>";
          let aux = serie.terminada;
          if (aux === "1") {
            tabla += 'Si';
          } else {
            tabla += 'No';
          }
          
          tabla += "</td></tr>";
        }
        document.getElementById("demo").innerHTML = tabla;
    })
    .catch((err) => console.log(err));
}