"use strict";
// • Utilizando o TypeScript e a tipagem escreva duas funções:
//  uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles,
//  e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
// Função para multiplicar dois números
function multiplica(a, b) {
    return a * b; // um tipo númerico.
}
const multiplaEmArrow = (a, b) => a * b; //Função em Arrow Function.
// -----------------------
// Função de saudação
function dizOi(nome) {
    return "olá " + nome; // uma concatenação do tipo string.
}
console.log(dizOi("Pitombeira")); // Exibe a saudação no console *
const dizOiEmArrow = (nome) => "olá " + nome; // Função em Arrow Function.
console.log(dizOiEmArrow("Lucas")); // *
