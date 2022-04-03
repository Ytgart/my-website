window.onload = main;

function main() {
    let fieldsToValidate = [
        document.getElementById("fio"),
        document.getElementById("email"),
        document.getElementById("phone"),
        document.getElementById("1"),
        document.getElementById("2"),
        document.getElementById("date")
    ]

    fieldsToValidate[0].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });
    fieldsToValidate[1].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });
    fieldsToValidate[2].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });
    fieldsToValidate[3].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });
    fieldsToValidate[4].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });
    fieldsToValidate[5].addEventListener("focusout", () => {
        validate(fieldsToValidate);
    });

    let button = document.getElementById("sendButton");
    button.disabled = true;
}

function validate(fields) {
    let isValidateSuccessful = true;

    if (fields[0].value.split(' ').length != 3) {
        fields[0].style.borderColor = "red";
        document.getElementById("fioHint").style.display = "block";

        isValidateSuccessful = false;
    } else {
        fields[0].style.borderColor = "green";
        document.getElementById("fioHint").style.display = "none";
    }

    if (fields[1] != null) {
        if (fields[1].value == "") {
            fields[1].style.borderColor = "red";
            isValidateSuccessful = false;
            document.getElementById("emailHint").style.display = "block";
        } else {
            fields[1].style.borderColor = "green";
            document.getElementById("emailHint").style.display = "none";
        }
    }

    if (fields[2] != null) {
        if (!(fields[2].value.startsWith("+7") || fields[2].value.startsWith("+3")) ||
            fields[2].value.includes(' ') || !(fields[2].value.length >= 9 && fields[2].value.length <= 12) || !/^\d+$/.test(phone.value.slice(1))) {
            fields[2].style.borderColor = "red";
            isValidateSuccessful = false;
            document.getElementById("phoneHint").style.display = "block";
        } else {
            fields[2].style.borderColor = "green";
            document.getElementById("phoneHint").style.display = "none";
        }
    }

    if (!fields[3].checked && !fields[4].checked) {
        isValidateSuccessful = false;
    }

    if (fields[5] != null) {
        if (fields[5].value == "") {
            fields[5].style.borderColor = "red";
            isValidateSuccessful = false;
            document.getElementById("dateHint").style.display = "block";
        } else {
            fields[5].style.borderColor = "green";
            document.getElementById("dateHint").style.display = "none";
        }
    }

    console.log(isValidateSuccessful);

    let button = document.getElementById("sendButton");
    button.disabled = !isValidateSuccessful;

    return isValidateSuccessful;
}