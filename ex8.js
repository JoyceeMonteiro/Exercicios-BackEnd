//Crie um programa que solicite ao usuário o valor de um produto e a
// porcentagem de desconto a ser aplicada. 
//Calcule o valor do desconto e exiba o valor final do produto com o desconto aplicado.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite o valor do produto: ',(produto) =>{
    rl.question('Digite a porcentagem de desconto: ',(desconto) =>{
        const desconto =  produto * (desconto / 100);
        const  valor =  produto - desconto 
        console.log('o valor a ser pago será: R$ ', valor)
    })

    rl.close();
 })
