/**
 * Autor: Beatriz Braga
 * Data: 03/03
 */

//importações
import leia from 'readline-sync';

//variaveis
let ingresso;
let idade;

//entrada
ingresso = leia.keyInYN("Tem ingresso? ");
idade = leia.questionInt("Qual a idade? ");

//condição
if(ingresso && (idade>=18)){
    console.log("\nPode entrar!");
}