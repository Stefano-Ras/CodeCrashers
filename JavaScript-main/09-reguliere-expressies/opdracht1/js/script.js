let question = window.prompt();

const answer = /^[B-DF-HJ-NP-TV-Z]/;

if(answer.test(question)) {
    console.log("Deze string begint met een gekapitaliseerde medeklinker");
} else {
    console.log("Deze string begint NIET met een gekapitaliseerde medeklinker");
}