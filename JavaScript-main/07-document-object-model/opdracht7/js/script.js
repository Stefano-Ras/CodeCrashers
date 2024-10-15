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

    document.querySelector(".font").addEventListener("click", onChange);
    function onChange() {
        
    }
});