/**
 * Autor: Beatriz Braga
 * Data: 03/03
 */

//importações
import leia from 'readline-sync';

//variaveis
let numero1;
let numero2;
let operador;

//entrada
numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");
operador = leia.question("Digite o operador: ");

//switch case
switch(operador){
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case "*":s
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    case "**":
        console.log(`${numero1} ** ${numero2} = ${numero1 ** numero2}`);
        break;
    case "%":
        console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`);
        break;
    default:
        console.log("Opcao invalida!\n");
}
