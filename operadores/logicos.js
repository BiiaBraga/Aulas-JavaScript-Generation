//variavies
let x = 10;
let y = 5;
let preposicao1;
let preposicao2;
let preposicao3;
let preposicao4;
let resposta;

//proposicoes
proposicao1 = x > y;
console.log("A proposicao 1 é: " + proposicao1);

proposicao2 = x < y;
console.log("A proposicao 2 é: " + proposicao2);

proposicao3 = x != y;
console.log("A proposicao 3 é: " + proposicao3);

proposicao4 = x == y;
console.log("A proposicao 4 é: " + proposicao4);

//logicos
console.log("\n\n-------Conjuncao && --------\n")

resposta = proposicao1 && proposicao2;
console.log("A proposicao 1 e 2 é: " + resposta)

resposta = proposicao1 && proposicao3; 
console.log("A proposicao 1 e 3 é: " + resposta); 

resposta = proposicao2 && proposicao4; 
console.log("A proposicao 2 e 4 é: " + resposta); 

resposta = proposicao1 && proposicao2; 
console.log("A proposicao 1 e 2 é: " + resposta); 

resposta = proposicao3 && proposicao4; 
console.log("A proposicao 3 e 4 é: " + resposta);

console.log("\n\n-------Conjuncao || --------\n")

resposta = proposicao1 || proposicao2;
console.log("A proposicao 1 e 2 é: " + resposta)

resposta = proposicao1 || proposicao3; 
console.log("A proposicao 1 e 3 é: " + resposta); 

resposta = proposicao2 || proposicao4; 
console.log("A proposicao 2 e 4 é: " + resposta); 

resposta = proposicao1 || proposicao2; 
console.log("A proposicao 1 e 2 é: " + resposta); 

resposta = proposicao3 || proposicao4; 

console.log("\n\n-------Conjuncao ^ --------\n")

resposta = proposicao1 ^ proposicao2;
console.log("A proposicao 1 e 2 é: " + resposta)

resposta = proposicao1 ^ proposicao3; 
console.log("A proposicao 1 e 3 é: " + resposta); 

resposta = proposicao2 ^ proposicao4; 
console.log("A proposicao 2 e 4 é: " + resposta); 

resposta = proposicao1 ^ proposicao2; 
console.log("A proposicao 1 e 2 é: " + resposta); 

resposta = proposicao3 ^ proposicao4; 
console.log("A proposicao 3 e 4 é: " + resposta);