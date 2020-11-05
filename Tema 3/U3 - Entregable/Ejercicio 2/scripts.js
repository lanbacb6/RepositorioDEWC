/*

Ejercicio 2

Haz un programa que reciba cadenas del tipo:

“nombre:apellidos:telefono:email:codigopostal” y que te muestre:

    El código postal.
    Los apellidos
    El email.
    Suponiendo un formato de email “direccion@servidor” te muestre el servidor asociado.

*/

let cadena;

    cadena = prompt("nombre:apellidos:telefono:email:codigopostal");
    let arrayDeCadenas = cadena.split(":");

    alert(""+arrayDeCadenas[4]);
    alert(""+arrayDeCadenas[1]);
    let servidor = arrayDeCadenas[3].split("@");
    alert(""+servidor[1]);

   



    


    