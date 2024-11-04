document.querySelector(".open").addEventListener("click", () => {
    window.open("https://www.youtube.com", "_blank", "width=400,height=300");
});

document.querySelector(".close").addEventListener("click", () => {
    window.close(window);
});

document.querySelector(".reload").addEventListener("click", () => {
    location.reload();
});

document.querySelector(".back").addEventListener("click", () => {
    history.back();
});

document.querySelector(".forward").addEventListener("click", () => {
    history.forward();
});

document.querySelector(".info").addEventListener("click", () => {
    console.log("Breedte: " + window.innerWidth + " Hoogte: " + window.innerHeight);
});