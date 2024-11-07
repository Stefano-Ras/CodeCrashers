let euro = document.querySelector("#euro");
let dollar = document.querySelector("#dollar");

document.querySelector("#toeuro").addEventListener("click", toEuro);
function toEuro() {
    euro.value = Math.round((euro.value = dollar.value * 0.92) * 100) / 100;
}

document.querySelector("#todollar").addEventListener("click", toDollar);
function toDollar() {
    dollar.value = Math.round((dollar.value = euro.value * 1.09) * 100) / 100;
}