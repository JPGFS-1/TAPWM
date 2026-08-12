const fs = require('fs'); // carregando módulo filesystemno
const data = fs.readFileSync('file.txt');
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());