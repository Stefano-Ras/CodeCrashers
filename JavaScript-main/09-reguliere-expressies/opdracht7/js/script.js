const text = document.querySelector("p");
const formula = text.innerHTML.match(/\b([A-Z]{2} \d{5})\b/g);

let i = 0
let content = '';
while(i < formula.length) {
    content += `<li>${formula[i]}</li>`;
    i++;
}

text.innerHTML += '<ul>' + content + '<ul>';