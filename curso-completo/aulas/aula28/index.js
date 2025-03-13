// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras);
// const data = new Date(2005, 3, 1, 23, 12, 57);
const data = new Date('2005-04-01 23:12:57.100');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());