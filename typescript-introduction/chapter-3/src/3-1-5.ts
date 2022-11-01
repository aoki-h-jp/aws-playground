const obj6 = {
    bar: 456,
    baz: 789
};

// スプレッド演算子を使うと他のオブジェクトからプロパティをコピーできる
// コピー = deepcopy
const obj7 = {
    foo: 123,
    ...obj6
}

// { foo: 123, bar: 456, baz: 789 }
console.log(obj7);

// プロパティ名が同じ場合は後に書いたほうが優先される
// 順を逆にするとエラーになる（どうせobj7と同じものができるので不要だから）
const obj8 = {
    ...obj7,
    foo: -9999
}

// -9999
console.log(obj8.foo);

// スプレッド演算子は続けて使うこともできる
const obj9 = {
    a: 1,
    b: 2,
    c: 3
}

const obj10 = {
    b: 5,
    d: 9,
    e: 10
}

// 同じプロパティ名であるbは後の方が優先される
const obj11 = {
    ...obj9,
    ...obj10
}

// { a: 1, b: 5, c: 3, d: 9, e: 10 }
console.log(obj11);
