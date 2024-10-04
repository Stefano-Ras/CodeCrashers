window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let phoneNumber = document.getElementById("phone").value;
        const phoneRegex = /^(([+31 6 ]{6})|^([06]{2})([ |-]*))(\d{8}$)/;
        if(!phoneRegex.test(phoneNumber)) {
            console.warn("Invalid phone number!");
            let para = document.createElement("p");
            let text = document.createTextNode("Invalid phone number!");
            para.appendChild(text);
            let label = document.querySelector("#phone");
            label.appendChild(para);
        }

        let birthday = document.getElementById("birthday").value;
        const birthRegex = /^(\d{1,2} )(\d{1,2}|\w{3,12}$)/
        if(!birthRegex.test(birthday)) {
            console.warn("Invalid birthday!");
        }

        let address = document.getElementById("address").value;
        const addressRegex = /(\w \d{1,3})([ |-]*)(\w*)/;
        if(!addressRegex.test(address)) {
            console.warn("Invalid address!");
        }

        let link = document.getElementById("link").value;
        const linkRegex = /^([https:\/\/]{8}|[http:\/\/]{7})/;
        if(!linkRegex.test(link)) {
            console.warn("Invalid URL!");
        }
        
        let password = document.getElementById("password").value;
        const passwordRegex = /[A-Z]+[a-z]+[0-9]+[\W_]+/;
        if(!passwordRegex.test(password)) {
            console.warn("Invalid password!");
        }
    });
});