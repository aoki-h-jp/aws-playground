// 例
// 文字列の連結にスペースを入れたい
// 基本的には1文字にカーソルがあるものとする
var foo = "method("+argument1+","+argument2+")";

// +を消した後に _+_ (_はスペース)と入力すれば空白ができる
// この場合、「;」=「f+」
// f+s_+_<Esc>;.;.;.
var foo = "method(" + argument1 + "," + argument2 + ")";
