let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let admin = document.getElementById('admin');
let basic = document.getElementById('basic');
let selamat = document.getElementById('selamat');
let login = document.getElementById('login')
let daftar = document.getElementById('daftar')


selamat.style.display = "none"
admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none"

function onLogin() {
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    localStorage.setItem("username", usernameInput.value);
    logoutButton.style.display = "block"
    selamat.style.display = "block"
    login.style.display = "none"
    daftar.style.display = "none"


// pas login
if (usernameInput.value == "admin" && passwordInput.value == "admin123") {

    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    loginButton.style.display = "none"

    localStorage.setItem("role", "admin");

    admin.style.display = "block";
    basic.style.display = "none";
} else {
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    loginButton.style.display = "none"

    localStorage.setItem("role", "basic");

    basic.style.display = "block";
    admin.style.display = "none";
}
}


if (localStorage.getItem('username')) {
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    login.style.display = "none"
    daftar.style.display = "none"

    loginButton.style.display = "none"
    logoutButton.style.display = "block"
    selamat.style.display = "block"

    if (localStorage.getItem('role') == "admin") {
        basic.style.display = "none";
        admin.style.display = "block";
    } else {
        admin.style.display = "none";
        basic.style.display = "block";

    }
}

function onLogout() {
    localStorage.clear();
    location.reload();

}