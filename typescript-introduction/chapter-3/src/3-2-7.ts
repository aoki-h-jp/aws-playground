// 読み取り専用オブジェクトについて
type MyObj2 = {
    readonly foo: number;
}
const obj22: MyObj2 = {foo: 123};

// fooは読み取り専用なので以下はエラーになる
// obj22.foo = 0;

