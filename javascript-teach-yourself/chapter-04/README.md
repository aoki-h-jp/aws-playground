
## chapter-04

### exercise 4-1
[1] 次のコードを実行すると変数a, bにはどのような値が格納されるか答えてください。
```javascript
let a = 0;
let b = 0;
a = 1 + (b = 10);
```
a = 11, b = 10


### exercise 4-2

[1] 以下のコードの実行結果がどうなるか答えてください。

```javascript
console.log(2*3**2); // 1
console.log(10/2+(3-2)); // 2
console.log(10/(2+3)-2); // 3
let a = 1;
console.log(a++); //4
let a = 10, b = 1;
console.log(--a * ++b); // 5
```
1. 18
2. 6
3. 0
4. 1
5. 18

- 前置インクリメントは処理の前に自身を足し引きしてから処理をする
- 後置インクリメントは処理の後に自身を足し引きする

### exercise 4-3

[1] 以下のコードの実行結果がどうなるか答えてください。

```javascript
console.log(10 < 2 * 6 - 2); // 1
console.log(3 > 8 % 3); // 2
console.log((9 > 3) * 3); // 3
```
1. false
2. true
3. 3

### exercise 4-4

[1] 以下のコードの実行結果がどうなるか答えてください。

```javascript
let a = 3;
a *= 10;
console.log(a); // 1
a /= 2;
console.log(a); // 2
a -= 10;
console.log(a); // 3
a %= 3;
console.log(a); // 4
a **=3;
console.log(a); // 5
```
1. 30
2. 15
3. 5
4. 2
5. 8

### exercise 4-5

[1] 以下のコードの実行結果がどうなるか答えてください。

```javascript
let person = {name: "Bob", age: "32", male: true};
delete person.name;
console.log(person); // 1
console.log(typeof person); // 2
console.log(+person.age); // 3
console.log(!person.male) // 4
```
1. {age: "32", male: true}
2. object
3. 32
4. false

### 理解度チェック
[1] 演算子とオペランドについて
- 式 3 + 5において、記号+は加算演算子、3,5はオペランドと呼ぶ
- 加算演算子はオペランドが2つであるため、二項演算子に分類される
- 一方で論理否定演算子(!)のようなオペランドが1つの演算子は単項演算子に分類される
- JavaScriptで3つのオペランドを取れる演算子は記号? :で表される演算子ただ1つであるため、この演算子のことを三項演算子と呼ぶ

[2] 以下のコードを実行すると30が返ってくる。結果が60になるようにコードを修正してください。

```javascript
console.log(10 + 5 * 4);
```

修正後
```javascript
console.log((10 + 5) * 4);
```

[3] 次のようにインクリメント演算子を変数の前に置くか後ろに置くかで結果が異なりますが、この結果の違いが生じる理由を説明してください。

```javascript
let x = y = 3;
console.log(x++); // > 3
console.log(--y); // > 4
```

- 前置インクリメントは処理の前に自身を足し引きしてから処理をする
- 後置インクリメントは処理の後に自身を足し引きする

[4] 厳密な等価性と抽象的な等価性について
- 3 === '3'の結果はfalseになるが、3 == '3'の結果はtrueになる
- 厳密な等価性では、左右のオペランドの値と型を比較し両方が一致する場合のみtrueとなる
- 抽象的な等価性では、左右のオペランドの型が異なるときには型を揃える暗黙的な変換が行われた後に厳密な等価性による等価演算が行われる(変換後の値のみ等しければOK)

[5] 以下のコードを実行したらどうなりますか。またその理由を答えてください。

```javascript
let a;
console.log(a); // 1
console.log(a = 10); // 2
console.log(a); //3
```

1. aには何も値が入っておらず、プログラムに自動的にundefinedが付与される
2. a = 10が代入されたので10
3. 10

[6] 以下の式を自己代入演算子を使って書き換えてください。

```javascript
let a = 0;
a = a + 3; // 1
a = a * 4; // 2
a = a / 2; // 3
a = a % 5; // 4
```

書き換え後
```javascript
let a = 0;
a += 3; // 1
a *= 4; // 2
a /= 2; // 3
a %= 5; // 4
```

[7] 以下のコードを実行した時のコンソールに出力される値を答えてください。

```javascript
console.log((0 || undefined) && "こんにちは"); // 1
console.log(!(0 || undefined) && "こんにちは"); // 2
```
1. undefined
2. こんにちは


[8] 以下のコードを実行した時のコンソールに出力される値を答えてください。

```javascript
console.log(null ? "リンゴ": "バナナ"); // 1
console.log(null ?? "パイナップル"); // 2
console.log({apple: "リンゴ"}?.fruit ?? "バナナ"); // 3
```
1. バナナ
2. パイナップル
3. バナナ