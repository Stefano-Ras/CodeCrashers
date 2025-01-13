window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        function invalidText(errorinput, labelinput) {
            const span = document.createElement("span");
            span.style.color = "red";
            let text = document.createTextNode(errorinput);
            span.appendChild(text);
            let label = document.querySelector(labelinput);
            label.appendChild(span);
            console.warn(errorinput);
        }
        let phoneNumber = document.getElementById("phone").value;
        const phoneRegex = /^(([+31 6 ]{6})|^([06]{2})([ |-]*))(\d{8}$)/;
        try{
            if(!phoneRegex.test(phoneNumber)) {
                throw "Invalid phone number!";
            }
        } catch(err) {
            invalidText(err, ".phone-error");
        }

        let birthday = document.getElementById("birthday").value;
        const birthRegex = /^(\d{1,2} )(\d{1,2}|\w{3,12}$)/
        try{
            if(!birthRegex.test(birthday)) {
                throw "Invalid birthday!";
            }
        } catch(err) {
            invalidText(err, ".birthday-error");
        }

        let address = document.getElementById("address").value;
        const addressRegex = /(\w \d{1,3})([ |-]*)(\w*)/;
        try {
            if(!addressRegex.test(address)) {
                throw "Invalid address";
            }
        } catch(err) {
            invalidText(err, ".address-error");
        }

        let url = document.getElementById("url").value;
        const urlRegex = /^([https:\/\/]{8}|[http:\/\/]{7})/;
        try {
            if(!urlRegex.test(url)) {
                throw "Invalid URL!";
            }
        } catch(err) {
            invalidText(err, ".url-error");
        }
        
        let password = document.getElementById("password").value;
        const passwordRegex = /[A-Z]+[a-z]+[0-9]+[\W_]+/;
        try {
            if(!passwordRegex.test(password)) {
                throw "Invalid password!";
            }
        } catch(err) {
            invalidText(err, ".password-error");
        }
    });
});