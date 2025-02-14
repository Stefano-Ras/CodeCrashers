const light = document.getElementById("light")

light.addEventListener("click", lightButton);

const neutral = document.getElementById("neutral")

neutral.addEventListener("click", neutralButton);

const dark = document.getElementById("dark")

dark.addEventListener("click", darkButton);

function lightButton() {
    document.body.style.backgroundColor = "white";
}

function neutralButton() {
    document.body.style.backgroundColor = "grey";
}

function darkButton() {
    document.body.style.backgroundColor = "black";
}