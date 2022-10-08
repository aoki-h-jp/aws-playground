## chapter-06

### exercise 6-01

- 6-01.htmlに記載

### exercise 6-02

- 6-02.htmlに記載

### exercise 6-03

- 6-03.htmlに記載

### exercise 6-04

- 6-04.htmlに記載

### exercise 6-05

- 6-05.htmlに記載

### exercise 6-06

- 6-06.htmlに記載

### exercise 6-07

- 6-07.htmlに記載

### exercise 6-08

- 6-08.htmlに記載

### exercise 6-09

- 6-09.htmlに記載

### exercise 6-10

- 6-10.htmlに記載

### exercise 6-11

- 6-11.htmlに記載

### 理解度チェック
[1] 以下のコードについて説明してください。

```javascript
function hello (name) {
    console.log("こんにちは" + name);
}
hello("独習太郎");
```
- nameのように関数を定義するときに使う引数は仮引数と呼ぶ
- それに対して"独習太郎"は実引数と呼ぶ
- 仮引数と実引数の数は一致しなくてもエラーは発生しない、仮に合わない場合はundefinedが返る
- hello();を実行すると"こんにちはundefined"と表示される

[2] 以下の関数が実行されたときの戻り値を答えてください。

```javascript
function hello () {
    console.log('こんにちは');
}
const returnVal1 = hello();

const double = function (num) {
    if (typeof num !== 'number') {
        console.log('引数が不正なデータ型のため、関数の処理を終了します');
        return;
    }
    return num * 2;
}
const returnVal2 = double(10);
const returnVal3 = double("100");
```
- returnVal1: undefined
- returnVal2: 20
- returnVal3: undefined

[3] デフォルト引数について
- デフォルト引数とは、関数実行時に値が渡されない場合やundefinedが渡される場合に、仮引数にデフォルト値を設定する機能のこと
- 例えば以下の関数fnを定義した場合、引数に渡されなかったときに仮引数arg1, arg2, arg3に設定されるデフォルト値はそれぞれundefined, 10, "100"となる

```javascript
function fn(arg1, arg2 = 10, arg3 = "100") {};
```

[4] chapter-06-check.htmlに記載

[5] chapter-06-check.htmlに記載