document.querySelector("button").addEventListener("click", changeList);
function changeList() {
    const list = document.querySelectorAll("li");
    for(let i = 0; i < list.length; i++) {
        if(i === 5) {
            continue;
        }
        x = i + 1
        list[i].innerHTML = "Dit is item " + x;
    }
}