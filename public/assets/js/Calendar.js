let months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь',
];

$(() => {
    main();
});

function main() {
    let selectMonths = $("#months");
    let selectYears = $("#years");
    let selectDays = $(".days");

    let dateField = $("#date");
    let calendar = $(".calendar");

    months.forEach(element => {
        selectMonths.append(`<option>${element}</option>`);
    });

    dateField.click(() => {
        calendar.css("display", "block");
    });

    for (let i = 1995; i < 2025; i++) {
        selectYears.append(`<option>${i}</option>`);
    }

    for (let i = 1; i < 32; i++) {
        $(`<a>${i}</a>`)
            .appendTo(selectDays)
            .mouseover((event) => {
                $(event.target).css("background", "#181818");
            })
            .mouseout((event) => {
                $(event.target).css("background", "#3b3b3b");
            })
            .click(() => {
                calendar.css("display", "none");
                setDate(i, selectMonths.val(), selectYears.val());
            });
    }
}

function setDate(day, month, year) {
    $("#date").val(day + " " + month + " " + year);
}