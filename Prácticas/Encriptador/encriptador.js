var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-p");
var textoEncriptado = document.querySelector(".texto-encriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    /*encriptar el texto*/
    ocultarMunieco();
    var textoRecuperado = recuperarTexto();
    textoEncriptado.textContent = encriptarTexto(textoRecuperado);
}

function desencriptar(){
    /*desencriptar el texto*/
    ocultarMunieco();
    var textoRecuperado = recuperarTexto();
    textoEncriptado.textContent = desencriptarTexto(textoRecuperado);
}

function recuperarTexto(){
    /*copiamos el texto a encriptar y lo retornamos*/
    var textarea = document.querySelector(".textarea");
    return textarea.value;
}

function ocultarMunieco(){
    /*oculta el munieco y el texto agregando la clase ocultar que creamos en el css*/
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    /*código de encriptación*/
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        /*recorre el texto ingresado buscando las vocales a cambiar y las concatena para obtener el encriptado*/
        if (texto[i] === "a"){
            textoFinal += "ai";
        }
        else if (texto[i] === "e"){
            textoFinal += "enter";
        }
        else if (texto[i] === "i"){
            textoFinal += "imes";
        }
        else if (texto[i] === "o"){
            textoFinal += "ober";
        }
        else if (texto[i] === "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje){
    /*código de encriptación al reves*/
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        /*recorre el texto ingresado buscando las vocales a cambiar saltando las letras agregadas demás y las concatena para obtener el desencriptado*/
        if (texto[i] === "a"){
            textoFinal += "a";
            i += 1;
        }
        else if (texto[i] === "e"){
            textoFinal += "e";
            i += 4;
        }
        else if (texto[i] === "i"){
            textoFinal += "i";
            i += 3;
        }
        else if (texto[i] === "o"){
            textoFinal += "o";
            i += 3;
        }
        else if (texto[i] === "u"){
            textoFinal += "u";
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}