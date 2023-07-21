// Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar
// em uma festa (idade mínima de 18 anos). Exiba uma mensagem informando se a entrada
// é permitida ou não.const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite sua idade: ',(idade) =>{
    if(idade >= 18){
        console.log('Entrada proibida')
             }else if(idade >= 18){
            console.log('Entrada autorizada')
        }else{
            console.log('Idade inválida')
        }
         rl.close();
      })
