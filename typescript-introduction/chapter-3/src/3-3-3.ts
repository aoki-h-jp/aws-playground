type User10 = {
    name: string;
    age: number;
}

// これはエラーになる
// なぜならUser10にtelNumberはないから
// const u: User10 = {
//     name: 'uhyo',
//     age: 26,
//     telNumber: '9999999999'
// }

// これはエラーにならない
// なぜなら変数uにobj27を入れているから
// この場合User10はobj27の部分型となる (obj27のtelNumberが他の用途で使われるかもしれないので、このケースではエラーが出ない)
const obj27 = {
    name: 'uhyo',
    age: 26,
    telNumber: '99999999999'
};

const u: User10 = obj27;
