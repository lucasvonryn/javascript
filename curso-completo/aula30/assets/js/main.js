const date = new Date();
const h1 = document.querySelector('.container h1');

function getWeekDayName (weekDayNumber) {
    const weekDayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ]
    return weekDayNames[weekDayNumber];
}

function getMonthName (monthNumber) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return months[monthNumber];
}

function zeroLeft (n) {
    return n < 10 ? `0${n}` : n;
}

function createDate (date) {
    const weekDayNumber = date.getDay();
    const monthNumber = date.getMonth();
    const weekDayName = getWeekDayName(weekDayNumber);
    const monthName = getMonthName(monthNumber); 
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());

    return (
        `${weekDayName}, ${day} ${monthName} ${year} ` +
        `${hour}:${minutes}:${seconds}`
    );
}

h1.innerHTML = createDate(date);

// SOLUÇÃO MAIS RÁPIDA
// const h1 = document.querySelector('.container h1');
// const date = new Date();
// h1.innerHTML = date.toLocaleDateString('en-US', { dateStyle: 'full' });