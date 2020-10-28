/*

Crea un archivo funciones.js en el que implementes las funciones  siguientes (busca la fórmula en Internet):

    - Imc (Índice de masa corporal)

    - Fcm (Frecuencia cardíaca máxima)

Crea un html donde incluyas el archivo anterior y dos enlaces. Cada uno  (mediante el método onClick) ejecutará una función. Deberás tener 3 inputs donde introducir los datos necesarios para las funciones.

*/
let opcion;  

   do{
     
    
    opcion = prompt("1) IMC 2) FCM");

   }while(opcion != 1 && opcion != 2);


   switch(opcion){
       case '1':masaCorporal();
           break;
        case '2':cardiacaMaxima();
            break;
   }
    


    function masaCorporal(){
        let estatura = prompt("Introduzca la estatura");
        let peso = prompt("Introduzca el peso");

        let alcuadrado = estatura * estatura;
        let imc = peso / alcuadrado;

        alert("Tu IMC es "+imc);
    }

    function cardiacaMaxima(){
        let edad = prompt("INtroduzca tu edad");
        cardiaca = 220 - edad;

        alert("Tu FCM es "+cardiaca)
    }