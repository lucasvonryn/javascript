const alunos = ['Lucas', 'Maria', 'João'];



alunos[1] = 'Fernando';
alunos.push('Roberto');
alunos.push('Luiza');
alunos.push('Luana');
// alunos[alunos.length] = 'Roberto';
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Luana';

alunos.unshift('Renata');

console.log(alunos);
console.log(alunos[0]);
console.log(alunos.length);