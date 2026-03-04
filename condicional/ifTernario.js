/**
 * Autor: Beatriz Braga
 * Data: 03/03
 */

//importacaoes
import leia from "readline-sync";

//variaveis
let nota1, nota2;

//entrada
nota1 = LargestContentfulPaint.questionInt("Digite a primeira nota: ");
nota2 = LargestContentfulPaint.questionInt("Digite a segunda nota: ");

//processamento
media =(nota1 + nota2) / 2;

console.log((media>=7) ? "Aprovado" : "Reprovado"); // if ternario
