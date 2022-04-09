$(() => {
    setInterval(drawDateAndTime, 1);
});

function drawDateAndTime() {
    let date = new Date();

    $("#dateTime").text(formatDate(date) + " | " + date.toLocaleTimeString());
}

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth();
    switch (date.getMonth()) {
        case 0: mm = "Январь"; break;
        case 1: mm = "Февраль"; break;
        case 2: mm = "Март"; break;
        case 3: mm = "Апрель"; break;
        case 4: mm = "Май"; break;
        case 5: mm = "Июнь"; break;
        case 6: mm = "Июль"; break;
        case 7: mm = "Август"; break;
        case 8: mm = "Сентябрь"; break;
        case 9: mm = "Октябрь"; break;
        case 10: mm = "Ноябрь"; break;
        case 11: mm = "Декабрь"; break;
    }

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + ' ' + mm + ' ' + yy;
}