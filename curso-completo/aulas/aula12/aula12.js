let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let varAux = varA;

// varA = varB;
// varB = varC;
// varC = varAux;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);