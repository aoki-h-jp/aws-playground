// FooBarBazはFooBarの部分型
// FooBarBazはFooBarの上位互換と言える
type FooBar = {
    foo: string;
    bar: number;
}

type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
}

const obj25: FooBarBaz = {
    foo: 'hi',
    bar: 1,
    baz: false
}

const obj26: FooBar = obj25;
