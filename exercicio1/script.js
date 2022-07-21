// Construa um programa que:

// a) Peça ao usuário que insira um número **par**

// b) Imprima no console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número

let numeroPar = prompt("Por favor insira um numero par.");
numeroPar = Number(numeroPar % 2);
console.log(numeroPar);
console.log(typeof numeroPar);

//c - Sim, todos os resultados são 0 pois não há resto de divisão de numero par dividido por 2.

//d - O resto da divisão passa a ser 1.
