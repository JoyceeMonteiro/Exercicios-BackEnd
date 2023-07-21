//Desenvolva um programa que solicite ao usuário o raio de um círculo e 
//calcule a área desse círculo. Exiba o resultado.

const readline = require('readline')// REQUERINDO A BIBIOTECA READLINE
const rl = readline.createInterface({//CREATE INTERFACE É A FUNCAO
    input:process.stdin,//PROCESSO  STANDART INPUT
    output:process.stdout//STANDART OUTPUT
});
rl.question('Digite o raio do círculo: ',(raio) =>{
    const area = Math.PI * (raio*raio)
    console.log("O valor da área do círculo é: " , area.toFixed(2))//math chama a foórmula do pi
    rl.close();
})
