// オプショナルなプロパティの宣言
// bazはあってもなくてもいい
type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
}

// どちらもOK
const obj20: MyObj = {foo: false, bar: true}
const obj21: MyObj = {foo: true, bar: false, baz: 1234}

// undefined
console.log(obj20.baz);
// 1234
console.log(obj21.baz);