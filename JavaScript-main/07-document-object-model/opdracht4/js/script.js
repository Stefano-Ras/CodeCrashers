const bold = document.querySelectorAll("b");
const strong = document.createElement("strong");
const section = document.querySelector("section");
document.querySelector("button").addEventListener("click", function(){
    section.replaceChild(bold, strong);
    document.querySelector("p:nth-of-child(2n)").style.color = "maroon";
});
