const cipher = {
  encode: function (llave, textoATransformar) {
    //  console.log(string);
    if (llave === 0 || llave === null || llave === "") {
      throw new TypeError("no hay llave");
    }
    
    if (textoATransformar === null || textoATransformar === "") {
      throw new TypeError("no hay texto");
    }
    let resultado = "";

    for (let i = 0; i < textoATransformar.length; i++) {
      let posicionAscii = textoATransformar.charCodeAt(i);

      if (posicionAscii < 65 || posicionAscii > 90) {
        resultado = resultado + textoATransformar[i];
      }
      else {
        posicionAscii = (posicionAscii - 65 + parseInt(llave)) % 26 + 65;
        resultado = resultado + String.fromCharCode(posicionAscii);
      }

      //identificar los numeros que comprenden las mayusculas en codigo ascii 65-90
      //realizar condicionales para las minusculas y las mayusculas
      //transformar nuestro string al alfabeto y ejecutar la formula
    }
    return resultado;
  },

  decode: function (llave, textoATransformar) {
    if (llave === 0 || llave === null || llave === "") {
      throw new TypeError("no hay llave");
    }
    if (textoATransformar === null || textoATransformar === "") {
      throw new TypeError("no hay texto");
    }
    let resultado = "";

    for (let i = 0; i < textoATransformar.length; i++) {
      let posicionAscii = textoATransformar.charCodeAt(i);

      if (posicionAscii < 65 || posicionAscii > 90) {
        resultado = resultado + textoATransformar[i];
      }
      else {
        posicionAscii = (posicionAscii + 65 - parseInt(llave)) % 26 + 65;
        resultado = resultado + String.fromCharCode(posicionAscii);
      }

      //identificar los numeros que comprenden las mayusculas en codigo ascii 65-90
      //realizar condicionales para las minusculas y las mayusculas
      //transformar nuestro string al alfabeto y ejecutar la formula
    }
    return resultado;
  }
}
export default cipher;
