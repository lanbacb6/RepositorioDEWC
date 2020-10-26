/*

Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un
archivo arrays.js que incluya las siguientes funciones:

    Mostrar el número de elementos del array.
    Mostrar todos los elementos del array.
    Muestra los elementos del array en sentido inverso.
    Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
    Añadir un elemento al principio del array.
    Añadir un elemento al final del array.
    Borrar un elemento al principio del array (y decir cuál se ha borrado).
    Borrar un elemento al final del array (y decir cuál se ha borrado).
    Muestra el elemento que se encuentra en una posición que el usuario indica.
    Muestra la posición en la que se encuentra un elemento que le indica el usuario.
    Muestra los elementos que se encuentran en un intervalo que el usuario indica.

Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las
funciones.

Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt,
no en la página) las opciones:

    Mostrar número de países.
    Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
    Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
    Añadir un país (y le preguntará si quiere añadir al principio o al final).
    Borrar un país (y le preguntará si quiere borrar al principio o al final).
    Consultar un país (y le preguntará si quiere consultar por posición o por nombre).

Todas las operaciones que se realicen se irán mostrando en la página con su título.

*/

let paises = ["Alemania", "Austria", "Bélgica", "Bulgaria", "Chipre", "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia", "Finlandia", "Francia", "Grecia", "Hungría", "Irlanda", "Italia", "Letonia", "Lituania", "Luxemburgo", "Malta", "Países Bajos", "Polonia", "Portugal", "Reino Unido", "República Checa", "Rumanía", "Suecia"];



let respuesta;

    do{
        respuesta = prompt("1) Mostrar numero paises 2)Mostrar Listado de paises 3)Mostrar Invervalo Paises 4)Añadir Pais 5)Borrar Pais 6)Consultar Pais");
        

    }while(respuesta != 1 && respuesta != 2 && respuesta != 3 && respuesta != 4 && respuesta != 5 && respuesta != 6);

    parseInt(respuesta);
  
    switch(respuesta){        
        case '1':  nElementos(paises)
            break;
        case '2': mElementos(paises)
            break;
        case '3': intervalo(paises)
            break;
        case '4': addPais(paises)
            break;
        case '5': deletePais(paises)
            break;
        case '6': consultarPais(paieses)
            break;
    }

    function nElementos(paises){
        document.write("<h1>Mostrar número de países.</h1>")
        document.write("Elementos "+paises.length)

    }

    function mElementos(paises){
        document.write("<h1>Listado de paises</h1>");
        for(let i = 0; i < paises.length; i++){
            document.write("<br>"+paises[i]);
        }   

    }

    function intervalo(paises){
        let inicio;
        let fin;

        inicio = prompt("Introduzca el inicio");
        fin = prompt("Introduzca el fin");

        let subarray = paises.slice(inicio, fin);
        document.write("<h1>Intervalos Paises </h1> <br>Entre "+inicio+" y "+fin+" hay estos paieses " + subarray.toString());
    }

    function addPais(paises){
        let insertar;
        let npais;

        do{
            insertar = prompt("1) Insertar desde inicio 2) Insertar desde final")
        }while(insertar != 1 && insertar != 2)

        parseInt(insertar)

        if(insertar == 1){

            npais = prompt("Nombre del nuevo pais ");

            paises.unshift(npais);

            document.write("<h1>Insertar Pais desde el inicio </h1><br>"+paises)

        }else{

            npais = prompt("Nombre del nuevo pais ");

            paises.push(npais);

            document.write("<h1>Insertar Pais desde el Final </h1><br>"+paises)

        }
    }

    function deletePais(paieses){
        let eliminar;

        do{
            eliminar = prompt("1) Eliminar Inicio 2) Eliminar Fin")
        }while(eliminar != 1 && eliminar != 2)

        if(eliminar == 1){

            paises.shift();
            document.write("<h1>Eliminar Pais desde el inicio </h1><br>"+paises)

        }else{
            paises.pop();
            document.write("<h1>Eliminar Pais desde el Fin </h1><br>"+paises)
        }
    }

    function consultarPais(paieses){
        let consultar;

        do{
            
            consultar = prompt("1) Consultar por el nombre 2) Posición")

        }while(consultar != 1 && consultar != 2)

        if(consultar == 1){
            let nombre;

            nombre = prompt("Introduzca el nombre");

            for(let n = 0; n < paises.length; n++){
                if(paises[i] == nombre){
                    document.write("Se ecuentra en la lista")
                }
            }
        }else{
            let posicion;

            posicion = prompt("Introduzca la posicion");

            posicion = posicion -1;

            document.write("<h1>El pais con la posicion indicada</h>"+paises[posicion])
        }

    }











    
        


    