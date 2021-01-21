window.onload = iniciar;

function iniciar() {
    document.getElementById("boton1").addEventListener("click", inputText, true);
    document.getElementById("boton2").addEventListener("click", inputPasswd, true);
    document.getElementById("boton3").addEventListener("click", inputTextArea, true);
    document.getElementById("boton4").addEventListener("click", inputLabel, true);
    document.getElementById("boton5").addEventListener("click", inputImagen, true);
    document.getElementById("boton6").addEventListener("click", inputCheckBox, true);
    document.getElementById("boton7").addEventListener("click", inputRadio, true);
    document.getElementById("boton8").addEventListener("click", inputBoton, true);
}

function inputText() {

    //Creamos el input 
    let inputText = document.createElement('input');
    //Tipo del input
    inputText.setAttribute("type", "text");
    //Nombre del input introduce usuario el nombre
    let nombre = prompt("De un valor al atributo name");
    //Entrara si el usuario ha puesto algo en la variable name
    if(nombre != null) {
        inputText.setAttribute("name", nombre);
        document.body.appendChild(inputText);
        //Creamos un salto de linea
        let br = document.createElement('br');
        //Agreamos el ultimo elemento del padre
        document.body.appendChild(br);
    }
}

function inputPasswd(){
    let inputPasswd = document.createElement('input');
    inputPasswd.setAttribute("type", "password");
    let nombre = prompt("De un valor al atributo name");
    if (nombre != null) {
        inputPasswd.setAttribute("name", nombre);
        document.body.appendChild(inputPasswd);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
}

function inputTextArea() {

    let inputTextArea = document.createElement('textarea');
    //Atributos que tendra el textarea columnas y filas
    inputTextArea.setAttribute("cols", "40");
    inputTextArea.setAttribute("rows", "5");
    let nombre = prompt("De un valor al atributo name");
    if (nombre != null) {
        inputTextArea.setAttribute("name", nombre);
        document.body.appendChild(inputTextArea);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
}

function inputLabel() {

    let inputLabel = document.createElement('label');
    let nombre = prompt("De valor al label");
    let text = document.createTextNode(nombre);
    nombre = prompt("De un valor al atributo for");
    if (nombre != null) {
        inputLabel.setAttribute("for", nombre);
        inputLabel.appendChild(text);
        document.body.appendChild(inputLabel);
    }

}

function inputImagen() {
    let inputImagen = document.createElement('img');
    let nombre = prompt("De un valor al atributo src");
    if (nombre != null) {
        inputImagen.setAttribute("src", nombre);
        document.body.appendChild(inputImagen);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
}

function inputCheckBox () {

    let inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute("type","checkbox")
    let nombre = prompt("De un valor al atributo nombre");
    let value = prompt("De un valor al atributo value");
    if (nombre != null || value != null) {
        inputCheckBox.setAttribute("name", nombre);
        inputCheckBox.setAttribute("value", value);
        document.body.appendChild(inputCheckBox);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }

}

function inputRadio() {

    let inputRadio = document.createElement('input');
    inputRadio.setAttribute("type","radio")
    let nombre = prompt("De un valor al atributo nombre");
    let value = prompt("De un valor al atributo value");
    if (nombre != null || value != null) {
        inputRadio.setAttribute("name", nombre);
        inputRadio.setAttribute("value", value);
        document.body.appendChild(inputRadio);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
}

function inputBoton() {

    let inputBoton = document.createElement('input');
    inputBoton.setAttribute("type","submit")
    let nombre = prompt("De un valor al atributo name");
    let value = prompt("De un valor al atributo value");
    if (nombre != null || value != null) {
        inputBoton.setAttribute("name", nombre);
        inputBoton.setAttribute("value", value);
        document.body.appendChild(inputBoton);
        let br = document.createElement('br');
        document.body.appendChild(br);

    }
}
