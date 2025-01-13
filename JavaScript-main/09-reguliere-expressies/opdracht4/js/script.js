document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    function invalidText(errorinput, labelinput) {
        console.warn(errorinput);
        const span = document.createElement("span");
        span.style.color = "red";
        let text = document.createTextNode(errorinput);
        span.appendChild(text);
        let label = document.querySelector(labelinput);
        label.appendChild(span);
    }
    let phoneNumber = document.getElementById("phone").value;
    const phoneRegex = /^(([+31 6 ]{6})|^([06]{2})([ |-]*))(\d{8}$)/;
    if(!phoneRegex.test(phoneNumber)) {
        invalidText("Invalid phone number!", ".phone-error");
    }
    let birthday = document.getElementById("birthday").value;
    const birthRegex = /^(\d{1,2} )(\d{1,2}|\w{3,12}$)/
    if(!birthRegex.test(birthday)) {
        invalidText("Invalid birthday!", ".birthday-error");
    }
    let address = document.getElementById("address").value;
    const addressRegex = /(\w \d{1,3})([ |-]*)(\w*)/;
    if(!addressRegex.test(address)) {
        invalidText("Invalid address!", ".address-error");
    }
    let url = document.getElementById("url").value;
    const urlRegex = /^([https:\/\/]{8}|[http:\/\/]{7})/;
    if(!urlRegex.test(url)) {
        invalidText("Invalid URL!", ".url-error");
    }
    
    let password = document.getElementById("password").value;
    const passwordRegex = /[A-Z]+[a-z]+[0-9]+[\W_]+/;
    if(!passwordRegex.test(password)) {
        invalidText("Invalid password!", ".password-error");
    }
});