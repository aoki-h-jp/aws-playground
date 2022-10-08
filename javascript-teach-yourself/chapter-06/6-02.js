// [1]
function noArgumentFunc () {
    console.log('引数のない関数です。');
}
noArgumentFunc();

// [2]
function multiply (num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));
// 3つ目の引数が無視されることを確認する
console.log(multiply(2, 3, 4));

// [3]
function twoArgumentFunc (arg1, arg2) {
    console.log("arg1:", arg1);
    console.log("arg2:", arg2);
}
twoArgumentFunc(1, 2);
// 引数を渡さないときにundefinedになることを確認する
twoArgumentFunc(1);
twoArgumentFunc();