const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "胡麻豆腐"];

// [1]
const chuka2 = [...chuka];
console.log(chuka2);

// [2]
const chuka3 = [...chuka, ...desert];
console.log(chuka3);

const chuka4 = [...chuka, "坦々麺", ...desert];
console.log(chuka4);
