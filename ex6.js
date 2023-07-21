//Crie um programa que solicite ao usuário uma lista de compras, permitindo que ele 
//digite vários itens separados por vírgula. Em seguida, exiba a lista de compras 
//digitada pelo usuário.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite os produtos, separando por vírgula: ", (lista) =>{
    console.log("Lista de compras: ");
    console.log(lista);
 rl.close();
});


//ou,alternativa
// const readline = require('readline')
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });


// rl.question("Digite os produtos, separando por vírgula: ", (lista) =>{
    //const itens = lista.split (",");
    //for(let i = 0; i < itens.length; i++){
    //console.log (itens[i].trim());
    //}
    //rl.close();
    //});  

// })
