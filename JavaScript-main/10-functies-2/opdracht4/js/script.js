//4.1
const numbers = [];

for(let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(numbers);

//4.2
const isEven = number => {
    if(number % 2 == 0) {
        return "true";
    } else {
        return "false";
    }
}

console.log(isEven(10));
console.log(isEven(15));
console.log(numbers.filter(isEven));

//4.3
const evenNumbers = numbers.filter(isEven);

console.log("4.3: " + evenNumbers);
console.log("4.3: " + numbers);

//4.4
const calculateEven = evenNumbers.reduce((total, value) => total + value);

console.log("Even sum: " + calculateEven);

const calculateUneven = numbers.reduce((total, value) => total + value);

console.log("Total sum: " + calculateUneven);