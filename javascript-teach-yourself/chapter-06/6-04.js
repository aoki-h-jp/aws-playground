// [1]
hello();
function hello () {
    console.log('hello');
}

// [2]
// 関数式による関数定義の場合は、定義の前に呼ぶとエラーが出る
hello_func();
const hello_func = function () {
    console.log('hello');
}