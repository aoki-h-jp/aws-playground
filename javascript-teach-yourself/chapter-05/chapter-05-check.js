// [1]
// let i = 5;
// while(i < 10) {
//     console.log(i);
//     i++;
// }
for (i=5;i<10;i++) {
    console.log(i);
}

// [2]
let fb = "";
for (i=1;i<=100;i++) {
    if (i%3==0) {
        fb += 'Fizz';
        if (i%5==0) {
            fb += 'Buzz';
        }
    } else {
        if (i%5==0) {
            fb += 'Buzz';
        }
    }
    if (i%3==0 || i%5==0) {
        console.log(fb);
    } else {
        console.log(i);
    }
    fb = "";
}

// [4]
const capitals = {日本: "東京", アメリカ: "ワシントン", イギリス: "ロンドン"};
for ([k, v] of Object.entries(capitals)) {
    console.log(`${k}の首都は${v}です。`);
}