const nome = 'Lucas Gabriel';
const sobrenome = 'Von Ryn';
const idade = 19;
const peso = 70;
const alturaEmM = 1.8;
let imc; // PESO / (ALTURA * ALTURA)
let anoNascimento;
let anoAtual = 2024;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

// Template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} m de altura e seu IMC é de imc`);
console.log(`${nome} nasceu em ${anoNascimento}`);