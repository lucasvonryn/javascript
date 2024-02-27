function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const seg = zeroAEsquerda(data.getSeconds());
    const min = zeroAEsquerda(data.getMinutes());
    const hora = zeroAEsquerda(data.getHours());
    const diaSemana = converteDiaSemana(data.getDay());

    return `${diaSemana} ${ano}/${mes}/${dia} ${hora}:${min}:${seg}`
}

function converteDiaSemana (diaSemana) {
    const diasDaSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]

    return diasDaSemana[diaSemana];
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);