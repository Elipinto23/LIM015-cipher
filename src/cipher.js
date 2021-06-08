const cipher = {
  encode: function (offset, string) {
    console.log(string);
    let arraytexto = [];

    for (let i = 0; i < string.length; i++) {
      arraytexto.push(string.charCodeAt(i)+offset);
    }
    console.log(arraytexto);
  }
};

export default cipher;
