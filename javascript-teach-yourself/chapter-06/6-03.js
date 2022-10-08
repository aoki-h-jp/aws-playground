// [1]
function hello () {
    return 'Hello world';
}
console.log(hello());

// [2]
function hello2 (personName) {
    if (typeof personName != 'string') {
        console.log('引数に文字列を渡してください。');
        return;
    }
    console.log(`こんにちは、${personName}`);
}
hello2(1);
hello2('taro');

// [3]
function fn1 () {
    const val = 1 + 1;
    console.log(val);
}
// コンソールに2が出てくる
fn1();

function fn2 () {
    console.log(7 % 3);
    return;
}
// コンソールに1が出てくる
fn2();