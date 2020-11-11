/*

Ejercicio 3

Diseña una clase Aeropuerto. Tendrá como atributos nombre, ciudad y numero de vuelos diarios.

Cada vuelo diario se representará como un objeto de la clase Vuelo. En ella se guardarán los atributos “codigo”, 
“hora_llegada” y “hora_salida”.

Implementa métodos en aeropuerto y vuelo para modificar la hora de llegada, para modificar
la hora de salida y para comprobar si la hora de salida es posterior a la hora de llegada.

Comprueba todos los métodos, creando un aeropuerto con 10 vuelos activos, todos saliendo 11 y llegando a las 12.
Cambia la salida del primer vuelo a las 13 y comprueba las horas de salida y llegada. Cambia la de llegada a las 14
y vuelve a comprobar las horas.

*/

let aeropuerto = new Aeropuerto("Aeropuerto Sevilla", "Sevilla", "10");

let vuelo1 = new Vuelo("1", "15:00", "18:00");
Vuelo.modificarLlegada(vuelo1);


function Aeropuerto(nombre, ciudad, nVuelo){
    this.nombre=nombre;
    this.ciudad=ciudad;
    this.nVuelo=nVuelo;
         
    
    
  
}

function Vuelo(codigo, hora_llegada, hora_salida) {
    this.codigo= codigo;
    this.hora_llegada= hora_llegada;
    this.hora_salida=hora_salida;
    this.modificarLlegada = function (v){
                       
            v.hora_llegada = prompt("Nuevo hora de llegada")
            
        }

}






