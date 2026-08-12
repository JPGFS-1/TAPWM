const prompt = require('prompt-sync')();
//isso, a função retorna um valor, que é uma nova função que pode ser usada para criar prompts.

function saudacao(nome) {
    console.log(' OI '+ nome);
}
function entradaNome(callback){
    let nome = prompt('Digite seu nome:');
    callback(nome); //chamando a função callback (saudação)
}
entradaNome(saudacao);