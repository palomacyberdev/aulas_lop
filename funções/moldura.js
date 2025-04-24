// Desenhe uma moldura em uma frase
const readline = require('readline-sync');
const caracter='█'

function barra(quantidade){
    for(let i=0;i<quantidade+4;i++){
        process.stdout.write(caracter)
        
    }
    console.log();
}
//Fora da função
//Tudo oque está dentro da função é ajustado somente dentro da função

const texto = readline.question("\nDigite uma frase\t");

barra(texto.length);
barra(texto.length);
console.log(`${caracter} ${texto} ${caracter}`);
barra(texto.length);
barra(texto.length)