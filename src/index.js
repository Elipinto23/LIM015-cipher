import cipher from './cipher.js';

console.log(cipher);
let btncifrar = document.getElementById("cifrar");
let llave = document.getElementById("llave").value;
let btndescifrar = document.getElementById("btndescifrar");
let texto2 = document.getElementById("texto2");
let txtcifrar = document.getElementById("texto1");
function capturadata() {
    let result =cipher.encode(3, txtcifrar.value);
    console.log(result);
}
btncifrar.addEventListener("click", capturadata);
document.getElementById("texto1").addEventListener("keyup", function () {
    texto1.value = texto1.value.toUpperCase();
});