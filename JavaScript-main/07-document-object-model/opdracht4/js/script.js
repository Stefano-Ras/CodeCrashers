document.querySelector("button").addEventListener("click", function(){
    document.querySelector("p:nth-child(2n)").style.color = "salmon";
});

const topNode = document.querySelectorAll("p");
const oldNode = document.querySelectorAll("b");
const newNode = document.createElement("strong");

console.log(topNode);
console.log(oldNode);
console.log(newNode);