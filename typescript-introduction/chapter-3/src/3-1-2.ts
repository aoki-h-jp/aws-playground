const input = 'name';
// プロパティ名:式という形で書けるので、name: の中身は以下のように書ける
const user = {
    name: input ? input : '名無し',
    age: 20,
}

// name
console.log(user.name);

// プロパティ名と変数名が同じ時は省略できる
const name2 = 'AAAA';
const user2 = {
    name2,
    age: 20,
}

// AAAA
console.log(user2.name2);