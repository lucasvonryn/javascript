const a = {
    nome: 'Lucas',
    sobrenome: 'Gabriel'
};

const b = a;

a.nome = 'João';
console.log(a);
console.log(b); // b também foi afetado pois aponta para o mesmo local que a