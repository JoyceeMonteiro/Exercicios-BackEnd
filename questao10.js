//Crie um programa que solicite ao usuário uma quantidade de horas e calcule o
// equivalente em minutos e segundos. Exiba os resultados.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite a quantidade de horas  ',(horas) =>{
    const minutos = Number (horas) * 60
    const segundos =Number(horas) * 3600    
    console.log("Você digitou ", horas, "horas, que equivalem a ", minutos, "minutos e a ",
     segundos, "segundos.");
     rl.close();
    });
   
