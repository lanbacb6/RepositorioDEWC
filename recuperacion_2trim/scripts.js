window.onload = iniciar;

function iniciar() {
    document.getElementById("botonFilms").addEventListener("click", crearPeticionFilms, true);
    document.getElementById("botonFilmsFetch").addEventListener("click", peticionFetch, true);
    document.getElementById("botonPersonajes").addEventListener("click", peticionPersonajes, true);
}

function crearPeticionFilms(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            cargarJSONFilms(xhr);
            console.log("Respuesta de films recibida (XMLHttpRequest)");
            document.getElementById("resultado").innerHTML ="Respuesta de films recibida (XMLHttpRequest)";
          
        }
    };

    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);    
    xhr.send();

}

function cargarJSONFilms(json) {
    let docJSON = JSON.parse(json.responseText);

    let films = new Array();

    for(let i = 0; i<docJSON.length; i++){      

        let film = {
            "id" : docJSON[i].id,
            "title" : docJSON[i].title,
            "description" : docJSON[i].description,
            "director" : docJSON[i].director,
            "producer" : docJSON[i].producer,
            "release_date" : docJSON[i].release_date,
            "rt_score" : docJSON[i].rt_score,
            "url" : docJSON[i].url
        }

        films.push(film);
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log((this.responseText));
            let respuesta = JSON.parse(this.responseText);
            imprimirTablaFilm(respuesta);
        }
    };

    let parametros = JSON.stringify(films);
    xhr.open("POST", "insert_films.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros);
    console.log("Respuesta de insert_films.php recibida");
    document.getElementById("resultado").innerHTML ="Respuesta de insert_films.php recibida";

}

function peticionFetch() {


    let films = new Array();

   fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(data =>  {
        console.log("Respuesta de films recibida (Fetch)");
        document.getElementById("resultado").innerHTML ="Respuesta de films recibida (Fetch)";

        for(let i = 0; i<data.length; i++){
            let film = {
                "id" : data[i].id,
                "title" : data[i].title,
                "description" : data[i].description,
                "director" : data[i].director,
                "producer" : data[i].producer,
                "release_date" : data[i].release_date,
                "rt_score" : data[i].rt_score,
                "url" : data[i].url
            }
    
            films.push(film);
        }

        fetch("insert_films.php", {
            method : "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(films)            
        })
      
        .then((response) => response.json())
        .then((resultado) => imprimirTablaFilm(resultado))
        .then((error) => console.log(error))
        
        console.log("Respuesta de insert_films.php recibida");
    });

}


function peticionPersonajes(){

    let personajes = new Array();

    fetch("https://ghibliapi.herokuapp.com/people")
     .then(response => response.json())
     .then(data =>  {
 
         for(let i = 0; i<data.length; i++){
             let per = {
                 "id" : data[i].id,
                 "name" : data[i].name,
                 "gender" : data[i].gender,
                 "age" : data[i].age,
                 "eye_color" : data[i].eye_color,
                 "hair_color" : data[i].hair_color
                 
             }
     
             personajes.push(per);
         }
 
         fetch("insert_people.php", {
             method : "POST",
             headers: {
                 "Content-type": "application/json"
             },
             body: JSON.stringify(personajes)            
         })
        
         .then((response) => response.json())         
         .then((error) => console.log(error))
         
   

     });
}

function cargarPersonaje(){
    alert("Entra")
}


function imprimirTablaFilm(datosJSON){

    tabla = "<tr><th>title</th><th>description</th><th>director</th><th>producer</th><th>release_date</th><th>rt_score</th><th>personaje</th></tr>"

    for(let i = 0; i<datosJSON.length; i++){
       
        tabla += "<tr><td>";
        tabla += datosJSON[i].title;
        tabla += "</td><td>";
        tabla += datosJSON[i].description;
        tabla += "</td><td>";
        tabla += datosJSON[i].director;
        tabla += "</td><td>";
        tabla += datosJSON[i].producer;
        tabla += "</td><td>";
        tabla += datosJSON[i].release_date;
        tabla += "</td><td>";
        tabla += datosJSON[i].rt_score;      
        tabla += "</td><td>"
        tabla += "<input type='button' id='personaje' name='personaje' value='Personajes'>"
        tabla += "</td></tr>"
    }

    document.getElementById("table").innerHTML = tabla;

    document.getElementById("personaje").addEventListener("click", cargarPersonaje, true);
}

