/**
 * Autor: Beatriz Braga
 * Data: 03/03
 */

//importações
import leia from 'readline-sync';

//variaveis
let ingresso;
let idade;
let nome;

//entrada
ingresso = leia.keyInYN("Tem ingresso? ");
idade = leia.questionInt("Qual a idade? ");

//condição
if(ingresso && (idade>=18)){
    console.log("\nBem vindo!");
    nome = leia.question("Qual eh o seu nome? ");
    console.log(`Olá ${nome}`);
} else {
    console.log("\nNao pode entrar!");
}