// const pessoa1 = {
//     nome: 'Lucas',
//     sobrenome: 'Gabriel',
//     idade: 18
// }

// const pessoa2 = {
//     nome: 'Milena',
//     sobrenome: 'Rafaela',
//     idade: 13
// }

// console.log(pessoa1.nome);
// console.log(pessoa2.idade);

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Lucas', 'Gabriel', 18);
const pessoa2 = criaPessoa('Milena', 'Oliveira', 44);
const pessoa3 = criaPessoa('Geraldo', 'Moreira', 32);
const pessoa4 = criaPessoa('Renato', 'Silva', 12);
const pessoa5 = criaPessoa('Maria', 'Severo', 23);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);