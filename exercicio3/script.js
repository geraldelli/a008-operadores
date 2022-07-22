/*Escreva as operações lógicas abaixo em formato de código. 
Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de vinte é maior que cinquenta

d) negação de (vinte é maior que cinquenta)

*/

const a = 5
const b = 20
const c = 2
const d = 50

console.log(a>b && a<2)
console.log(a === 5 || a === "5")
console.log(!b > d)
console.log(!(b>d))