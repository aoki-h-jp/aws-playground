class Person {
    constructor(fullname, age, gender) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
}

const taro = new Person('太郎', 18, '男');
const jiro = new Person('次郎', 15, '男');
const saburo = new Person('三郎', 10, '男');
const hanako = new Person('花子', 23, '女');
const hanayo = new Person('花代', 18, '女');

const friends = new Map;
friends.set("taro", new Set([jiro, hanayo]));
console.log(friends);
friends.set("hanako", new Set([taro, hanayo, saburo]));
console.log(friends);
const taroFriend = friends.get("taro");
taroFriend.add(hanako);
console.log(friends);

let taroFriendArray = Array.from(taroFriend);
taroFriendArray.sort((friend1, friend2) => {
    return friend1.age - friend2.age;
});
console.log(taroFriendArray);

let num_taro = 0;
taroFriendArray.forEach(friend => {
    console.log(friend.fullname);
    if (friend.gender != taro.gender) {
        num_taro += 1;
    }
});
console.log(num_taro);

friends.forEach((friend, name) => {
    let friendStr = '';
    let friendArray = Array.from(friend);
    friendArray.forEach(person => {
        friendStr += `[${person.fullname}]`
    });
    console.log(`私の名前は${name}です。友達には${friendStr}がいます。`)
});
