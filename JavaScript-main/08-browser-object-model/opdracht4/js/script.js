function leaveSite() {
    setTimeout(location.assign("https://youtu.be/kTp2tYKmftE?t=31"), 450);
}
document.getElementById("leave").addEventListener("click", leaveSite);

function changeBackground(){
    document.querySelector("body").style.background = "dodgerblue";
}
document.getElementById("background").addEventListener("click", changeBackground);

function addContent() {
    const addParagraph = document.createElement("p");
    const addText = document.createTextNode("This is new text!");
    addParagraph.appendChild(addText);
    const element = document.querySelector("body");
    element.appendChild(addParagraph);
}
document.getElementById("addcontent").addEventListener("click", addContent);

function stop() {
    clearTimeout(leave);
}
document.getElementById("stop").addEventListener("click", stop);