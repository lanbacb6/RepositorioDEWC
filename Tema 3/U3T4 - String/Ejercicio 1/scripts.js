/*

Crea un programa que pida al usuario su nombre y apellidos y muestre:

    El tamaño del nombre más los apellidos (sin contar espacios).
    La cadena en minúsculas y en mayúsculas.
    Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
    Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
    Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.


*/


let nombre;
let apellido1;
let apellido2;

let cnombre;
let capellido1;
let capellido2;
let ctotal;

nombre = prompt("Introduzca el nombre");
apellido1 = prompt("Introduzca el primer apellido");
apellido2 = prompt("Introduzca el segundo apellido");

cnombre = nombre.length;
capellido1 = apellido1.length;
capellido2 = apellido2.length;

ctotal = cnombre + capellido1 + capellido2;

alert("Tu nombre y apellidos tiene "+ctotal+" Caracteres");
alert("Mayuscula: "+nombre.toUpperCase()+" "+apellido1.toUpperCase()+" "+apellido2.toUpperCase());
alert("Minuscula: "+nombre.toLowerCase()+" "+apellido1.toLowerCase()+" "+apellido2.toLowerCase());
alert(nombre+" / "+apellido1+" / "+apellido2);

let pletra;

pletra = nombre.charAt(0);
uletra = apellido2.charAt(0);


alert("Nombre de usuario: "+pletra.toLowerCase()+apellido1.toLowerCase()+uletra.toLowerCase());
alert(nombre.slice(0, 3)+apellido1.slice(0,3)+apellido2.slice(0,3));

