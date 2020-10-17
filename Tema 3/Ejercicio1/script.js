function comprobarDias() {
    
    let fechaActual = new Date();

    let fechaFinal = new Date("2021/07/24");

    let diasdif= fechaFinal.getTime()-fechaActual.getTime();

    let contdias = Math.round(diasdif/(1000*60*60*24));
    
    alert("Quedan "+contdias+" Dias")

   
    
}




