//Crie um programa que peça ao usuário para digitar uma idade e 
//verifique se a pessoa é maior de idade (idade maior ou igual a 18).
// Exiba uma mensagem informando o resultado.

const readline = require('readline')// REQUERINDO A BIBIOTECA READLINE
const rl = readline.createInterface({//CREATE INTERFACE É A FUNCAO
    input:process.stdin,//PROCESSO  STANDART INPUT
    output:process.stdout//STANDART OUTPUT
});
rl.question('Digite sua idade: ',(idade) =>{
    if(idade >= 18){
        console.log('Você é maior de idade')
    }else{
        console.log('Você é menor de idade')
         }
         rl.close();
      })
