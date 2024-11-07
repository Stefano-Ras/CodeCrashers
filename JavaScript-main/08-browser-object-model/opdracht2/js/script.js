document.querySelector("#open").addEventListener("click", () => {
    window.open("", "_blank", "width=300,height=200");
    document.write(new Date());
    document.querySelector("#close").addEventListener("click", () => {
        window.close();
    });
});