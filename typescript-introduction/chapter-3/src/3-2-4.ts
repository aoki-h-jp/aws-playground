// オブジェクトに対して型名を新規作成するときinterfaceも使える
// type文の方が汎用性が高いので普通は使わない
interface FooBarObj2 {
    foo: number;
    bar: string;
}
const obj19: FooBarObj2 = {
    foo: 0,
    bar: "string"
};