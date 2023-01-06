const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const munieco = document.querySelector(".contenedor-munieco");
const h3 = document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-p");
const txEncriptado = document.querySelector(".contenedor-tx-encriptado")
const contenedorCopiar = document.querySelector(".contenedor-copiar")
let textoEncriptado = document.querySelector(".texto-encriptado");
let textarea = document.querySelector(".textarea");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;


textarea.focus();
/*EL CURSOR QUEDA DENTRO DEL TEXTAREA*/

function encriptar(){
    /*ENCRIPTA EL TEXTO CORRECTO*/


    if (recuperarTexto() != false){
        /*CONTROLO SI ME DEVUELVE EL TEXTO*/

        ocultarMunieco();
        textoEncriptado.textContent = encriptarTexto(recuperarTexto());
        /*AGREGO EL TEXTO ENCRIPTADO EN EL PARRAFO DE TEXTO-ENCRIPTADO*/
        leer(textarea.value);
        /*LEE EL TEXTO*/
        textarea.value = "";
        /*LIMPIO EL TEXTAREA, QUEDA CON EL PLACEHOLDER*/
        textarea.focus();
        
    } else {

        alert(
            "SOLO SE PERMITE:\nLETRAS EN MINUSCULAS\nSIN ACENTOS\nY ESPACIOS"
        )
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    }
}

function desencriptar(){
    /*DESENCRIPTA EL TEXTO CORRECTO*/

    if (recuperarTexto() != false){

        ocultarMunieco();
        textoEncriptado.textContent = desencriptarTexto(recuperarTexto());
        leer(textarea.value);
        textarea.value = "";
        textarea.focus();

    } else {

        alert(
            "SOLO SE PERMITE:\nLETRAS EN MINUSCULAS\nSIN ACENTOS\nY ESPACIOS"
        )
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    }
}

function copiarTexto(){
    /*COPIO EL TEXTO DE TEXTO-ENCRIPTADO EN EL TEXTAREA*/

    textarea.value = textoEncriptado.textContent;
    /*PASO EL TEXTO ENCRIPTADO AL TEXTAREA*/
    navigator.clipboard.writeText(textoEncriptado.textContent);
    /*COPIO EN EL PORTA PAPELES LO QUE ESTA EN TEXTO-ENCRIPTADO*/
    leer(textoEncriptado.textContent);
    mostrarMunieco();
    textarea.focus();
}

function leer(texto){
    /*HAGO QUE LEEA EL TEXTO INDICADO*/

    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = texto;
    mensaje.lang = "es-ES";
    window.speechSynthesis.speak(mensaje);
}


function recuperarTexto(){
    /*RECUPERO EL TEXTO SI CUMPLE CON LO SOLICITADO*/

    const regEx = /[a-z/ñ\s]/;
    /*VALORES ACEPTADOS*/

    let cumpleRegla = true;

    for (let i=0; i < textarea.value.length; i++){

        if ((!regEx.test(textarea.value[i]))){
            cumpleRegla = false;
            break;
        }
    }
    
    if (cumpleRegla){
        return textarea.value;
    } else {
        return cumpleRegla;
    }
}


function ocultarMunieco(){
    /*OCULTO EL MUÑECO Y EL TEXTO AGREGANDO LA CLASE OCULTAR QUE CREE EN EL CSS*/

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


/* Voy a buscar otra opción más eficiente
function recuperarTexto(){
    /*encripto el texto y lo retorno*/

    /*variables de control 
    var tieneMayusculas = false;
    var tieneAcentos = false;
    
    /*recorro el texto para detectar si tiene mayuscular
    for (var i=0; i < textarea.value.length; i++){
        /*comparo cada letra con su mayuscula y discrimino los espacios en blanco 
        if (textarea.value[i] === textarea.value[i].toUpperCase() & textarea.value[i] != " "){
            alert("TEXTO SIN MAYUSCULAS");
            tieneMayusculas = true;
        }
        
        /*comparo si tiene acento, no incluyo mayusculas porque ya se descartan con el primer if 
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
    /*si tiene mayusculas o acentos retorno true sino el texto
    if(tieneMayusculas || tieneAcentos){
        return true;
    } else {
        return textarea.value;
    }
}*/