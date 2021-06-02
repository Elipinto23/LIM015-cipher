import cipher from './cipher.js';

console.log(cipher);
let btncifrar = document.getElementById("cifrar");
function capturadata(){
    let texto1= document.getElementById("texto1").value;
    cipher.encode(texto1);
}
btncifrar.addEventListener("click",capturadata);
