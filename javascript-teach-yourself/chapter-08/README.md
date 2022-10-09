## chapter-08

### exercise 8-1

[1] 次のコードでコンソールに出力される文字列を答えてください。

```javascript
window.name = "花子";
function hello() {
    console.log("こんにちは、" + this.name);
}

const taro = {
    name: "太郎",
    hello: hello
}

hello(); // 1
taro.hello(); //2
```
1. こんにちは、花子
2. こんにちは、太郎

### exercise 8-2

[1]以下のコードを実行したとき、コンソールに表示されるメッセージを答えてください。

```javascript
window.name = "独習太郎";
const which = () => {
    console.log(this.name);
}

const hanako = {
    name: "独習花子",
    callName () {
        which();
    }
}

hanako.callName();
```
独習太郎

- アロー関数のthisはレキシカルスコープを参照するが、この場合アロー関数whichが定義されている箇所のレキシカルスコープはグローバルなのでwindow.nameが参照される

### exercise 8-3

[1] 次のコードを実行したときにコンソールに表示される値を答えてください。

```javascript
window.a = 10;
window.b = 11;
const obj = {
    a: 5,
    b: 7,
    calc () {
        console.log(this.a + this.b);
    }
}

setTimeout(obj.calc, 2000);
```
21

- obj.calcはsetTimeoutのコールバックになっているので関数として実行されている (object.method();の形で実行されていない)ため、thisはWindowオブジェクトを参照しにいく

### 理解度チェック

[1] 実行コンテキストについて
- 

[2] 次のコードを実行したとき、表示されるメッセージを答えなさい。

```javascript
window.greeting = "こんにちは";
function hello () {
    console.log(this.greeting);
}
hello(); // 1

const dog = {
    greeting: "ワンワン",
    hello
};
dog.hello(); // 2

const gorilla = {
    greeting: "ウホウホ",
    hello
};
gorilla.hello(); // 3

const transform = gorilla.hello;
transform(); // 4

setTimeout(gorilla.hello, 2000); // 5
```
1. こんにちは
2. ワンワン
3. ウホウホ
4. こんにちは
5. こんにちは

[3] [2]のコードで「ウホウホ」とコンソールに表示するにはどうすればいいでしょうか。
```javascript
setTimeout(function () {gorilla.hello();}, 2000);
```
もしくは
```javascript
setTimeout(gorilla.hello.bind(gorilla), 2000);
```