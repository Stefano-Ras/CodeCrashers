document.querySelector("button").addEventListener("click", function(){
    document.querySelector("p:nth-child(2n)").style.color = "salmon";
});

const container = document.querySelectorAll("p");
const oldNode = document.querySelector("b");

/* for(i = 0; i < container.length; i++) {
    const newNode = document.createElement("strong");
    container.replaceChild(newNode, oldNode);
} */

/* for(i = 0; i < oldNode.length; i++) {
    container.replaceChild(newNode, oldNode[i]);
} */

for(const b of container) {
    const newNode = document.createElement("strong");
    container.replaceChild(newNode, oldNode);
}

/*const blocks = document.querySelectorAll(".blok");

for(i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("dblclick", function () {
        this.style.background = "lightblue";
    });
}*/