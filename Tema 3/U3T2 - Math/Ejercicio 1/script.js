/*
realiza un programa que pida al usuario que elija una opción del siguiente menú:

    Potencia.
    Raíz.
    Redondeo.
    Trigonometría.

Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el
resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al
entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla
los valores trigonométricos del seno, coseno y tangente.

*/


function Menu(){

    let opcion;
    

    do{
        opcion = prompt("1) Potencia, 2)Raiz, 3)Redondeo, 4)Trigonometria");

    }while(opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4);

    if(opcion == 1){
                                      
        let base = prompt("Introduzca la base");
        let exponente = prompt("Introduzca el exponente");
        let resultado;

        parseInt(base);
        parseInt(exponente);
        
        

        resultado = Math.pow(base,exponente);
    
        alert(resultado);
        
    }else{
        if (opcion == 2){

            let numero;
            let resultado;

            do{
                numero = prompt("Introduzca un numero positivo");
            }while(numero < 0);

            parseInt(numero);

            resultado = Math.cbrt(numero)

            alert(resultado);

        }else{
            if(opcion == 3){
                let numero;
                let resultado;

                numero = prompt("Intrdouzca un numero");
                parseFloat(numero);

                resultado = Math.round(resultado);

                alert(resultado);
            }else{
                if(opcion == 4){
                    let numero;
                    let seno;
                    let coseno;
                    let tangente;

                    do{
                    numero = prompt("Introduzca un ángulo (entre 0 y 360)")
                    }while(numero < 0 || numero >= 360);
                    
                    parseInt(numero);

                    seno = Math.sin(numero); 
                    coseno = Math.cos(numero);  
                    tangente = Math.tan(numero);  

                    alert("Seno: "+seno+" Coseno: "+tangente+" Tangente: "+tangente);

                }
            }
        }
    }
    


}

