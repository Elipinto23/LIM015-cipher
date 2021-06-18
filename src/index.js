import cipher from './cipher.js';

//declaracion de variables (objetos en el dom)
let btncifrar = document.getElementById("cifrar");
let btndescifrar = document.getElementById("descifrar");
let llave = document.getElementById("llave");
let texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

//funciones
function cifrarYMostrarResultado() {
    let result = cipher.encode(llave.value, texto1.value);
    texto2.value = result;
}

function descifrarYMostrarResultado() {
    let result = cipher.decode(llave.value, texto1.value);
    texto2.value = result;
}

//asignacion de eventos
btncifrar.addEventListener("click", cifrarYMostrarResultado);
btndescifrar.addEventListener("click", descifrarYMostrarResultado);
//});
