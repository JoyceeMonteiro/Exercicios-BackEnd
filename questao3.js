//Escreva um programa que verifique se um número digitado pelo usuário
// é par ou ímpar e exiba uma mensagem correspondente.

const readline = require('readline')// REQUERINDO A BIBIOTECA READLINE
const rl = readline.createInterface({//CREATEINTERFACE É  A FUNCAO
    input:process.stdin,//PROCESSO  STANDART INPUT
    output:process.stdout//STANDART OUTPUT
});
rl.question('Digite um número  ',(numero) =>{
    if(numero %2 ===0){
        console.log('O número é par.');
    }else{
        console.log('O número é ímpar')
         }
         rl.close();
    })
