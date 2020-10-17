/*Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año)
y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.
Recuerda que los meses empiezan desde el número 0.*/


  function indicarFecha(){

    let dia = prompt("Introduzca el dia de tu cumpleaños");
    let mes = prompt("Introduzca el mes de tu cumpleados");

    for(let i = 2020; i <= 2100; i++){
      let cumpl = new (i, mes, -1, dia);
      if(cumpl.getDay() === 0){
        alert("El año "+i+"Tu cumple cae en domingo");
      }
    }





  }
