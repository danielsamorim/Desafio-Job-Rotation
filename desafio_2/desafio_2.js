// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será 
// a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva
//  um programa na linguagem que desejar onde, informado um número, ele calcule
//   a sequência de Fibonacci e retorne uma mensagem avisando se o número 
//   informado pertence ou não a sequência.

// IMPORTANTE: 
// 	Esse número pode ser informado através de qualquer entrada de sua 
//   preferência ou pode ser previamente definido no código;

function fibonacci(numero){
  let f = [];
  f[0] = 0;
  f[1] = 1;

  for(let i = 2; i < numero; i++){
    f[i] = f[i-2] + f[i-1]
  }
  return f
}

function achaNoFibonacci(numero){
  let arr = fibonacci(numero+10);
  let resp = arr.some(i => i === numero);
  return resp == true ? "O número informado pertence a sequência de fibonacci" :
   "O número informado não pertence a sequência de fibonacci";
}

let numero = 13;


console.log(achaNoFibonacci(numero))
