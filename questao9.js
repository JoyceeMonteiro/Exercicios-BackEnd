//Escreva um programa que solicite ao usuário três valores e determine o maior e o menor
// valor entre eles. Exiba os resultados.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite um número  ',(n1) =>{
rl.question('Digite outro número ',(n2) =>{
rl.question('Digite outro número ',(n3) =>{

            const menor = Math.min(n1, n2, n3)
            const maior = Math.max(n1, n2, n3)

            console.log("O menor valor é: ", menor);
            console.log("O maior valor é: ", maior);

        rl.close();
          });
        })
    })




    // if(n1 > n2 && n1 >n3){
// console.log("Os primeiro número digitado é o maior");
//     }else if(n2>n1 && n2>n3){
//         console.log("O segundo número digitado é o maior");
//     }else{
//         console.log("O terceiro número digitado é o maior")
   