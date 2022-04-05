window.onload = () => {
    createHistoryTable()
    createHistoryTable2()
};

const pages = ["Главная", "Обо мне", "Мои интересы", "Учеба", "Фотоальбом", "Контакт", "Тест"];
const pageUrls = ["main.html", "aboutme.html", "activities.html", "study.html", "photo.html", "contact.html", "test.html"];

function createHistoryTable() {
    let table = document.createElement("table");
    let title = document.createElement("h1");
    title.innerHTML = "История текущего сеанса";

    pages.forEach(function(value, index) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = value;

        let td2 = document.createElement("td");
        td2.innerHTML = sessionStorage.getItem(pageUrls[index]);

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    });

    document.getElementById("historyTable").appendChild(title);
    document.getElementById("historyTable").appendChild(table);
}

function createHistoryTable2() {
    let table = document.createElement("table");
    let title = document.createElement("h1");
    title.innerHTML = "История за все время";

    pages.forEach(function(value, index) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = value;

        let td2 = document.createElement("td");
        td2.innerHTML = getCookie(pageUrls[index]);

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    });

    document.getElementById("historyTable").appendChild(title);
    document.getElementById("historyTable").appendChild(table);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}