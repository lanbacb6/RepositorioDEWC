/*Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca
el usuario por parámetro:
14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio
día)
*/

function indicarHora(){

    let fechaActual = new Date();

    let hora = fechaActual.getHours();

    let minutos = fechaActual.getMinutes();

    let segundos = fechaActual.getSeconds();

    alert(hora+":"+minutos+":"+segundos);

    if(hora < 12){
        alert(hora+":"+minutos+":"+segundos+" AM");
    }else{
        alert(hora+":"+minutos+":"+segundos+"PM");
    }

   
}
