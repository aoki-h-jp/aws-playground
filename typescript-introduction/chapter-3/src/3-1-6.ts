const foo = {num: 1234};
// fooという変数が参照するオブジェクトとbarという変数が参照するオブジェクトが同じになった
// shallowなコピーが行われた
// よってbarとfooは同じ
const bar = foo;
// 1234
console.log(bar.num);
bar.num = 0;
// 0
console.log(foo.num);

// deepcopyをすれば違うオブジェクトになる
// ただしスプレッド演算子でそれをやるとネストされた奥のオブジェクトはshallowなコピーになるので注意
// ネストまで全部コピーする標準的な方法は今のところない（ライブラリなどを使う）
const foo2 = {num: 1234};
const bar2 = {...foo2};
// 1234
console.log(bar2.num);
bar2.num = 0
// 1234
console.log(foo2.num);

// 同じことをするならシンプルにこれでいい
const foo3 = {num: 1234};
const bar3 = {num: 1234};

// オブジェクトが同じかどうかは===を使って判定する
// true
console.log(foo === bar);
// false
console.log(foo2 === bar2);
// false
console.log(foo3 === bar3);
