addEventListener("resize", () => {
    document.querySelector("#size-x").innerHTML = window.innerWidth;
    document.querySelector("#size-y").innerHTML = window.innerHeight;
});

addEventListener("scroll", () => {
    document.querySelector("#pos-x").innerHTML = window.scrollX;
    document.querySelector("#pos-y").innerHTML = window.scrollY;
});

addEventListener("load", () => {
    document.querySelector("#size-x").innerHTML = window.innerWidth;
    document.querySelector("#size-y").innerHTML = window.innerHeight;
});