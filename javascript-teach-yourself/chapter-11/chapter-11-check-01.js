const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 2, 700],
];

let new_orders = orders.filter(order => order[0] != "回鍋肉");
console.log(new_orders);
console.log(new_orders.every(order => order[2] < 1000));
new_orders.sort((order1, order2) => {
    return order2[2] - order1[2];
});
console.log(new_orders);

let sum_order = 0;
new_orders.forEach((order) => {
    console.log(`${order[0]}を${order[2]}円で${order[1]}個注文しました。`);
    sum_order += (order[1] * order[2]);
});
console.log(`合計金額は${sum_order}円です。`);