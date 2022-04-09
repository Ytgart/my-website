const fotosPaths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const titles = ['Водопад', 'Водопад 2', 'Замок', 'Зелень', 'Лампа', 'Лампа 2', 'Зеленый фон', 'Вид',
    'Закат', 'Закат 2', 'Дерево', 'Остановка', 'Наушники', 'Гитара', 'Гитара 2'];

$(() => {
    main();
});

function main() {
    $("#fullPhotoImg")
        .click(() => {
            $("#fullPhotoDiv").fadeOut(300);
        });

    $("#photoalbum").append("<table></table>");

    let currentElement = 0;

    for (let i = 0; i < Math.ceil(titles.length / 4); i++) {
        let tr = $("<tr></tr>").appendTo($("table"));

        for (let j = 0; j < 4; j++) {
            let image = $("<img></img>")
                .attr("src", `images/${fotosPaths[currentElement]}.jpg`)
                .attr("title", titles[currentElement])
                .click(() => {
                    openFullPhoto(image.attr("src"), image.attr("title"));
                });

            let name = $(`<h3>${titles[currentElement]}</h3>`)

            $("<td></td>")
                .append(image)
                .append(name)
                .appendTo(tr);

            currentElement++;
            if (currentElement >= titles.length) {
                break;
            }
        }
    }

    $("#arrowleft")
        .click(() => {
            $("#fullPhotoDiv").fadeOut(300, () => {
                $("#fullPhotoImg").attr('src', `images/${(titles.indexOf($("#fullPhotoImg").attr("title"))) - 1}.jpg`);
                $("#fullPhotoImg").attr('title', titles[(titles.indexOf($("#fullPhotoImg").attr("title"))) - 1]);
                $("#photosCount").text(`Фото ${titles.indexOf($("#fullPhotoImg").attr("title")) + 1} из ${fotosPaths.length}`);
            });
            $("#fullPhotoDiv").fadeIn(300);
        })
        .mouseover(() => {
            $("#arrowleft").css("filter","brightness(0.7)");
        })
        .mouseout(() => {
            $("#arrowleft").css("filter","brightness(1)");
        });

    $("#arrowright")
        .click(() => {
            $("#fullPhotoDiv").fadeOut(300, () => {
                $("#fullPhotoImg").attr('src', `images/${(titles.indexOf($("#fullPhotoImg").attr("title"))) + 1}.jpg`);
                $("#fullPhotoImg").attr('title', titles[(titles.indexOf($("#fullPhotoImg").attr("title"))) + 1]);
                $("#photosCount").text(`Фото ${titles.indexOf($("#fullPhotoImg").attr("title")) + 1} из ${fotosPaths.length}`);
            })
            $("#fullPhotoDiv").fadeIn(300);
        })
        .mouseover(() => {
            $("#arrowright").css("filter","brightness(0.7)");
        })
        .mouseout(() => {
            $("#arrowright").css("filter","brightness(1)");
        });
}

function openFullPhoto(src, title) {
    $("#fullPhotoDiv").fadeIn(300);
    $("#fullPhotoImg").attr('src', src);
    $("#fullPhotoImg").attr('title', title);

    $("#photosCount").text(`Фото ${titles.indexOf(title) + 1} из ${fotosPaths.length}`);
}

