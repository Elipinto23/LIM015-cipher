const cipher = {
  //aca debo colocar condicional de la llave si esta vacia o es 0, && || != y arrojar un error
  // leer type error constructor
  encode: function (llave, texto1) {
    //  console.log(string);
    let arraytexto = [];

    for (let i = 0; i < texto1.length; i++) {
      //arraytexto.push(string.charCodeAt(i) + offset);
      arraytexto.push(String.fromCharCode(texto1.charCodeAt(i) + parseInt(llave)));
      //if (texto1<32 ||texto1>90){
      //  arraytexto=arraytexto+arraytexto.push(String.fromCharCode(texto1.charCodeAt(i) + parseInt(llave)));
      //  console.log(arraytexto);

    }
    return arraytexto.join('');
  }
   // console.log(arraytexto.join(""));
   
}
export default cipher;
