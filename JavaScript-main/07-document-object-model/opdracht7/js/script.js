window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const getContent = document.querySelector(".element").value
        const content = document.createElement(getContent);
        const getText = document.querySelector(".text").value;
        const text = document.createTextNode(getText);
        content.appendChild(text);
        document.querySelector(".content").appendChild(content);
    });

    document.querySelector(".font").addEventListener("change", () => {
        let font = document.querySelector(".font").value;
        document.querySelector(".content").style.fontFamily = font;
    });

    document.querySelector(".background").addEventListener("change", () => {
        let background = document.querySelector(".background").value;
        document.querySelector(".content").style.background = background;
    });

    document.querySelector(".color").addEventListener("change", () => {
        let color = document.querySelector(".color").value;
        document.querySelector(".content").style.color = color;
    });

    document.querySelector(".fontsize").addEventListener("input", () => {
        let fontsize = document.querySelector(".fontsize").value;
        document.querySelector(".content").style.fontSize = fontsize + "px";
        console.log(fontsize);
    });
    
    document.querySelector(".delete").addEventListener("click", () => {
        const child = document.querySelector(".content > :last-child");
        const parent = document.querySelector(".content");
        parent.removeChild(child);
    });
});