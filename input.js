const readline = require("readline");


function lerNumero(texto, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.question(texto, (valor) => {
    rl.close();
    callback(parseFloat(valor));
  });
}


module.exports = { lerNumero };



