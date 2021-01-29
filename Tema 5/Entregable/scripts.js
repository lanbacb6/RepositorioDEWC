window.onload = iniciar;

function iniciar() {
    document.getElementById("generar").addEventListener("click", generarTabla, true);
    document.getElementById("header").addEventListener("checked", generarInput, true);
}


function generarInput(){
    formulario = document.getElementById("formulario");
    
        for (a = 0; a < columnas; a++) {
            let salto = document.createElement("br");
            formulario.appendChild(salto);
            let label = document.createElement("label");
            label.setAttribute("for","header"+a);
            let textoLable = document.createTextNode("Header"+a+": ");
            label.appendChild(textoLable);
            let input = document.createElement("input");
            input.setAttribute("id","header"+a);
            formulario.appendChild(label);
            formulario.appendChild(input);
        }
    
}

function generarTabla(){


    let columnas = document.getElementById("columnas").value;
    let filas = document.getElementById("filas").value;
    let header = document.getElementById("header").checked;
    let contenido = document.getElementById("contenido").value;
    let grosor = document.getElementById("grosor").value;
    let color = document.getElementById("color").value;

    let hr = document.createElement('hr');
    document.body.appendChild(hr);

    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");     
    tabla.setAttribute("border", grosor);
    tabla.setAttribute("borderColor", color);
    tabla.setAttribute("style", "border-style: solid");   

    for (let i = 0; i < filas; i++){
        var nfilas = document.createElement("tr");
        for(let j = 0; j < columnas; j++){
            let celda = document.createElement("td");
            let textCelda = document.createTextNode(contenido);
            celda.appendChild(textCelda);
            nfilas.appendChild(celda);
        }
        tabla.appendChild(nfilas);
    }

   
    
    document.body.appendChild(tabla);
   

    
}