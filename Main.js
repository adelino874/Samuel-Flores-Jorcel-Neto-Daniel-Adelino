const cal = require("./cal");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menu completo como uma única string
const menu = `
===== MENU =====
1 - Soma
2 - Subtracao
3 - Multiplicacao
4 - Divisao
5 - Potencia
6 - Modulo
7 - Media
8 - Dobro
9 - Quadrado
10 - Cubo
11 - Raiz Quadrada
12 - Fatorial
0 - Sair
================
`;

console.log(menu);

rl.question("Escolha a opcao: ", (opcao) => {

  const funcoes1Param = ["8","9","10","11","12"];
  const funcoes2Param = ["1","2","3","4","5","6","7"];

  if (funcoes1Param.includes(opcao)) {
    rl.question("Digite um numero: ", (a) => {
      const num = parseFloat(a);
      if (isNaN(num)) {
        console.log("Erro: digite apenas numeros");
        rl.close();
        return;
      }

      let resultado;
      switch(opcao) {
        case "8": resultado = cal.dobro(num); break;
        case "9": resultado = cal.quadrado(num); break;
        case "10": resultado = cal.cubo(num); break;
        case "11": resultado = cal.raizQuadrada(num); break;
        case "12": resultado = cal.fatorial(num); break;
      }

      console.log("Eco:", resultado);
      rl.close();
    });
  } 
  else if (funcoes2Param.includes(opcao)) {
    rl.question("Digite o primeiro numero: ", (a) => {
      rl.question("Digite o segundo numero: ", (b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        if (isNaN(num1) || isNaN(num2)) {
          console.log("Erro: digite apenas numeros");
          rl.close();
          return;
        }

        let resultado;
        switch(opcao) {
          case "1": resultado = cal.soma(num1, num2); break;
          case "2": resultado = cal.subtracao(num1, num2); break;
          case "3": resultado = cal.multiplicacao(num1, num2); break;
          case "4": resultado = cal.divisao(num1, num2); break;
          case "5": resultado = cal.potencia(num1, num2); break;
          case "6": resultado = cal.modulo(num1, num2); break;
          case "7": resultado = cal.media(num1, num2); break;
        }

        console.log("Eco:", resultado);
        rl.close();
      });
    });
  } 
  else if (opcao === "0") {
    console.log("Programa encerrado.");
    rl.close();
  } 
  else {
    console.log("Opcao invalida");
    rl.close();
  }

});
