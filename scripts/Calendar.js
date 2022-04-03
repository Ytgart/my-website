window.addEventListener("load", main);

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

function main() {
    let selectMonths = document.getElementById("months");
    let selectYears = document.getElementById("years");
    let selectDays = document.getElementsByClassName("days");

    let dateField = document.getElementById("date");
    let calendar = document.getElementsByClassName("calendar");

    months.forEach(element => {
        let newOption = document.createElement("option");
        selectMonths.appendChild(newOption).innerHTML = element;
    });

    dateField.addEventListener("click", () => {
        calendar[0].style.display = "block"
    });

    for (let i = 1995; i < 2025; i++) {
        let newOption = document.createElement("option");
        selectYears.appendChild(newOption).innerHTML = i;
    }

    for (let i = 1; i < 32; i++) {
        let newDay = document.createElement("a");
        let day = selectDays[0].appendChild(newDay);
        day.innerHTML = i;
        day.addEventListener("mouseover", () => {
            day.style.background = "#181818";
        });
        day.addEventListener("mouseout", () => {
            day.style.background = "#3b3b3b";
        });

        day.addEventListener("click", () => {
            calendar[0].style.display = "none";
            setDate(i, selectMonths.value, selectYears.value);
        });
    }
}

function setDate(day, month, year) {
    let dateIP = document.getElementById("date");
    dateIP.value = day + " " + month + " " + year;
}