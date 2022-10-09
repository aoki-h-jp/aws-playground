## chapter-07

### exercise 7-01

[1] スコープとは何か答えてください。
- 変数が参照できる範囲

### exercise 7-02

[2] 以下のコードの変数がどのスコープに属するか答えてください。

```html
<script>
    var a; // 1
    let b; // 2
    function fn1 () { //3
        var c; // 4
        let d; // 5
        if (true) {
            var e; // 6
            let f; // 7
            function fn2 () {} // 8
        }
    }
    const fn3 = function () {} // 9
```
1. グローバルスコープ
2. スクリプトスコープ
3. グローバルスコープ
4. 関数スコープ
5. 関数スコープ
6. 関数スコープ
7. ブロックスコープ
8. 関数スコープ
9. スクリプトスコープ

### exercise 7-03

[1] レキシカルスコープとはどのようなスコープか答えてください。
- 実行中のコードから見て外側のスコープのこと

[2]
- 7-3.htmlに記載

### 理解度チェック

[1] スコープの種類について

|       | トップレベル    | 関数内    | ブロック内        | モジュール内のトップレベル |
|-------|-----------|--------|--------------|---------------|
| let   | スクリプトスコープ | 関数スコープ | ブロックスコープ     | モジュールスコープ     |
| const | スクリプトスコープ | 関数スコープ | ブロックスコープ     | モジュールスコープ     |
| var   | グローバルスコープ | 関数スコープ | ブロックの外側のスコープ | モジュールスコープ     |
| 関数宣言  | グローバルスコープ | 関数スコープ | ブロックの外側のスコープ | モジュールスコープ     |

[2] 以下のコードを実行したときに"グローバル"、"関数内"、エラーのいずれかの結果になるか答えてください。

```html
<script>
    let val = "グローバル";
    function fn1() {
        let val = "関数内";
        if (Math.random() < .5) {
            console.log(val); // 1
            fn1(); // 2
        }
        function fn2() {
            console.log(val); // 3
        }
        console.log(val); // 4
        fn2();
        return val;
    }
    function fn3 () {
        console.log(val); // 5
    }
    console.log(val); // 6
    const result = fn1();
    console.log(result); // 7
    fn3();
</script>
```
1. 関数内
2. 実行可能
3. 関数内
4. 関数内
5. グローバル
6. グローバル
7. 関数内

[3] chapter-07-check.html, chapter-07-check.jsに記載

[4] chapter-07-check.html, chapter-07-check.jsに記載