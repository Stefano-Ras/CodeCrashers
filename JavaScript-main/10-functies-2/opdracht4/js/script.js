//4.1
const numbers = [];

for(let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(numbers);

//4.2
const isEven = number => {
    if(number % 2 == 0) {
        return "Even";
    } else {
        return "Uneven";
    }
}

console.log(isEven(10));
console.log(isEven(15));

//4.3
const filterNumbers = numbers.filter(numbers => numbers % 2 == 0);
const evenNumbers = filterNumbers;

console.log(evenNumbers);

//4.4
const calculateEven = evenNumbers.reduce((total, value) => total + value);

console.log("Even sum: " + calculateEven);

const calculateUneven = numbers.reduce((total, value) => total + value);

console.log("Uneven sum: " + calculateUneven);