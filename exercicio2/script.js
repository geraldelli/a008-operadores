// Faça um programa que pergunte ao usuário dois números. Em seguida, 
//faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```

let primeiroNumero = prompt("Por favor informe um número!");
let segundoNumero = prompt("Por favor informe outro número!");
let resultado;
let resultadoComparacao = 0;
let comparacao;

resultado = primeiroNumero > segundoNumero;
console.log("O primeiro numero é maior que segundo?",resultado)

resultado = primeiroNumero == segundoNumero
console.log("O primeiro numero é igual ao segundo?",resultado)

resultado = primeiroNumero % segundoNumero
comparacao = resultadoComparacao === resultado
console.log("O primeiro numero é divisível pelo segundo?",comparacao)

resultado = segundoNumero % primeiroNumero
comparacao = resultadoComparacao === resultado
console.log("O segundo numero é divisível pelo primeiro?",comparacao)