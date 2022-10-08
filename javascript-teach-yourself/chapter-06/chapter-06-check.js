// [4]
setTimeout(name => console.log(`こんにちは、${name}`), 2000, 'a');
function add (val1, val2) {
    return val1 + val2;
}
function minus (val1, val2) {
    return val1 - val2;
}
function calcAndDisp (callback1, callback2, val1, val2) {
    let res = callback1(val1, val2);
    return callback2(res);
}
calcAndDisp(add, console.log, 3, 2);
calcAndDisp(minus, alert, 3, 2);

// [5]
let fn1 = (num1, num2) => num1 + num2;
let fn2 = num => num * 2;
let fn3 = () => console.log('Hello World');
let fn4 = name => {
    console.log('Hello World');
    console.log(`Hello ${name}!`);
}
let fn5 = () => {name: "独習太郎"};

function hello () {
    console.log('こんにちは');
}
const returnVal1 = hello();

const double = function (num) {
    if (typeof num !== 'number') {
        console.log('引数が不正なデータ型のため、関数の処理を終了します');
        return;
    }
    return num * 2;
}
const returnVal2 = double(10);
const returnVal3 = double("100");

console.log(returnVal1);
console.log(returnVal2);
console.log(returnVal3);