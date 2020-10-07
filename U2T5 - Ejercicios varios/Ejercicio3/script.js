

var cont = 0;
for(var i = 0; i < 500; i++){
    if(i % 3 == 0){
       
        if(i % 2 != 0){
            cont++;
        }
        prompt("Multiplo "+i+" Numero no primo "+cont);
    }

}
