document.querySelector("#open").addEventListener("click", () => {
    let window = window.open("", "_blank", "width=300,height=200");
    window.document.write(new Date());
});