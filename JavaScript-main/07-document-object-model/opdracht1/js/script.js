document.querySelector("button").addEventListener("click", displayAlert);

let title = document.querySelector("title").innerHTML;
let action = document.querySelector("form").action;
let css = document.querySelector("link").href;
let pass = document.querySelector("input[type='password']");

function displayAlert() {
    window.alert(title + " - " + action + " - " + css + " - " + pass.value);
}

document.querySelector("button:nth-of-type(2n)").addEventListener("click", changeValues);

function changeValues() {
    document.querySelector("a").innerHTML = "Ga naar Bing.";
    document.querySelector("a").href = "http://www.bing.com";
    document.querySelector("img").src = "images/singham-2.jpg";
}

document.querySelector("button:nth-of-type(3n)").addEventListener("click", changeStyle);

function changeStyle() {
    document.querySelector("body").style.background = "coral";
    document.querySelector("body").style.fontFamily = "Calibri";
    document.querySelector("img").style.height = "200%";
    document.querySelector("img").style.width = "200%";
    document.querySelector("section").style.width = "100%";
}