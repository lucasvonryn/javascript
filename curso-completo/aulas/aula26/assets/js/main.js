/*
    - Capturar o evento de submit do formulário
*/

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || peso < 0 || peso > 300)  {
        setResult('Peso inválido', false);
        return;
    }

    if (!altura || altura < 0 || altura > 2.5) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResult(msg, true);
})

function getNivelImc (imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obeseidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('result-paragraph');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}