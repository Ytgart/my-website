$(() => {
    main1();
});

function main1() {
    $("input")
        .focusout(() => {
            validate();
        });

    $("#sendButton").prop("disabled", true);

    showPopOver($("#fio"), "ФИО должно состоять из трех слов");
    showPopOver($("#email"), "Email не должен быть пустым");
    showPopOver($("#phone"), "Телефон должен начинаться с +3 или +7 и содержать от 9 до 11 символов");
    showPopOver($("#date"), "Дата не должна быть пустой. Выберите дату в календаре");

    $("#sendButton")
        .click(() => {
            showModalWindow("Вы действительно хотите отправить форму?", () => {
                $("#form1").submit();
            });
        });
}

function validate() {
    let isValidateSuccessful = true;

    if ($("#fio").val().split(' ').length != 3) {
        $("#fio").css("borderColor", "red");
        isValidateSuccessful = false;
    } else {
        $("#fio").css("borderColor", "green");
    }

    if ($("#email") != null) {
        if ($("#email").val() == "") {
            $("#email").css("borderColor", "red");
            isValidateSuccessful = false;
        } else {
            $("#email").css("borderColor", "green");
        }
    }

    if ($("#phone") != null) {
        if (!($("#phone").val().startsWith("+7") || $("#phone").val().startsWith("+3")) ||
            $("#phone").val().includes(' ') || !($("#phone").val().length >= 9 && $("#phone").val().length <= 12) || !/^\d+$/.test($("#phone").val().slice(1))) {
            $("#phone").css("borderColor", "red");
            isValidateSuccessful = false;
        } else {
            $("#phone").css("borderColor", "green");
        }
    }

    if ($("#date") != null) {
        if ($("#date").val() == "") {
            $("#date").css("borderColor", "red");
            isValidateSuccessful = false;
        } else {
            $("#date").css("borderColor", "green");
        }
    }

    console.log(isValidateSuccessful);

    if (isValidateSuccessful) {
        $("#sendButton").prop("disabled", false);
    } else {
        $("#sendButton").prop("disabled", true);
    }

    return isValidateSuccessful;
}

function showPopOver(element, text) {
    element
        .mouseover(() => {
            $("<div></div>")
                .addClass("popover")
                .append(
                    $("<h3></h3>")
                        .text(text)
                )
                .insertAfter(element)
                .fadeIn(300);
        })
        .mouseout(() => {
            element.next("div")
                .fadeOut(300, () => {
                    element.nextAll(".popover").remove();
                });
        });
}

function showModalWindow(text, callback) {
    $("<div></div>")
        .addClass("modal")
        .append(
            $("<h3></h3>")
                .text(text)
        )
        .append(
            $("<input></input>")
                .attr("type", "button")
                .val("Да")
                .click(() => {
                    $(".modal").prevAll().css("filter", "blur(0px)")
                    $(".modal").remove();
                    callback();
                })
        )
        .append(
            $("<input></input>")
                .attr("type", "button")
                .val("Нет")
                .click(() => {
                    $(".modal").prevAll().css("filter", "blur(0px)")
                    $(".modal").remove();
                })
        )
        .appendTo($("body"))
        .fadeIn(300)
        .prevAll()
        .css("filter", "blur(5px)");
}