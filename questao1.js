//Escreva um programa em JavaScript que solicite ao usuário seu nome e 
//exiba uma mensagem de boas-vindas personalizada.

const nome = process.argv[2];
console.log(`Olá, ${nome}! Bem Vindo(a) ao terminal.`)

//******PADRÃO
const readline = require('readline')
//importando biblioteca, pega valor e joga na variavel
// REQUERINDO A BIBIOTECA READLINE


//set get  
const rl = readline.createInterface({
    input:process.stdin, //in liga entra 
    output:process.stdout//out desliga mostra
});
rl.question('Digite seu nome,por favor  ',(nome) =>{//parenteses pois nao foi criado nome
    console.log('Olá,' ,nome, "Seja bem Vindo(a)!");
    rl.close();
}
);
