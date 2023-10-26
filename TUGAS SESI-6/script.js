let body = document.body
let info = document.getElementById("info");
let home = document.getElementById("home");
let mode = document.getElementById("mode");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

const blueLimit = 5;
let blueCounter = 0;
let blueRemainingLeft;

const greenLimit = 5;
let greenCounter = 0;
let greenRemainingLeft;

function darkMode() {
    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;
    if (darkRemainingLeft >= 0) {
        body.classList.toggle("dark");
        info.textContent = `DARK mode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}x`;
        if (body.classList.contains("dark")) {
            mode.textContent = "DARK OFF";
            body.classList.remove("green");
            body.classList.remove("blue");
            green.textContent = "GREEN ON";
            blue.textContent = "BLUE ON";
            body.style.removeProperty("animation");
        } else {
            mode.textContent = "DARK ON";
        }
        if (darkRemainingLeft == 0) {
            info.textContent = `DARK mode dipakai ${darkCounter}x, tidak tersisa`;
        }
    } else {
        info.textContent = "FITUR DARK MODE TELAH HABIS";
        mode.style.display = "none";
        home.textContent = "RESET";
        body.style.animation = "bgBlingBling .8s infinite";
        return;
    }
}

function blueMode() {
    blueCounter += 1;
    blueRemainingLeft = blueLimit - blueCounter;
    if (blueRemainingLeft >= 0) {
        body.classList.toggle("blue");
        info.textContent = `BLUE mode dipakai ${blueCounter}x, tersisa ${blueRemainingLeft}x`;
        if (body.classList.contains("blue")) {
            blue.textContent = "BLUE OFF";
            body.classList.remove("dark");
            body.classList.remove("green");
            mode.textContent = "DARK ON";
            green.textContent = "GREEN ON";
            body.style.removeProperty("animation");
        } else {
            blue.textContent = "BLUE ON";
        }
        if (blueRemainingLeft == 0) {
            info.textContent = `BLUE mode dipakai ${blueCounter}x, tidak tersisa`;
        }
    } else {
        info.textContent = "FITUR BLUE MODE TELAH HABIS";
        blue.style.display = "none";
        home.textContent = "RESET";
        body.style.animation = "bgBlingBling .8s infinite";
        return;
    }
}

function greenMode() {
    greenCounter += 1;
    greenRemainingLeft = greenLimit - greenCounter;
    if (greenRemainingLeft >= 0) {
        body.classList.toggle("green");
        info.textContent = `GREEN mode dipakai ${greenCounter}x, tersisa ${greenRemainingLeft}x`;
        if (body.classList.contains("green")) {
            green.textContent = "GREEN OFF";
            body.classList.remove("dark");
            body.classList.remove("blue");
            mode.textContent = "DARK ON";
            blue.textContent = "BLUE ON";
            body.style.removeProperty("animation");
        } else {
            green.textContent = "GREEN ON";
        }
        if (greenRemainingLeft == 0) {
            info.textContent = `GREEN mode dipakai ${greenCounter}x, tidak tersisa`;
        }
    } else {
        info.textContent = "FITUR GREEN MODE TELAH HABIS";
        green.style.display = "none";
        home.textContent = "RESET";
        body.style.animation = "bgBlingBling .8s infinite";
        return;
    }
}

function reRender() {
    location.reload();

}
