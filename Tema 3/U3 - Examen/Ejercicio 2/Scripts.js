/*
Realiza una página que contenga una función JavaScript para hacer estadísticas sobre una cadena de 
texto que se le pase, contando el número de veces que aparece cada letra. Se deberá mostrar un listado
con las letras del abcedario con el número de veces que aparece cada letra en la cadena que se la pasa.
Utilizar un Array para almacenar la información estadística. No se tendrán en cuenta que pudiera haber
tildes, así que consideraremos que no existen.

*/

let cadena;
let ArrayAbecedario = [26];

    cadena = prompt("Introduzca un texto");

    for(let i = 0; i < cadena.length; i++){
        alert(cadena.charAt(i));
           
    }  


    
