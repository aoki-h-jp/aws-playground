const obj14: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    bar: 'Hello, world!'
}

// 違う型の値を入れようとするとエラーになる
// const obj15: {
//     foo: number;
//     bar: string;
// } = {
//     foo: 123,
//     bar: true
// }

// プロパティが足りないとエラーになる
// const obj16: {
//     foo: number;
//     bar: string;
// } = {
//     foo: 123,
// }

// 型で宣言されていないプロパティにアクセスしようとするとエラーになる
// const obj17: {
//     foo: number;
//     bar: string;
// } = {
//     foo: 123,
//     bar: 'Hello, world!'
// }
// console.log(obj17.hoge);

// このように型注釈をつけると厳しく保証してくれる