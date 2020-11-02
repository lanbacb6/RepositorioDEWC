/*Parte 1:

Necesitamos almacenar en un programa todos los discos de música que tenemos en casa. Ahora que sabemos crear nuestros propios objetos es el mejor modo de guardar esta información.

Crea un objeto “disco” que almacene la siguiente información:

    Nombre del disco.
    Grupo de música o cantante.
    Año de publicación.
    Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
    Localización: almacenará un número de estantería.
    Prestado: almacenará un valor booleano. Por defecto será false.

    Además tendrá los siguientes métodos:

    Un “constructor” sin parámetros (las 4 primeras propiedades serán cadenas vacías, la localización será 0 por defecto y prestado estará a false).
    Un método que permita incluir las cinco primeras propiedades; la propiedad prestado seguirá a false.
    Un método que permitirá cambiar el número de estantería en la localización.
    Un método que permitirá cambiar la propiedad Prestado.
    Un método que muestre toda la información de un disco.

Guarda todo el código en un archivo llamado disco.js

Parte 2:

Carga en tu página el archivo de arrays que hicimos en la práctica anterior.

Crea un array vacío para almacenar los discos.

Cuando el usuario cargue la página, se cargarán las opciones:

    Mostrar número de discos.
    Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se  encuentran en el array, del revés u ordenados alfabéticamente).
    Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato  inicio-fin; luego deberás extraer el valor inicio y fin).
    Añadir un disco (y le preguntará si quiere añadir al principio o al final).
    Borrar un disco (y le preguntará si quiere borrar al principio o al final).
    Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).

Todas las operaciones que se realicen se irán mostrando en la página con su título.

REUTILIZA EL CÓDIGO DE LA PARTE 1 Y DEL EJERCICIO DE ARRAYS.
*/

let miDisco1 = new Disco();
let miDisco2 = new Disco();
let miDisco3 = new Disco();


miDisco1.cincoPropiedades("Welcome to the jungle", "Guns N Roses", "1987", "rock", 0);
miDisco2.cincoPropiedades("Highway to hell", "AC/DC", "1979", "rock", 0);
miDisco3.cincoPropiedades("Redo", "Pivit", "2002", "rock", 0);

let arrayDisco = [miDisco1, miDisco2, miDisco3];

function Disco() {
    this.nombre = "";
    this.grupo = "";
    this.year = "";
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;

    this.cincoPropiedades = function (nombre, grupo, year, tipo, localizacion){
        
        this.nombre =  nombre;
        this.grupo = grupo;
        this.year = year;
        this.tipo = tipo;
        this.localizacion = localizacion;
    };

    this.cambiarLocalizacion = function (localizacion){
        this.localizacion = localizacion;
    };

    this.cambiarPrestado = function (prestado){
        this.prestado = prestado;
    };

    this.mostrarDisco = function(){
        return this.nombre + " " + this.grupo + " " +this.year + " " + this.tipo + " "+ this.localizacion + " " +this.prestado;
    }
    
    
}

let opcion;

    do{

       opcion = prompt("        Menu Principal\n--------------------------------\n1)Mostrar disco\n2)Listado de discos\n3)Mostrar intervalo de disco\n4)Añadir disco\n5)Borrar disco \n6)Consultar disco ");
            
    }while(opcion != 1 && opcion != 2 && opcion != 3  && opcion != 4 && opcion != 5 && opcion != 6) 


    switch(opcion){
        case '1': numeroDisco();
            break;
        case '2': listadoDisco();
            break;
        case '3': intervaloDiscos();
            break;
        case '4': addDisco();
            break;
        case '5': deleteDisco();
            break;
        case '6': consultarDisco();
            break;
    }

   
    function numeroDisco(){
        alert("Discos almacenados "+arrayDisco.length);
    }

    function listadoDisco(){
        document.write("<h1>Listado de discos</h1>");
        for(let i = 0; i < arrayDisco.length; i++){
            document.write("<b>Nombre:</b> "+arrayDisco[i].nombre+" <b>Grupo:</b> "+arrayDisco[i].grupo+" <b>Año:</b> "+arrayDisco[i].year+" <b>Tipo:</b> "+arrayDisco[i].tipo+"<br>");
        }
    }    
    
    function intervaloDiscos(){
        let inicio;
        let aux;
        let fin;

        inicio = prompt("Introduzca el inicio");
        fin = prompt("Introduzca el fin");

        if(fin < inicio){
            alert("Has introducido mal los valores");
            intervaloDiscos();                 
            
        }        
        
        for(let i = inicio-1;i<fin;i++){
            document.write("<b>Nombre:</b> "+arrayDisco[i].nombre+" <b>Grupo:</b> "+arrayDisco[i].grupo+" <b>Año:</b> "+arrayDisco[i].year+" <b>Tipo:</b> "+arrayDisco[i].tipo+"<br>");
        }   
        

    }

    function addDisco(){
        let opcion;
        let nuevoDisco = new Disco();

        do{
            opcion = prompt("1)Añadir principio 2)Añadir Final");
        }while(opcion != 1 && opcion !=2)

        let  nombre  = prompt ("Introduzca el nombre ");
        let  grupo = prompt ("Introduzca el grupo")
        let  year = prompt ("Introduzca el año")
        let  tipo = prompt ("INtroduzca el tipo")
        let localizacion = prompt("Introduzca la localizacion ")     
        
        nuevoDisco.cincoPropiedades(nombre,grupo,year,tipo,localizacion);

        if(opcion == 1){
        
            arrayDisco.unshift(nuevoDisco);

        }else{   
        
            arrayDisco.push(nuevoDisco);
        }
        
        listadoDisco();
    }

    function deleteDisco(){
        let opcion;

        do{
            opcion = prompt("1)Elimnar principio 2)Eliminar Final");
        }while(opcion != 1 && opcion !=2)

        if(opcion == 1){
            arrayDisco.shift();
            listadoDisco();

        }else{

            arrayDisco.pop();
            listadoDisco();

        }

    }

    function consultarDisco(){

        let opcion;

        do{
            opcion = prompt("1)Buscar posicion 2)Buscar Nombre");
        }while(opcion != 1 && opcion !=2)

        if(opcion == 1){

            let posicion;

            posicion = prompt("Introduzca la posicion");
    
            posicion = posicion -1;
    
            document.write("<h1>El Disco con la posicion indicada</h1><br> <b>Nombre:</b> "+arrayDisco[posicion].nombre+" <b>Grupo:</b> "+arrayDisco[posicion].grupo+" <b>Año:</b> "+arrayDisco[posicion].year+" <b>Tipo:</b> "+arrayDisco[posicion].tipo);

        }else{
            let nombre = prompt("Introduzca el nombre");
            let encontrado = 0;
            
            for(let b = 0; b<arrayDisco.length; b++){
                if(arrayDisco[b].nombre == nombre){                    
                    document.write("<b>Nombre:</b> "+arrayDisco[b].nombre+" <b>Grupo:</b> "+arrayDisco[b].grupo+" <b>Año:</b> "+arrayDisco[b].year+" <b>Tipo:</b> "+arrayDisco[b].tipo);
                    encontrado = 1;
                }
            }
            if(encontrado == 0){
                document.write("<h1>Disco no encontrado</h1>");
            }
        }

      

    }






