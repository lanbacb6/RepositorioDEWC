/*
   La confitería “La Plata” en Los Barrios - Cádiz, elabora en su obrador una diversa gama de bollería
fina. Los diferentes tipos de pasteles son:

-   Caracolas (rellenas de crema o de chocolate)

-   Tocinos de cielo (con o sin azúcar)

-   Riñoncitos (de chocolate negro o blanco)

-   Milhojas (de caramelo, de vainilla o de chocolate)

Las bandejas de pasteles que salen, necesitan ser vendidos en un tiempo determinado, por lo que es 
necesario controlar el tiempo que pasa desde que se terminan de elaborar, hasta que son vendidos.

Las bandejas se representan como una “clase” Bandeja que tiene como propiedades las siguientes:

-   Tipo de pastel

-   Variedad de pastel

-   Cantidad

-   Hora de elaboración

-   Hora de venta del último pastel.

Y como métodos, los siguientes:

-   Constructor: Recibe el tipo, variedad, cantidad de pasteles y la hora de salida.

-   tiempo_venta: Que devuelve la diferencia en horas, minutos y segundos en formato HH:MM:SS entre 
que salió la bandeja y que se vendió el último pastel.

-   restar: Que recibe la cantidad de pasteles que se retiran de la bandeja a la hora de realizar 
una venta. Nunca podrá quedarse la bandeja con valores negativos, y si la cantidad a restar es mayor,
se quedará a cero la bandeja.

-   toString: Que devuelve una cadena con el tipo, variedad, cantidad y las horas de elaboración y de
última venta, las dos en formato HH:MM:SS siendo HH la hora, MM los minutos y SS los segundos.

Desarrolla la “clase” “LaPlata”, que contiene como propiedades, las siguiente:

-   mostrador: Es un array de bandejas de pasteles recién salidas del horno. Hay como máximo una 
bandeja por tipo y variedad de pastel.

Y como métodos los siguientes:

-   poner_en_mostrador: Este método es llamado cada vez que se elabora una bandeja y se pone en el 
mostrador. Recibe una bandeja de pasteles de algún de tipo y variedad de pastel. Por ejemplo, una 
bandeja con 15 caracolas de crema. Debe controlar que no se intente poner una bandeja de pasteles del 
mismo tipo y variedad que ya está.

-   vender_pastel: Este método recibe el tipo y la variedad de pasteles, además de la cantidad que se
quiere vender. Deberá comprobar que hay una bandeja de ese tipo  y variedad, y si después de la venta
no quedan, mostrar el tiempo que ha tardado en venderse la bandeja entera.

Simula la venta de una bandeja completa y muéstrala en un elemento HTML (p o div, como quieras).
*/

function Bandeja(tpastel, vpastel, cantidad, elabora, ulpastel){
   this.tpastel = tpastel;
   this.vpastel = vpastel;
   this.cantidad = cantidad;
   this.elabora = elabora;
   this.ulpastel = ulpastel;


}  

