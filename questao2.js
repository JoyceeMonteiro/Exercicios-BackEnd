//Crie um programa que receba dois números digitados pelo usuário e
// exiba a soma desses números.

const readline = require('readline')
const rl = readline.createInterface({//CREATE INTERFACE É A FUNCAO
    input:process.stdin,//PROCESSO  STANDART INPUT
    output:process.stdout//STANDART OUTPUT
});
rl.question('Digite um número  ',(n1) =>{
    rl.question('Digite outro número  ',(n2) =>{

        const soma =Number(n1)+ Number(n2)
    console.log("A soma dos números é: ", soma);
        rl.close();
    });
    });
