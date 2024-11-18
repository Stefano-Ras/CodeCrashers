document.querySelector("button").addEventListener("click", function(){
    document.querySelector("p:nth-child(2n)").style.color = "salmon";
});

const container = document.querySelectorAll("p");
const oldNode = document.querySelectorAll("b");
const newNode = document.createElement("strong");

for(i = 0; i < container.length; i++) {
    container[i].replaceChild(newNode, oldNode[i]);
}

/* const blocks = document.querySelectorAll(".blok");

for(i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("dblclick", function () {
        this.style.background = "lightblue";
    });
} */