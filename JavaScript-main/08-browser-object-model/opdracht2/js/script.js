document.querySelector("#open").addEventListener("click", () => {
    const window = window.open("", "_blank", "width=300,height=200");
    window.document.write(new Date());
});