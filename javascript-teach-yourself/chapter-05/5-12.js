const obj = {
    prop1: 10,
    prop2: "文字列",
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47,
};
let sum = 0;
for ([k, v] of Object.entries(obj)) {
    if (typeof v == 'number') {
        if (k != 'skip') {
            sum += v;
        }
    }
}
console.log(sum);