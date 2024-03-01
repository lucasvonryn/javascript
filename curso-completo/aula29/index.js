// if (diaSemana == 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana == 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana == 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana == 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana == 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana == 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana == 6) {
//     diaSemanaTexto = 'Sábado';
// }

function getWeekDayText (WeekDay) {
    let weekDayText;
    switch (WeekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda';
            return weekDayText;
        case 2:
            weekDayText = 'Terça';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}

const date = new Date('1986-03-02 00:00:00');
let weekDay = date.getDay();
const weekDayText = getWeekDayText(weekDay);

console.log(weekDay, weekDayText);