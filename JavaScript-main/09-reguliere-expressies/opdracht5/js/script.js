let random = Math.floor(Math.random() * 6) + 1;
console.log(random);
try {
    if(random > 1) {
        throw "Helaas, je hebt de skill check niet gehaald!";
    }
} catch(err) {
    console.log(err);
}

const day = new Date();
let today = day.getDay();
try {
    if (today == 0 || today == 6) {
        throw "STOP! Het is weekend!";
    }
} catch(err) {
    console.warn(err);
}