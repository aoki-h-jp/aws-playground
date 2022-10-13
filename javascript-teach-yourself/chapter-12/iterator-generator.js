// イテレータの定義方法
// イテレータ: 反復処理の挙動を定義するときに使うオブジェクト
// 1ずつインクリメントした値を返すイテレータ
function genIterator (max) {
    let value = 0;
    return {
        next () {
            if (value < max) {
                return {
                    done: false,
                    value: value++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

// イテレータの挙動確認
const iterator = genIterator(3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// アルファベットのa-zを順番に返すイテレータ
function alphabetIterator (start='a', end='z') {
    if (start > end) {
        throw "開始文字は終了文字より前のアルファベットを選んでください。"
    }

    const ALPHABET_ARRAY = "abcdefghijklmnopqrstuvwxyz".split("");
    const startIndex = ALPHABET_ARRAY.indexOf(start);
    const endIndex = ALPHABET_ARRAY.indexOf(end);
    const targetAlphabet = ALPHABET_ARRAY.slice(startIndex, endIndex + 1);

    return {
        next () {
            // 1個ずつ取り出す
            const alphabet = targetAlphabet.shift();
            return {
                value: alphabet,
                done: alphabet ? false : true,
            }
        }
    }
};

const it = alphabetIterator("c", "e");
let nextValue = it.next();
while (!nextValue.done) {
    console.log(nextValue);
    nextValue = it.next();
}

// 反復オブジェクトの作成
// オブジェクトはiterateできないが、Symbol.iteratorに指定すればiterableになる
const iterableObject = {
    [Symbol.iterator] () {
        let value = 0;
        return {
            next () {
                if (value > 2) {
                    return {
                        done: true
                    };
                } else {
                    return  {
                        done: false,
                        value: value++
                    };
                }
            }
        };
    }
};

for (const value of iterableObject) {
    console.log(value);
}

// コンストラクタにイテレータを設定する
// 渡された値を2倍にする
function doubleIterator () {
    let index = 0;
    let arry = this;
    return {
        next () {
            if (index < arry.index) {
                return {
                    done: false,
                    value: arry[index++] * 2
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}


for (let item of [1, 2, 3]) {
    console.log(item);
}

// 直接書き換えるのはよくないので普段はコメントアウトした方がいい
// Array.prototype[Symbol.iterator] = doubleIterator;

// for (let item of [1, 2, 3]) {
//     console.log(item);
// }

// ジェネレータの生成
// ジェネレータ: イテレータより簡潔に反復処理を簡潔に記述できる
// 普通の関数は処理が終了するところまで走るが、ジェネレータオブジェクトはyieldまたはreturnが見つかった地点までジェネレータ関数が実行される
// yieldがdone:falseのvalueを返す省略記号で、returnがdone:trueのvalueを返す省略記号のようなイメージ
function* gen1to3() {
    let index = 1;
    yield index;
    index++;
    yield index;
    index++;
    return index;
}

const generator = gen1to3();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// 1ずつインクリメントした値を返すジェネレータ
function* genIterator2(max) {
    let value = 0;
    while (value < max) {
        yield value++;
    }
}

const iterator2 = genIterator2(3);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// ジェネレータオブジェクトはイテレータオブジェクトと同様にSymbol.iteratorに指定すれば反復可能オブジェクトを作成できる
class Iterable {
    *[Symbol.iterator] () {
        for (let key in this) {
            yield [key, this[key]];
        }
    }
}

const fruits = new Iterable();
fruits.apple = "りんご";
fruits.banana = "バナナ";
console.log(fruits);

for (const row of fruits) {
    console.log(row[0], row[1]);
}

// 継承して反復可能なクラスを作る
class Person extends Iterable {
    constructor(name, age, gender) {
        super();
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const taro = new Person('taro', '18', 'male');

for (const row of taro) {
    console.log(row[0], row[1]);
}
