function encriptar(){
    var texto = document.getElementById("input-text").value.toLowerCase();
    
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text-area2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}
function desencriptar(){
    var texto = document.getElementById("input-text").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text-area2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}
function copy(){


    var contenido = document.querySelector("#text-area2");
    contenido.select();
    document.execCommand("copy")
    navigator.clipboard.writeText(text-area2)
    alert("¡Mensaje copiado!")
}