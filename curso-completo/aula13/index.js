//               01234567  -> Strings são iteráveis
let umaString = "Um texto";

console.log(umaString[3]);
console.log(umaString.charAt(3));
console.log(umaString.concat(` em um lindo dia.`));
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outro'));