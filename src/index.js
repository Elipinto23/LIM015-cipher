import cipher from './cipher.js';

console.log(cipher);
let btncifrar = document.getElementById("cifrar");
let llave = document.getElementById("llave");
let texto1 = document.getElementById("texto1");
//let btndescifrar = document.getElementById("descifrar");
//let texto2 = document.getElementById("texto2");

function capturadata() {
    let result = cipher.encode(llave.value, texto1.value);
    console.log(result);
    document.getElementById("texto2").value = result;
}
btncifrar.addEventListener("click", capturadata);
document.getElementById("texto1").addEventListener("keyup", function () {
    texto1.value = texto1.value.toUpperCase();

});


