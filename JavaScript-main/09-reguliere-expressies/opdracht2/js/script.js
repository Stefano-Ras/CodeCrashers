const phone = /^(\+31 6 |06)(-| |)(\d{8})/;
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let input = document.querySelector(".phone").value;
        console.log(input);
        if(!phone.test(input)) {
            console.warn("Invalid phone number");
        }
    });
});