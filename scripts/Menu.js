window.addEventListener("load", main, true);

function main() {
    let dropDownMenu = document.getElementById("myDropdownContent");
    let dropDownLi = document.getElementById("myDropDown");
    let navigationLinks = document.querySelectorAll('nav a');

    navigationLinks.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.background = "#777777"
        })

        element.addEventListener('mouseout', () => {
            element.style.background = "#3b3b3b"
        })
    })

    dropDownLi.addEventListener('mouseover', () => {
        dropDownMenu.style.display = "flow-root"
    })

    dropDownLi.addEventListener('mouseout', () => {
        dropDownMenu.style.display = "none"
    })
}
