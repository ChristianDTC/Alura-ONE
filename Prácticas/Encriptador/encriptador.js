var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var botonCopiar = document.querySelector(".boton-copiar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-p");
var txEncriptado = document.querySelector(".contenedor-tx-encriptado")
var contenedorCopiar = document.querySelector(".contenedor-copiar")
var textoEncriptado = document.querySelector(".texto-encriptado");
var textarea = document.querySelector(".textarea");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;

/*hago que el cursor este dentro del textarea */
textarea.focus();

function encriptar(){
    /*encriptar el texto*/

    /*controlo si tiene mayusculas para hacer el encriptado */
    if (recuperarTexto() === true){
        /*limpio el textarea, queda con el placeholder*/
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    } else {
        ocultarMunieco();
        var textoRecuperado = recuperarTexto();
        /*agrego el texto encriptado en el párrafo de texto-encriptado */
        textoEncriptado.textContent = encriptarTexto(textoRecuperado);
        /*genero un audio que lee el texto */
        leer(textarea.value);
        textarea.value = "";
    } 
}

function desencriptar(){
    /*desencriptar el texto*/
    if (recuperarTexto() === true){
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    } else {
        ocultarMunieco();
        var textoRecuperado = recuperarTexto();
        textoEncriptado.textContent = desencriptarTexto(textoRecuperado); 
        leer(textarea.value);
        textarea.value = "";
    }
}

function copiarTexto(){
    /*copio el texto del párrafo texto-encriptado */
    var textoCopiado = textoEncriptado.textContent;
    navigator.clipboard.writeText(textoCopiado);
    leer(textoEncriptado.textContent);
    mostrarMunieco();
}

function leer(texto){
    /*hago que lea el texto que indico */
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = texto;
    mensaje.lang = "es-ES";
    window.speechSynthesis.speak(mensaje);
}

function recuperarTexto(){
    /*encripto el texto y lo retorno*/

    /*variables de control */
    var tieneMayusculas = false;
    var tieneAcentos = false;
    
    /*recorro el texto para detectar si tiene mayuscular*/
    for (var i=0; i < textarea.value.length; i++){
        /*comparo cada letra con su mayuscula y discrimino los espacios en blanco */
        if (textarea.value[i] === textarea.value[i].toUpperCase() & textarea.value[i] != " "){
            alert("TEXTO SIN MAYUSCULAS");
            tieneMayusculas = true;
        }
        
        /*comparo si tiene acento, no incluyo mayusculas porque ya se descartan con el primer if */
        if (textarea.value[i] === "á" ||
            textarea.value[i] === "é" ||
            textarea.value[i] === "í" ||
            textarea.value[i] === "ó"||
            textarea.value[i] === "ú"){
            tieneAcentos = true;
            alert("TEXTO SIN ACENTOS");
            break;
        }
       
    }
    /*si tiene mayusculas o acentos retorno true sino el texto*/
    if(tieneMayusculas || tieneAcentos){
        return true;
    } else {
        return textarea.value;
    }
}

function ocultarMunieco(){
    /*oculta el munieco y el texto agregando la clase ocultar que cree en el css*/
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    mostrarCopiar();
}

function mostrarMunieco(){
    /*muestra el munieco y el texto eliminando la clase ocultar*/
    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
    ocultarCopiar();
}

function mostrarCopiar(){
    /*muestra el texto y boton copiar eliminando la clase ocultar*/
    txEncriptado.classList.remove("ocultar");
    contenedorCopiar.classList.remove("ocultar");
}

function ocultarCopiar(){
    /*oculta el texto y boton copiar agregando la clase ocultar que cree en el css*/
    txEncriptado.classList.add("ocultar");
    contenedorCopiar.classList.add("ocultar");
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