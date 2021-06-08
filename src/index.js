import cipher from './cipher.js';

console.log(cipher);
let btncifrar = document.getElementById("cifrar");
let llave =parseInt(document.getElementById("llave").value);
let btndescifrar = document.getElementById("btndescifrar");
let texto2 = document.getElementById("texto2")
function capturadata() {
    let txtcifrar = document.getElementById("texto1").value;
    cipher.encode(llave, texto1);
}
btncifrar.addEventListener("click", capturadata);
document.getElementById("texto1").addEventListener("keyup");
function cifrarTexto(texto1, llave) {
    let resultado="";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}
