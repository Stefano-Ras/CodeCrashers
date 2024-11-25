document.querySelector("#open").addEventListener("click", () => {
    const open = window.open("", "_blank", "width=300,height=200");
    open.document.open();
    open.document.write(
        '<html><head><title>Welke dag is het?</title><link rel="stylesheet" type="text/css" href="css/style.css"></head>'
        + new Date() + '</body></html>'
    );
    open.document
    open.document.close();
    document.querySelector("#close").addEventListener("click", () => {
        if(confirm("Weet je het zeker>") == true) {
            open.window.close();
        }
    });
});