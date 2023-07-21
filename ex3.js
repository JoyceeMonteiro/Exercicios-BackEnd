//Crie um programa que solicite ao usuário um valor em reais e faça a conversão
// desse valor para dólares, utilizando uma taxa de câmbio fixa. 
//Exiba o valor convertido.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite um valor em reais: ',(real) =>{
    const taxa = 0.3;
    const dolar = 4.9;
    const valorCambio = real/dolar-taxa;
    console.log("O valor cambiado é", valorCambio)

rl.close();
})


