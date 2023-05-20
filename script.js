var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var Munieco = document.querySelector(".cont-munieco");
var Parrafo = document.querySelector(".cont-title");
var contResultado = document.querySelector(".cont-resultado")
var Resultado = document.querySelector(".txt-result");

function encriptarTexto(texto) {
    let encriptado = texto.toLowerCase();
    encriptado = encriptado.replace(/e/g, "enter");
    encriptado = encriptado.replace(/i/g, "imes");
    encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");
    return encriptado;
}

function desencriptarTexto(textoEncriptado) {
    let desencriptado = textoEncriptado;
    desencriptado = desencriptado.replace(/ufat/g, "u");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/enter/g, "e");
    return desencriptado;
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".textarea");
    return cajatexto.value;
}

function ocultarAdelante() {
    Munieco.classList.add("ocultar");
    Parrafo.classList.add("ocultar");
    contResultado.classList.add("aparecer");
}

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    Resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    Resultado.textContent = desencriptarTexto(cajatexto);
}

const botonCopiar = document.querySelector(".btn-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".txt-result").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    });

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

