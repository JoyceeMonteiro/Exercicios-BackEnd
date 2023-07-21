//Desenvolva um programa que peça ao usuário um número e verifique se esse número
// é positivo, negativo ou zero. Exiba uma mensagem correspondente.
//ctrl+s salvar


const readline = require('readline')// REQUERINDO A BIBIOTECA READLINE
const rl = readline.createInterface({//CREATE INTERFACE É A FUNCAO
    input:process.stdin,//PROCESSO  STANDART INPUT
    output:process.stdout//STANDART OUTPUT
});
rl.question('Digite um número  ',(num) =>{
num = Number(num);
if(num === 0){
    console.log("O número digitado é zero");
}else if (num <0){
    console.log("O número digitado é negativo");
}else if(num >0){
    console.log("O número digitado é posiTIvo")
}else{
    console.log("O valor digitado é inválido");
         }
        rl.close();
});

