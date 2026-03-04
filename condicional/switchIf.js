/**
 * Autor: Beatriz Braga
 * Data: 03/03
 */

//importacaoes
import leia from "readline-sync";

//variaveis
let opcao;

//---- MENU ----//
console.log("1 - para livro preferido");
console.log("2 - para filme preferido");
console.log("3 - para série preferida");
console.log("4 - para música preferida");

opcao = leia.questionInt("Digite a opcao desejada: ");

switch(opcao){
   case 1:
       console.log("Livro preferido: O Senhor dos Anéis");
       break;
   case 2:
       console.log("Filme preferido: O Senhor dos Anéis");
       break;
   case 3:
       console.log("Série preferida: O Senhor dos Anéis");
       break;
   case 4:
       console.log("Música preferida: O Senhor dos Anéis");
       break;
   default:
       console.log("Opção inválida");
       break;
}