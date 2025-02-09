const phone = /^(\+31 6 |06)(-| |)(\d{8})/;
const warning = document.querySelector(".warning");
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let input = document.querySelector(".phone").value;
        if(!phone.test(input)) {
            console.warn("Invalid phone number!");
            warning.innerHTML = "Invalid phone number!";
            warning.style.color = "red";
        }
    });
});