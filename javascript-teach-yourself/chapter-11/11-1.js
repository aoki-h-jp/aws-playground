const chuka = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲"];
// [1]
chuka.push("天津飯");
console.log(chuka);

// [2]
chuka.unshift("チャーハン");
console.log(chuka);

// [3]
let d = chuka.shift();
console.log(chuka);

// [4]
let d2 = chuka.pop();
console.log(chuka);

// [5]
chuka.splice(2, 1);
console.log(chuka);

// [6]
console.log(chuka.indexOf("餃子"));

// [7]
let new_chuka = chuka.concat(["杏仁豆腐", "胡麻豆腐"]);
console.log(new_chuka);

// [8]
let new_chuka2 = new_chuka.slice(1, 4);
console.log(new_chuka2);

// [9]
new_chuka2.reverse();
console.log(new_chuka2);

// [10]
let tf = new_chuka2.includes("八宝菜");
console.log(new_chuka2);


