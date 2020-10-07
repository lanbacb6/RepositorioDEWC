//Ejercicio 2

var texto = "Juan";
var x = 0;

for(x in texto){
    texto += x;
}

prompt("El resultado es"+x);

//Recorre el string las diferentes caracteres y lo aumentamos en el contador;




//Ejercicio 3

var cont = 0;
for(var i = 0; i < 500; i++){
    if(i % 3 == 0){
       
        if(i % 2 != 0){
            cont++;
        }
        prompt("Multiplo "+i+" Numero no primo "+cont);
    }

}



//Ejercicio 5



var contuno = 1;
var contdos = 1;

do{
    var num = prompt("Introduzca un numero entre 2 y 10");    
}while(num < 2 || num > 10);



while(cont <= 10){
    var resuluno = parseInt(num) * contuno;
    console.log(" "+num+" * "+contuno+" = "+resuluno);
    cont++;

}

for(var i = 1; i <= 10; i++){
    
    var resuldos = parseInt(num) + i;
    console.log(" "+num+" + "+i+" = "+resul);

}

do{
    var resultres = parseInt(num) / contdos; 
    console.log(" "+num+" / "+contdos+" = "+resultres);
    contdos++;

}while(contdos <= 10);



//Ejercicio 6

    var dia = prompt("Introduzca el dia");

    switch(dia){
        case"lunes":
            console.log("Mañana sera Martes");
         break;
        case"martes":
            console.log("Mañana sera Miercoles");
         break;
        case"miercoles":
            console.log("Mañana sera Jueves");
         break;
        case"jueves":
            console.log("Mañana sera Viernes");
         break;
        case"viernes":
            console.log("Mañana sera Sabado");
         break;
        case"sabado":
            console.log("Mañana sera Domingo");
         break;
        case"domingo":
            console.log("Mañana sera Lunes");
         break;
    }

//Ejercicio 7

    var resultadosiete;

    if(8 % 2 == 0){
       resultadosiete >>= 125 / 8; 
       console.log(resultadosiete);
    }

    if(4 % 2==0){
        resultadosiete >>= 40 * 4;
        resultadosiete >>= 25 /2;
        console.log(resultadosiete);
    }

    if(16 % 2 == 0){
        resultadosiete >>= 10 * 16;
        console.log(resultadosiete);
    }


