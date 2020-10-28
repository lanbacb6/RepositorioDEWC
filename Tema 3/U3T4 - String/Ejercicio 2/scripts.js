/*
Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

    Tiene entre 8 y 16 caracteres.
    Tiene una letra mayúscula.
    Tiene una letra minúscula.
    Tiene un número.
    Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.

Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.

*/

let regex = /^(?=.*\d)(?=.*[\u0021-\u002d\u003c-\u0040\u005f])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;


let password = prompt("Introduzca la contraseña");

    if(regex.test(password)){
        alert("Contraseña segura");
    }else{
        alert("Contraseña no segura")
    }

  

    

   




