
//Escreva um programa que solicite ao usuário dois números e exiba
// o maior entre eles.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite um número  ',(n1) =>{
    rl.question('Digite outro número',(n2) =>{
if(n1 === n2){
console.log("Os números são iguais");
    }else if(n1>n2){
        console.log("O primeiro número é maior");
    }else{
        console.log("O segundo número é maior")
    }
        rl.close();
          })
    })