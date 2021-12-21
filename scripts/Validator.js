window.onload = main;

function main() {
    let form = document.getElementById("form1");
    form.onsubmit = validate;
}

function validate() {
    let field1 = document.getElementById("fio");
    let field2 = document.getElementById("email");
    let phone = document.getElementById("phone");
    let radio1 = document.getElementById("1");
    let radio2 = document.getElementById("2");
    let questionField = document.getElementById("question2");

    if (field1.value.split(' ').length != 3) {
        alert("Пожалуйста введите правильные данные");
        field1.focus();
        return false;
    }
    if (field2 != null) {
        if (field2.value == "") {
            alert("Пожалуйста введите правильные данные");
            field2.focus();
            return false;
        }
    }
    if (phone != null) {
        if (!(phone.value.startsWith("+7") || phone.value.startsWith("+3")) ||
            phone.value.includes(' ') || !(phone.value.length >= 9 && phone.value.length <= 11) || !/^\d+$/.test(phone.value.slice(1))) {
            phone.focus();
            alert("Пожалуйста введите правильные данные");
            return false;
        }
    }
    if (!radio1.checked && !radio2.checked) {
        alert("Пожалуйста введите правильные данные");
        return false;
    }

    if (questionField != null) {
        let words = questionField.value.split(' ');
        var isWordDigit = false;

        words.forEach(element => {
            if (/^\d+$/.test(element)) {
                isWordDigit = true;
            }
        });

        if (isWordDigit == false) {
            questionField.focus();
            alert("Пожалуйста введите правильные данные");
            return false;
        }
    }
    return true;
}