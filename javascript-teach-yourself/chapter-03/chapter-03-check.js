// [2]
console.log('-----[2]-----');
const TAX_RATE = 1.1;
let productPrice = 1000;
console.log(`商品の金額は${productPrice}円ですので、税込価格は${productPrice * TAX_RATE}円です。`);

// [3]
console.log('-----[3]-----');
console.log(12**2 % 5);
console.log(12n**2n % 5n);
console.log(Number('hello'));

// [5]
console.log('-----[5]-----');
const counter = {num: 1};
counter.num += 1;
window.alert(counter.num);

// [6]
console.log('-----[6]-----');
console.log(typeof null);
console.log(100 + true);
console.log(1 + Number('hello'));
console.log(1 + Boolean('hello'));