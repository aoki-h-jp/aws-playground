const arry = [10, "文字列", 20, true, 23, 47];
let sum = 0;
for (v of arry) {
    if (typeof v == 'number') {
        sum += v
    }
}
console.log(sum);