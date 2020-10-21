/*
Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.

    El numero su valor exponencial.
    El número con 4 decimales.
    El número en binario.
    El número en octal.
    El número en hexadecimal.

Utiliza para ello los métodos del objeto Number.
Como datos de muestra, si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32


*/


function numero(){

    let nusuario;

    let exponencial;
    let decimales;
    let binario;
    let octal;
    let hexadecimal;
    

    nusuario = prompt("Introduzca un numero");
    
    parseInt(nusuario);

    let num= new Number(nusuario);

    exponencial = num.toExponential(0);
    decimales = num.toFixed(4);
    binario = num.toString(2);
    octal = num.toString(8);
    hexadecimal = num.toString(16);
    

    alert(exponencial+" / "+decimales+" / "+binario+" / "+octal+" / 0x"+hexadecimal);


    


}