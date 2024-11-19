const math = function() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(!typeof arguments[i] === 'number') {
            console.log("Error");
        } else {
            sum += arguments[i] ** 2;
        }
    }
    console.log(sum);
    return sum;
}

math(1, 2, 3);
math(4, 5, 6);