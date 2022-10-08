// [1]
() => console.log('こんにちは');

// [2]
let double = num => num * 2;
console.log(double(10));

// [3]
setTimeout(name => console.log("こんにちは、" + name), 3000, "独習太郎");