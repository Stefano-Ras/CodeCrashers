const bold = document.querySelectorAll("b");
console.log(bold);
const strong = document.createElement("strong");
document.querySelector("button").addEventListener("click", function(){
    this.parentNode.replaceChild(bold, strong);
    document.querySelector("p:nth-of-child(2n)").style.color = "maroon";
});