// Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto
// e verifique se há quantidade suficiente em estoque.
// Caso haja, exiba uma mensagem informando a disponibilidade; caso contrário, 
//informe que o produto está indisponível.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Digite um produto: ',(produto) =>{
rl.question('Digite a quantidade do produto: ',(qtdProduto) =>{
   if (qtdProduto <= estoque){
    console.log("Disponível");
   }else if (qtdProduto >estoque){
    console.log("Indisponível");
   }else {
    console.log("Valor Inválido");
   }
   })
rl.close();
})



