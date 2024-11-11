const blocks = document.querySelectorAll(".blok");

for(i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("dblclick", function () {
        this.style.background = "lightblue";
    });
}