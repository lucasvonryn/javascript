/*
    Primitivos (imutáveis) - string, number, bolean, null, undefined, 
    (bigint, symbol) - Valores copiados.

    Referência (mutáveis) - array, object, function - Valores passados
    por referência.
*/

// let a = 'A';
// let b = a; // Cópia, não apontam para o mesmo valor na memória
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b); // O valor de b se mantêm

// --------------------------------------------------------------

let a = [1, 2, 3];
let b = a;
let c = b; // Desse modo c acaba apontando para o mesmo local na memória que a
console.log(a, b);

a.push(4);
console.log(a, b); // b também foi afetado, pois aponta para o mesmo local na memória

b.pop();
console.log(a, b); // a também foi afetado pelo pop

a.push('Lucas');
console.log(c);
console.log(a, b, c);