const fs = require('fs');

let conteudo = fs.readFileSync(process.argv[2]);

let numeroDeLinhas = conteudo.toString().split('\n').length - 1;

console.log(numeroDeLinhas);