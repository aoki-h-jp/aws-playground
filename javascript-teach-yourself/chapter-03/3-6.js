let obj = { prop: true, subObj: {val: 100}}
console.log(obj.prop);
console.log(obj.subObj.val);

// ブラケット記法に書き換える
console.log(obj["prop"]);
console.log(obj["subObj"]["val"]);

// val2をsubObjの中に追加する
obj.subObj.val2 = 1000
console.log(obj.subObj.val2);
