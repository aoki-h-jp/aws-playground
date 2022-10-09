## chapter-09

### exercise 9-1

- 9-1.htmlに記載

### exercise 9-2

- 9-2.htmlに記載

### exercise 9-3

- 9-3.htmlに記載

### exercise 9-4

- 9-4.htmlに記載

### exercise 9-5

[1] 以下のコードの実行結果を答えてください。

```javascript
class Parent {
    constructor (familyName) {
        this.familyName = familyName;
    }

    introduction () {
        console.log(`名字は${this.familyName}です。`);
    }
}

class Child extends Parent {
    constructor (familyName) {
        super(familyName);
    }
}

const taro = new Child("独習");

console.log(taro.hasOwnProperty("familyName")); // 1
console.log(taro.hasOwnProperty("introduction")); // 2
console.log("introduction" in taro); // 3
console.log("hasOwnProperty" in taro); // 4
```
1. true
2. false
3. true
4. true

### exercise 9-6

- 9-6.htmlに記載

### 理解度チェック

[1] chapter-09-check.htmlに記載

[2] chapter-09-check.htmlに記載

[3] chapter-09-check.htmlに記載

[4] chapter-09-check.htmlに記載

[5] chapter-09-check.htmlに記載