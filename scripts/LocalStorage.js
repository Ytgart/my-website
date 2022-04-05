var path = window.location.pathname;
var page = path.split("/").pop();

if (sessionStorage.getItem(page) == null) {
    sessionStorage.setItem(page, "1");
    setCookie(page, "1", "5");
} else {
    sessionStorage.setItem(page, (parseInt(sessionStorage.getItem(page)) + 1).toString());
    setCookie(page, (parseInt(getCookie(page)) + 1).toString(), "5");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
