// function saudacao(nome) {
//     console.log(`Bom dia, ${nome}!`);
// }

// saudacao('Lucas');

function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

const raizQuadrada = function(n) {
    return n ** (1/2);
};

console.log(soma(2, 2));
console.log(soma(1, 2));
console.log(soma(10, 2));
console.log(soma());

console.log(raizQuadrada(9));
console.log(raizQuadrada(144));