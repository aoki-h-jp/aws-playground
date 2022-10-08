## chapter-04

### exercise 5-01

- 5-01.htmlに記載

### exercise 5-02

- 5-02.htmlに記載

### exercise 5-03

- 5-03.htmlに記載

### exercise 5-04

- 5-04.htmlに記載

### exercise 5-05

- 5-05.htmlに記載

### exercise 5-06

- 5-06.htmlに記載

### exercise 5-07

- 5-07.htmlに記載

### exercise 5-08

- 5-08.htmlに記載

### exercise 5-09

- 5-09.htmlに記載

### exercise 5-10

- 5-10.htmlに記載

### exercise 5-11

- 5-11.htmlに記載

### exercise 5-12

- 5-12.htmlに記載
  
### exercise 5-13

- 5-13.htmlに記載
  
### exercise 5-14

- 5-14.htmlに記載

### 理解度チェック
[1] chapter-05-check.htmlに記載

[2] chapter-05-check.htmlに記載

[3] for...in文と列挙可能性
- for...in文で取り出されるプロパティのことを列挙可能性プロパティと呼ぶ
- オブジェクトのプロパティが列挙可能性があるかどうかはプロパティの設定を保持しているディスクリプタオブジェクトを取得しenumerableを確認すればわかる

[4] chapter-05-check.htmlに記載

[5] 以下のコードを実行するとどうなるか答えてください。またその理由も答えてください。

```javascript
try {
    console.log("tryブロックの処理を開始します。");
    throw "例外を投げました。";
    console.log("tryブロックの処理を終了します。");
} catch (e) {
    console.error("catchブロックの処理を開始します。");
    console.error("catchした値:" + e);
    console.error("catchブロックの処理を終了します。");
} finally {
    console.log("finallyブロックの処理を実行します。");
}
console.log("try/catch/finally文の後続のコードを実行します。");
```
- try節の中でthrowされているので、次の1行を飛ばした後その下が全部実行される
- eの中には「例外を投げました。」が入る