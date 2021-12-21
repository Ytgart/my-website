let hrefs = ["music", "hobby", "books", "films"];

let ul = document.getElementById("content").appendChild(document.createElement("ul"));

function drawList(hrefs, ...titles){
    for (let i = 0; i < titles.length; i++) {
        let newLi = document.createElement("li");
        newLi.appendChild(document.createElement("h3")).innerHTML = `<a href="#${hrefs[i]}">${titles[i]}</a>`;
        ul.appendChild(newLi);
    }
}

window.onload = drawList(hrefs, "Любимая музыка", "Мое хобби", "Любимые книги", "Любимые фильмы");