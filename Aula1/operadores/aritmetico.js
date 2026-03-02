const leia = require('readline-sync');

//variaveis
let numero1;
let numero2;
let resultadoSoma;
let resultadoSubtracao;
let exemploPreferencia;
let resultadoSobra;

//pega valores do usuario
numero1 = leia.questionInt("Digite um numero: ");
numero2 = leia.questionInt("Digite outro numero: ");

//imprime soma
resultadoSoma = numero1 + numero2;
console.log("\nA soma entre %d e %d é igual a %d\n", numero1, numero2, resultadoSoma);

//imprime subtracao
resultadoSubtracao = numero1 - numero2;
console.log(`A subtracao entre ${numero1} e ${numero2} é igual a ${resultadoSubtracao}\n`);

//preferencias de operadores
exemploPreferencia = numero1 + numero2 * 10;
console.log("A conta de exemplo deu igual a %d\n",exemploPreferencia);

//operador de resto 
resultadoSobra = numero1 % numero2
console.log(`O resultado da sobra da divisão entre ${numero1} e o ${numero2} é igual a ${resultadoSobra}`)