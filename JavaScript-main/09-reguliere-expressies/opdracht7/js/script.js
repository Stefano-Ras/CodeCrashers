let text = document.querySelector("p");
const formula = text.innerHTML.match(/\b([A-Z]{2} \d{5})\b/g);


let i = 0
while(i < formula.length) {
    text.innerHTML = text.innerHTML + "<li>" + formula[i] + "</li>";
    i++
}