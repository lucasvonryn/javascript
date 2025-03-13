const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Gabriel',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando...`);
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.incrementaIdade();
// pessoa1.fala();