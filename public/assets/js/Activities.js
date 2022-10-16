$(() => {
    let hrefs = ["music", "hobby", "books", "films"];

    drawList(hrefs, "Любимая музыка", "Мое хобби", "Любимые книги", "Любимые фильмы");
});

function drawList(hrefs, ...titles){
    $("#content").append("<ul></ul>");
    let ul = $("#content").children()

    for (let i = 0; i < titles.length; i++) {
        let newLi = $("<li></li>");
        newLi.append($(`<h3><a href="#${hrefs[i]}">${titles[i]}</a></h3>`));

        ul.append(newLi);
    }
}