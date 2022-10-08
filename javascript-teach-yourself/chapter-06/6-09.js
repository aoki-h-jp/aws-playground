function plus (a, b) {
    return a + b;
}

function minus (a, b) {
    return a - b;
}

function calc (val1, val2, callback) {
    return callback(val1, val2);
}

console.log(calc(1, 2, plus));
console.log(calc(10, 2, plus));
console.log(calc(10, 2, minus));