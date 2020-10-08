
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
