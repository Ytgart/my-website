const fotosPaths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const titles = ['Водопад', 'Водопад 2', 'Замок', 'Зелень', 'Лампа', 'Лампа 2', 'Зеленый фон', 'Вид',
    'Закат', 'Закат 2', 'Дерево', 'Остановка', 'Наушники', 'Гитара', 'Гитара 2'];

let table = document.createElement('table');
document.getElementById('photoalbum').append(table);

let currentElement = 0;

for (let i = 0; i < Math.ceil(titles.length / 4); i++) {
    let row = table.insertRow();

    for (let j = currentElement; j < currentElement + 4; j++) {
        if (currentElement < titles.length) {
            let cell = row.insertCell();
            let image = document.createElement('img');
            image.setAttribute('src', `images/${fotosPaths[j]}.jpg`);
            currentElement++;
            cell.appendChild(image);
        }
        else {
            break;
        }
    }
}