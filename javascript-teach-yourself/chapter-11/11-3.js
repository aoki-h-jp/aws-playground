const chuka = new Set(["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"]);
chuka.add("杏仁豆腐");
chuka.add("餃子");
console.log(chuka);
chuka.delete("回鍋肉");
console.log(chuka.has("八宝菜"));
let str = '';
chuka.forEach((v, v2, s) => {
    str += v;
});
console.log(str);