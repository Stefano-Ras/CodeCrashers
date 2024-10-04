function tellTime() {
    const time = new Date();
    document.getElementById("text").innerHTML = time;
}

const time = document.getElementById("time");
time.addEventListener("click", tellTime);

function rollDie() {
    const d20 = Math.floor(Math.random() * 20) + 1;
    document.getElementById("text").innerHTML = d20;
}

const d20 = document.getElementById("d20");
d20.addEventListener("click", rollDie);

function watchFilm() {
    const dvdList = ["The Lord of the Rings", "The Lord of the Rings: The Two Towers", "The Lord of the Rings: Return of the King", "Terminator 2", "Any 80's low-budget kung fu movie"];
    const dvd = dvdList.join(" - ");
    document.getElementById("text").innerHTML = dvd;
}

const dvd = document.getElementById("dvd");
dvd.addEventListener("click", watchFilm);

function enterIdentity() {
    let you = prompt();
    document.querySelector("body").id = "you";
    document.getElementById("text").innerHTML = "Are you?";
    function revertScreen() {
        document.querySelector("body").id = "";
        document.getElementById("text").innerHTML = "Hello " + you + ", good to see you!";
    }
    const wait = setTimeout(revertScreen, 350);
}

const you = document.getElementById("existentialcrisis");
you.addEventListener("click", enterIdentity);