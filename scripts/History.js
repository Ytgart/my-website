window.onload = createHistoryTable;

const pages = ["Главная", "Обо мне", "Мои интересы", "Учеба", "Фотоальбом", "Контакт", "Тест"];

function createHistoryTable() {
    let table = document.createElement("table");

    pages.forEach(function(value) {
        let td = document.createElement("tr");

        let tr1 = document.createElement("tr");
        tr1.innerHTML = value;

        let tr2 = document.createElement("tr");

        td.appendChild(tr1);
        td.appendChild(tr2);

        table.appendChild(td);
    });

    document.appendChild(table);
}