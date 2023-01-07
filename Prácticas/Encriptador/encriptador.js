/*BOTONES */
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const btnDark = document.querySelector(".btn-dark")
const btnLight = document.querySelector(".btn-light")

/*CONTENEDORES*/
const txEncriptado = document.querySelector(".contenedor-tx-encriptado");
const contenedorCopiar = document.querySelector(".contenedor-copiar");
const html = document.querySelector(".contenedor-html");
const body = document.querySelector(".contenedor-body");
const sectionMunieco = document.querySelector(".section-munieco");
const munieco = document.querySelector(".contenedor-munieco");
const h3 = document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-p");
const copyride = document.querySelector(".copyride");

/*ELEMENTOS*/
let textoEncriptado = document.querySelector(".texto-encriptado");
let textarea = document.querySelector(".textarea");
const link = document.querySelector(".fa-linkedin");
const git = document.querySelector(".fa-github");
const logo = document.querySelector(".img-logo");
const logoW = document.querySelector(".img-logo-w");
const btnLeer = document.querySelector(".btn-leer");

/*ACTIVACION FUNCIONES CON CLICK*/
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
btnDark.onclick = dark;
btnLight.onclick = light;
btnLeer.onclick = leerTxt;


textarea.focus();
/*EL CURSOR QUEDA DENTRO DEL TEXTAREA*/



/* FUNCIONES */

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
    textoEncriptado.textContent = "";
    mostrarMunieco();
    textarea.focus();
}


function leerTxt(){
    /*SI HAY TEXTO EN TEXTAREA O TEXTO-ENCRIPTADO LO LEE*/
    
    leer(textarea.value);
    leer(textoEncriptado.textContent);
}
function leer(texto){
    /*HAGO QUE LEEA EL TEXTO INDICADO*/

    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = texto;
    mensaje.lang = "es-ES";
    window.speechSynthesis.speak(mensaje);
}


function dark(){
    /*MODIFICO LOS BACKGROUND PARA DARLE UN MODO OSCURO*/

    html.classList.add("dark");
    body.classList.add("dark");
    btnLeer.classList.add("dark")
    copyride.classList.add("dark");
    link.classList.add("dark");
    git.classList.add("dark");
    textarea.classList.add("dark-grey");
    sectionMunieco.classList.add("dark-grey")
    botonEncriptar.classList.add("dark-grey");
    botonDesencriptar.classList.add("dark-grey2");
    botonCopiar.classList.add("dark-grey2");
    logo.classList.add("ocultar");
    logoW.classList.remove("ocultar");
    btnDark.classList.add("ocultar");
    btnLight.classList.remove("ocultar");
    textarea.focus();
}
function light(){
    /*DEVUELVO LOS VALORES ORIGINALES, SACO MODO OSCURO*/

    html.classList.remove("dark");
    body.classList.remove("dark");
    btnLeer.classList.remove("dark")
    copyride.classList.remove("dark");
    link.classList.remove("dark");
    git.classList.remove("dark");
    textarea.classList.remove("dark-grey");
    sectionMunieco.classList.remove("dark-grey")
    botonEncriptar.classList.remove("dark-grey");
    botonDesencriptar.classList.remove("dark-grey2");
    botonCopiar.classList.remove("dark-grey2");
    logoW.classList.add("ocultar");
    logo.classList.remove("ocultar");
    btnLight.classList.add("ocultar");
    btnDark.classList.remove("ocultar");
    textarea.focus();
}


function recuperarTexto(){
    /*RECUPERO EL TEXTO SI CUMPLE CON LO SOLICITADO*/

    const regEx = /[a-z/ñ\s]/;
    /*VALORES ACEPTADOS*/

    let cumpleRegla = true;
    /*VARIABLE DE CONTROL*/

    for (let i=0; i < textarea.value.length; i++){
        /*RECORRO EL TEXTO LETRA POR LETRA COMPARANDO CON LOS VALORES ACEPTADOS */

        if ((!regEx.test(textarea.value[i]))){
            /*SI DETENCTA UN CARACTER QUE NO ESTA DENTRO DE LOS ACEPTADOS, TERMINA EL FOR Y CAMBIA LA VARIABLE DE CONTROL*/
            cumpleRegla = false;
            break;
        }
    }
    
    if (cumpleRegla){
        /*SI EL TEXTO CUMPLE LOS OBJETIVOS LO RETORNA*/
        return textarea.value;
    } else {
        /*SINO RETORNA FALSE*/
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
    /*MUESTRO EL MUÑECO Y EL TEXTO REMOVIENDO LA CLASE OCULTAR QUE CREE EN EL CSS*/

    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
    ocultarCopiar();
}


function mostrarCopiar(){
    /*MUESTRA EL TEXTO Y EL BOTON COPIAR*/

    txEncriptado.classList.remove("ocultar");
    contenedorCopiar.classList.remove("ocultar");
}
function ocultarCopiar(){
    /*OCULTO EL TEXTO Y EL BOTON COPIAR*/

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