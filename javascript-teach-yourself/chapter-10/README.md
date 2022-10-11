## chapter-10

### exercise 10-1

- 10-1.htmlに記載

### exercise 10-2

- 10-2.htmlに記載

### exercise 10-3

- 10-3.htmlに記載

### exercise 10-4

- 10-4.htmlに記載

### exercise 10-5

[1] 次のようなコードをタブA, Bの順番で実行したとき、タブBのsessionStorage.getItem("car")では、どのような値が取得されるか答えてください。

タブA
```javascript
localStorage.setItem("car", "黒い車");
sessionStorage.setItem("car", "赤い車");
```

タブB
```javascript
localStorage.setItem("car", "白い車");
const car = sessionStorage.getItem("car") || localStorage.getItem("car");
sessionStorage.setItem("car", car);
console.log(sessionStorage.getItem("car"));
```
- 白い車

### exercise 10-6

- 10-6.htmlに記載

### exercise 10-7

[1] 次のように、プリミティブ型の文字列に対してreplaceメソッドが実行できる理由を説明してください。

```javascript
const result = "apple, lemon".replace("apple", "banana");
console.log(result);
```
- ラッパーオブジェクトにあたるStringのメソッドが暗黙的に呼び出されているから

### 理解度チェック

[1] chapter-10-check-01.htmlに記載

[2] UTC, GMT, JSTとは
- UTCは協定世界時と呼ばれ、現在世界の標準時として使われている
- UTCは原子時計によって算出されるため、天体観測によって算出されるGMTより厳密
- JSTは日本標準時を表し、UTCとは+9時間の時差がある

[3] chapter-10-check-03.htmlに記載

[4] chapter-10-check-04.htmlに記載

[5] chapter-10-check-05.htmlに記載