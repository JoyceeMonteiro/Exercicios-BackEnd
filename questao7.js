//Crie um programa que solicite ao usuário uma temperatura em graus Celsius 
//e converta-a para Fahrenheit.
// A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

const readline = require('readline')// REQUERINDO A BIBIOTECA READLINE
const rl = readline.createInterface({//CREATE INTERFACE É A FUNCAO criando interface
    input:process.stdin,//PROCESSO  STANDART INPUT leitura
    output:process.stdout//STANDART OUTPUT escrita
});
rl.question('Digite uma temperatura em graus celsius  ',(celsius) =>{// qual pergunta/ rl.funçao
    const temperatura = (celsius * 9/5) + 32. 
    console.log('A temperatura' ,celsius, "graus celsius em Fahrenheit é", temperatura);
    rl.close();
}
);
