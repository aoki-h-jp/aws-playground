import { createInterface } from 'readline';

const user3 = {
    name: 'uhyo',
    age: 25,
}

// プロパティアクセスを利用してプロパティを書き換える
// user3自体はconstだが、プロパティを個別に書き換えることはできる
// 仮に以下のように書いたら再代入できないのでエラーが出る
// user3 = {name: 'ohyo', age: 27}
user3.age = 26;

// 26
console.log(user3.age);

// 他の代入演算子も使える
user3.age += 4;

// 30
console.log(user3.age);

// オブジェクト.[]のアクセスでは[]の中を式にしてもいい
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const messages = {
    good: '0以上',
    bad: '負'
}

// 0以上でgood, 負の値でbadを参照することができる
rl.question('数値を入力してください:', line => {
    const num = Number(line);
    console.log(messages[num >= 0 ? 'good': 'bad']);
    rl.close();
})
