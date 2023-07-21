//Crie um programa que solicite ao usuário as notas de três provas e seus respectivos pesos. 
//Calcule a média ponderada dessas provas e exiba o resultado.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite sua primeira nota: ',(n1) =>{
    rl.question('Digite o peso da primeira avaliação: ',(peso1) =>{

    rl.question('Digite sua segunda nota: ',(n2) =>{
        rl.question('Digite o peso da segunda avaliação: ',(peso2) =>{

        rl.question('Digite sua terceira nota: ',(n3) =>{
            rl.question('Digite so peso da terceira avaliação: ',(peso3) =>{

                const mediaPonderada = ((+n1*peso1+ +n2 * peso2 + +n3*peso3) / (+peso1 + peso2 + peso3));
           

                console.log("A média ponderada é: ", mediaPonderada.toFixed(2));
              
       
            rl.close();
            })
        });
    });
});
    });

})
