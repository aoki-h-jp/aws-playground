// 例
// 各行の末尾にセミコロンを追加したいという状況
// 基本的には1文字目にカーソルがあるとする
var foo = 1
var bar = 'a'
var foobar = foo + bar

// $a;<Esc>
var foo = 1;
var bar = 'a'
var foobar = foo + bar

// $a;<Esc>j$.j$.
var foo = 1;
var bar = 'a';
var foobar = foo + bar;

// j$.j$.のj$がダルいので改善したい
// 「A」=「$a」なのでもう少しスマートに同じことができる
// A;<Esc>j.j.
var foo = 1;
var bar = 'a';
var foobar = foo + bar;
