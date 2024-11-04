let euro = document.querySelector("#euro").value;
let dollar = document.querySelector("#dollar").value;

document.querySelector("#toeuro").addEventListener("click", toEuro);
function toEuro() {
    let euro = document.querySelector("#euro");
    let dollar = document.querySelector("#dollar");
    euro.value = dollar.value * 0.92;
}

document.querySelector("#todollar").addEventListener("click", toDollar);
function toDollar() {
    let dollar = document.querySelector("#dollar");
    let euro = document.querySelector("#euro");
    dollar.value = euro.value * 1.09;
}