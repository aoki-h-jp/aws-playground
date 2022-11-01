// typeofについて
const obj23 = {
    foo: 123,
    bar: 'hi'
};

// typeof 変数名でその変数が持つ型を表す
// Tはobjと同じ型になった(型は型推論したものと同じ)
// 型推論を通して型を取り出せるという点でtypeofは便利
type T = typeof obj;
const obj24: T = {
    foo: -50,
    bar: ''
};
