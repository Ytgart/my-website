$(() => {
    setupMenu();
});

function setupMenu() {
    let dropDownMenu = $("#myDropdownContent");
    let dropDownLi = $("#myDropDown");

    $("nav a")
        .mouseover((event) => {
            $(event.target).css("background", "#777777");
        })
        .mouseout((event) => {
            $(event.target).css("background", "#3b3b3b");
        });

    dropDownLi
        .mouseover(() => {
            dropDownMenu.css("display", "flow-root");
        })
        .mouseout(() => {
            dropDownMenu.css("display", "none");
        });
}
