const verdadeira = true;

// let nome = 'Luiz'; // Criando
// var nome2 = 'Luiz'; // Criando 


// if (verdadeira) {
//     let nome = 'Otávio'; // Criando
//     var nome2 = 'Otávio'; // Redeclarando
    
//     if (verdadeira) {
//         var nome2 = 'Miranda'; // Redeclarando
//         let nome = 'Outra coisa';
//     }
// }

// console.log(nome, nome2);


function falaOi() {

    if (verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
        console.log(nome);
    }

    console.log(sobrenome);
}

falaOi();

console.log(sobrenome);

let sobrenome = 'Miranda';