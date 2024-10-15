document.querySelector("button").addEventListener("click", changeList);
list = document.querySelector("ul");
function changeList() {
    for(listitem in list) {
        document.querySelectorAll("li").innerHTML = "Dit is item ";
    }
}