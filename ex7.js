//Crie um programa que solicite ao usuário um login e uma senha. 
//Em seguida, verifique se o login e a senha correspondem aos valores pré-definidos.
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const login = "administrador"
const senha= "1234"

rl.question('Digite seu login: ',(loginUsuario) =>{
    rl.question('Digite sua senha: ',(senhaUsuario) =>{
        
    if(loginUsuario === login && senhaUsuario === senha){
        console.log('Acesso liberado')
    }else{
        console.log('Dados de acesso inválido')
         }
         rl.close();
      })
    })
