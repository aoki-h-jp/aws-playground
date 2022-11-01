// プロパティ名には文字列リテラルも使える
const obj3 = {
    "foo": 123,
    'foo bar': -500,
    '↑↓↑↓': '',
}

// fooはそのままでもいいが、foo barや↑↓↑↓は[""]でアクセスする
// 123
console.log(obj3.foo)
// -500
console.log(obj3["foo bar"])

// 数値リテラルも可能
const obj4 = {
    1: 'one',
    2.05: 'two point o five',
}

// 以下のようにアクセス
// one
console.log(obj4[1])
// two point o five
console.log(obj4["2.05"])

// 動的なプロパティ名は[式]で指定する
const propName = "foo";
const obj5 = {
    [propName]: 123
};

// 123
console.log(obj5.foo);