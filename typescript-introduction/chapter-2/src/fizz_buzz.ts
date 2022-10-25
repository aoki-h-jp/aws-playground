// 1行ずつ出力
for(let i = 1; i <= 100; i++) {
    let res: string | number = '';
    if (i % 3 === 0) {
        res += 'Fizz';
    }
    if (i % 5 === 0) {
        res += 'Buzz';
    }
    if (res === '') {
        res = i
    }
    console.log(res);
}

// まとめて出力
let result: string = '';
for(let i = 1; i <= 100; i++) {
    let res: string | number = '';
    if (i % 3 === 0) {
        res += 'Fizz';
    }
    if (i % 5 === 0) {
        res += 'Buzz';
    }
    if (res === '') {
        res = i
    }
    result += res + ' ';
}
console.log(result);
