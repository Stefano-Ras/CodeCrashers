document.getElementById("leave").addEventListener('click', (e) => {
    setTimeout(() => {
        location.assign("https://youtu.be/kTp2tYKmftE?t=31");
     }, 4500)
});

document.getElementById("background").addEventListener('click', (e) => {
    setTimeout(() => {
        document.querySelector("body").style.background = "dodgerblue";
     }, 3000)
});

document.getElementById("addcontent").addEventListener('click', (e) => {
    setTimeout(() => {
        const addParagraph = document.createElement("p");
        const addText = document.createTextNode("This is new text!");
        addParagraph.appendChild(addText);
        const element = document.querySelector("body");
        element.appendChild(addParagraph);
    }, 2000)
    setTimeout(() => {
        const addParagraph = document.createElement("p");
        const addText = document.createTextNode("This is more new text!");
        addParagraph.appendChild(addText);
        const element = document.querySelector("body");
        element.appendChild(addParagraph);
    }, 4000)
    setTimeout(() => {
        const addParagraph = document.createElement("p");
        const addText = document.createTextNode("This is even more new text!");
        addParagraph.appendChild(addText);
        const element = document.querySelector("body");
        element.appendChild(addParagraph);
    }, 6000)
});

function stop() {
    clearTimeout();
}
document.getElementById("stop").addEventListener("click", stop);