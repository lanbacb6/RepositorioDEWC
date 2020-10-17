/*
Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

    El valor del radio.
    El valor del diámetro.
    El valor del perímetro de la circunferencia.
    El valor del área del círculo.
    El valor del área de la esfera.
    El valor del volumen de la esfera.

El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir al lado si son cm, o cm2, o cm3.
Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 /
78,54 / 314,15 / 523,59.
*/


function radio(){

    let numero;

    let radio;
    let diametro;
    let perimetro;
    let areaCirculo;
    let areaEsfera;
    let volumen;

    numero = prompt("Introduzca el valor del radio ");
    
    parseInt(numero);

    radio = Math.PI * numero;

    diametro = numero * 2;

    perimetro = Math.PI * numero * 2;

    areaCirculo = Math.PI * numero * numero;

    areaEsfera= 4*Math.PI*numero*numero;
    
    volumen = Math.PI * numero * numero * numero/3;

    alert(radio+"/ "+diametro+" /"+perimetro+" /"+areaCirculo+" /"+areaEsfera+" /"+volumen);




}