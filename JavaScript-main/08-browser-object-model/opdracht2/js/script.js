document.querySelector("#open").addEventListener("click", () => {
    const open = window.open("", "_blank", "width=300,height=200");
    open.document.open();
    open.document.write(new Date());
    open.document.close();
    document.querySelector("#close").addEventListener("click", () => {
        open.window.close();
    });
});