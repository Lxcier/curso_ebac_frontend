// • Utilizando o TypeScript e a tipagem escreva duas funções:
//  uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles,
//  e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;


// Função para multiplicar dois números

function multiplica (a: number, b: number): number {    // Função recebe dois valores númericos e retorna
    return a * b;                                       // um tipo númerico.
}

const multiplaEmArrow = (a: number, b: number): number => a * b;    //Função em Arrow Function.

// -----------------------

// Função de saudação

function dizOi (nome: string): string {     // Função recebe um valor do tipo string e retorna
    return "olá " + nome;                   // uma concatenação do tipo string.
}
console.log(dizOi("Pitombeira"));           // Exibe a saudação no console *

const dizOiEmArrow = (nome: string): string => "olá " + nome;   // Função em Arrow Function.
console.log(dizOiEmArrow("Lucas"));     // *