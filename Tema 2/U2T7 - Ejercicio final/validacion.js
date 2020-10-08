    function comprobarDNI() {
        var dni = document.getElementById("dni").value;
        var letra = document.getElementById("letra").value;
        letra.toLowerCase(); 
        var resto = dni % 23;

       // alert(dni);
      // alert(letra);

        switch(resto){
            case 0:
                if(letra == 't'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra T");
                }
                break;
            case 1:
                if(letra == 'r' ){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra R");
                }
                break;
            case 2:
                if(letra == 'w'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra  W");
                }
                break;
            case 3:
                if(letra == 'a'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra  A");
                }                
                break;
            case 4:
                if(letra == 'g'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra G");
                }
                break;
            case 5:
                if(letra == 'm'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra M");
                }
                break;
            case 6:
                if(letra == 'y'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra Y");
                }
                break;
            case 7:
                if(letra == 'f'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra F");
                }
                break;
            case 8:
                if(letra == 'p'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra P");
                }
                break;
            case 9:
                if(letra == 'd'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra D");
                }
                break;
            case 10:
                if(letra == 'x'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra X");
                }
                break;
            case 11:
                if(letra == 'b'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra B");
                }
                break;
            case 12:
                if(letra == 'n'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra N");
                }
                break;
            case 13:
                if(letra == 'j'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra J");
                }
                break;
            case 14:
                if(letra == 'z'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra Z");
                }
                break;
            case 15:
                if(letra == 's'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra S");
                }
                break;
            case 16:
                if(letra == 'q'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra Q");
                }
                break;
            case 17:
                if(letra == 'v'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra V");
                }
                break;
            case 18:
                if(letra == 'h'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra H");
                }
                break;
            case 19:
                if(letra == 'l'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra L")
                }
                break;
            case 20:
                if(letra == 'c'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra C");
                }
                break;
            case 21:
                if(letra == 'k'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra K");
                }
                break;
            case 22:
                if(letra == 'e'){
                    alert("DNI Correcto");
                }else{
                    alert("La letra del NIF es incorrecta. Seleccionar la letra E");
                }
                break;

            
        }
    }



