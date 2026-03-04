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
let acompanhante;

//entrada
ingresso = leia.keyInYN("Tem ingresso? ");
idade = leia.questionInt("Qual a idade? ");

//condição
if(ingresso && (idade>=18)){
    console.log("\nBem vindo(a)!");
    nome = leia.question("Qual eh o seu nome? ");
    console.log(`Olá ${nome}`);
} else if(ingresso && (idade>=14)){
    console.log("\nBem vindo(a)!")
    console.log("Voce pode entrar acompanhado!");
    nome = leia.question("Qual eh o seu nome? ");
    acompanhante = leia.question("Qual eh o nome do acompanhante? ")
    console.log(`Olá ${nome} e ${acompanhante}`)
} else {
    console.log("\nNao pode entrar!");
}