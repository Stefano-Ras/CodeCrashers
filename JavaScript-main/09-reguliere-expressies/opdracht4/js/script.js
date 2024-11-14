window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let phoneNumber = document.getElementById("phone").value;
        const phoneRegex = /^(([+31 6 ]{6})|^([06]{2})([ |-]*))(\d{8}$)/;
        if(!phoneRegex.test(phoneNumber)) {
            console.warn("Invalid phone number!");
            const span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode("Invalid phone number!");
            span.appendChild(text);
            let label = document.querySelector(".phone-error");
            label.appendChild(span);
        }

        let birthday = document.getElementById("birthday").value;
        const birthRegex = /^(\d{1,2} )(\d{1,2}|\w{3,12}$)/
        if(!birthRegex.test(birthday)) {
            console.warn("Invalid birthday!");
            let span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode("Invalid birthday!");
            span.appendChild(text);
            let label = document.querySelector(".birthday-error");
            label.appendChild(span);
        }

        let address = document.getElementById("address").value;
        const addressRegex = /(\w \d{1,3})([ |-]*)(\w*)/;
        if(!addressRegex.test(address)) {
            console.warn("Invalid address!");
            let span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode("Invalid address!");
            span.appendChild(text);
            let label = document.querySelector(".address-error");
            label.appendChild(span);
        }

        let url = document.getElementById("url").value;
        const urlRegex = /^([https:\/\/]{8}|[http:\/\/]{7})/;
        if(!urlRegex.test(url)) {
            console.warn("Invalid URL!");
            let span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode("Invalid URL!");
            span.appendChild(text);
            let label = document.querySelector(".url-error");
            label.appendChild(span);
        }
        
        let password = document.getElementById("password").value;
        const passwordRegex = /[A-Z]+[a-z]+[0-9]+[\W_]+/;
        if(!passwordRegex.test(password)) {
            console.warn("Invalid password!");
            let span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode("Invalid password!");
            span.appendChild(text);
            let label = document.querySelector(".password-error");
            label.appendChild(span);
        }
    });
});