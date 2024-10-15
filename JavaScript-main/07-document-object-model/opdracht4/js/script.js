let bold = document.querySelectorAll("b");
let strong = document.createElement("strong");
document.replaceChild(bold, strong.childNodes[0]);
document.querySelector("p:nth-of-child(2n)").style.color = "maroon";