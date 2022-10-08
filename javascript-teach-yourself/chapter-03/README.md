## chapter-03

### exercise 3-1
[1] letとconstの違いについて答えてください。
- 値を上書きできるかどうか

[2] 次のコードを実行するとエラーが発生するが、エラーは何行目で起こり、どういう原因か。
```javascript
const fruit = "apple";
fruit = "banana";
console.log(fruit);
```
- 2行目でconstの変数に対して上書きを行おうとしているためエラーが起こる

### exercise 3-2

[1] 以下のコードをキャメルケースを使って書き換えてください。

```javascript
let product_price = 1000;
let cart_item = "りんご";
let favorite_sport_category = "球技";
```

書き換え後
```javascript
let productPrice = 1000;
let cartItem = "りんご";
let favoriteSportCategory = "球技";
```

### exercise 3-3

[1] This is Tom's house. という文字列をエスケープを使う場合と使わない場合で記述してください。

```javascript
console.log("This is Tom's house.");
console.log('This is Tom\'s house.');
```

### exercise 3-4

- 3-4.htmlに記載

### exercise 3-5

[1] 文字列リテラルを表す記号を3つ答えてください。
- ""
- ''
- ``

[2] 0xから始まる数値は何進数を表すか答えてください。
- 16

[3] console.log(.123);は記述として正しいかどうか答えてください。
- 正しい

[4] console.log(1e3+10n);は記述として正しいかどうか答えてください。
- BigInt型と混じっているので正しくない

[5] Boolean型がとりうる値を2つ答えてください。
- true
- false

[6] nullとundefinedの意味をそれぞれ答えてください。
- null: 参照がないことを示す
- undefined: 変数が未定義であることを示す

### exercise 3-6

- 3-6.htmlに記載

### exercise 3-7

- 3-7.htmlに記載

### exercise 3-8

- 3-8.htmlに記載

### 理解度チェック
[1] 変数について
- 変数とは、値が格納されているメモリのアドレスを保持している
- 変数に新しい値が設定された場合には変数が保持しているアドレスが変更される
- 後で変更される可能性がある変数はlet、変更されない変数についてはconstで宣言する
- ES5までで使用されていたvarは極力使わないようにするのが主流

[2] chapter-03-check.html, chapter-03-check.jsに記載

[3] chapter-03-check.html, chapter-03-check.jsに記載

[4] nullとundefined
- nullは変数が空であることを表し、プログラムが明示的に設定を行う
- undefinedはJavaScriptエンジンによって自動的に設定される値で、値が未定義であることを表す

[5] chapter-03-check.html, chapter-03-check.jsに記載

[6] chapter-03-check.html, chapter-03-check.jsに記載
