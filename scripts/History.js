$(() => {
    createHistoryTable();
    createHistoryTable2();
});

const pages = ["Главная", "Обо мне", "Мои интересы", "Учеба", "Фотоальбом", "Контакт", "Тест"];
const pageUrls = ["main.html", "aboutme.html", "activities.html", "study.html", "photo.html", "contact.html", "test.html"];

function createHistoryTable() {
    let table = $("<table></table>");
    let title = $("<h1>История текущего сеанса</h1>");

    pages.forEach(function (value, index) {
        let tr = $("<tr></tr>");
        let td1 = $(`<td>${value}</td>`);

        let td2 = $(`<td>${sessionStorage.getItem(pageUrls[index]) ?? 0}</td>`);

        tr.append(td1);
        tr.append(td2);

        table.append(tr);
    });

    $("#historyTable")
        .append(title)
        .append(table);
}

function createHistoryTable2() {
    let table = $("<table></table>");
    let title = $("<h1>История за все время</h1>");

    pages.forEach(function (value, index) {
        let tr = $("<tr></tr>");
        let td1 = $(`<td>${value}</td>`);

        let td2 = $(`<td>${getCookie(pageUrls[index])}</td>`);

        tr.append(td1);
        tr.append(td2);

        table.append(tr);
    });

    $("#historyTable")
        .append(title)
        .append(table);
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