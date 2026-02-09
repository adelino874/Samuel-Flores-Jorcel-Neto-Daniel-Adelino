function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisao por zero";
  }
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function modulo(a, b) {
  return a % b;
}

function media(a, b) {
  return (a + b) / 2;
}

function dobro(a) {
  return a * 2;
}

function quadrado(a) {
  return a * a;
}

function cubo(a) {
  return a * a * a;
}

function raizQuadrada(a) {
  if (a < 0) {
    return "Erro: numero negativo";
  }
  return Math.sqrt(a);
}

function fatorial(a) {
  if (a < 0) {
    return "Erro: numero negativo";
  }

  let res = 1;
  for (let i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  modulo,
  media,
  dobro,
  quadrado,
  cubo,
  raizQuadrada,
  fatorial
};
