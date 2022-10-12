const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["胡麻団子", 200]
]);

menu.set("杏仁豆腐", 300);
console.log(menu);
console.log(menu.get("天津飯"));
console.log(menu.has("胡麻団子"));
menu.delete("八宝菜");
console.log(menu);