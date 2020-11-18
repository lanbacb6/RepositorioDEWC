/*
Un comercial de Samsung que recorre los establecimientos de electrónica de consumo de la zona occidental
de Andalucía, necesita tener una aplicación para procesar los diferentes nombres de producto que se 
venden y la zona. Recibe un texto con el siguiente formato:

tipo_producto|modelo|cantidad@cz:

Donde tipo_producto es uno de los tipos de productos (televisor, tablet, smartphone, laptop); el modelo
se compone de tres letras mayúsculas y 3 números; la cantidad de ese producto, que es un 
número entero, que se vende la zona cz, que es un código de dos letras siguientes: HU, CA, SE.

Elabora el código en JavaScript para obtener por separado el tipo de producto, el modelo (dividido en 
las letras y los números correspondientes), la cantidad y la zona. Cada uno debe presentarse en un
elemento (p o div, como quieras) de HTML.


*/

let cadena;
let ArrayCadena;
let Arrayzona;
let bandera = 0;

    

    

    do{
        bandera = 0;

        cadena = prompt("tipo_producto|modelo|cantidad@cz:");
        ArrayCadena = cadena.split("|");
        Arrayzona = ArrayCadena[2].split("@");


        if(ArrayCadena[0] != "televisor" && ArrayCadena[0] != "tablet" && ArrayCadena[0] != "smartphone" && ArrayCadena[0] != "laptop"){
            bandera = 1;
            alert("ha habido un error en el formato tipo productos");
        }  

        if(Number.isInteger(parseInt(Arrayzona[0]))){
            bandera = 0;
        }else{
            bandera = 1;
            alert("ha habido un error en el formato tipo cantida (No es un numero)");
        }

        

    }while(bandera !== 0);
       
   
  

    if(bandera == 0){
        alert("Tipo producto: "+ArrayCadena[0]+" Modelo: "+ArrayCadena[1]+" Cantidad: "+Arrayzona[0]+" zona: "+Arrayzona[1]);
    }
    
   
