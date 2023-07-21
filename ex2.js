//Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e
//calcule o seu IMC. Exiba uma mensagem com o resultado, indicando se o usuário está 
//abaixo do peso, no peso ideal ou acima do peso.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite seu nome: ',(nome) =>{
console.log ("Olá", nome, "Insira seu peso: ")
rl.question("",(peso) =>{
rl.question('Digite sua altura em cm: ',(altura) =>{

    const imc = peso / (altura* altura)
    console.log(imc);

    if(imc < 18.5){
        console.log("MAGREZA");
            }else if(imc >= 18.5 && imc < 24.9){
                console.log("NORMAL");
            }else if(imc >= 25 && imc < 29.9){
                console.log("SOBREPESO");
            }else if(imc > 30 && imc < 39.9){
                console.log("OBESIDADE");
            }else{
                console.log("OBESIDADE GRAVE")
            }
                rl.close();
                  })
            })
        })
