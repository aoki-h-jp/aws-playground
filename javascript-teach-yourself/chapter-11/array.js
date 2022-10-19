// 配列を初期化
const fruits = ['banana', 'orange', 'grape'];
console.log(fruits);

// 配列の長さが3の配列を初期化
const length3 = new Array(3);
console.log(length3);
console.log(length3.length);

// 要素が1, 2の配列を初期化
const oneTwo = new Array(1, 2);
console.log(oneTwo);

// 末尾に要素を追加
// pythonで言うlist.append
oneTwo.push(3);
console.log(oneTwo);

// 先頭に要素を追加
// pythonでいうlist.insert(0, ...)
oneTwo.unshift(0);
console.log(oneTwo);

// 先頭の要素を削除
let deletedFirst = oneTwo.shift();
console.log(oneTwo);

// 末尾の要素を削除
// pythonでいうlist.pop
let deletedLast = oneTwo.pop();
console.log(oneTwo);

// 配列の切り取り
// pythonでいうlist[a:b]
// spliceで切り取ると元の配列も破壊される (破壊されたくない場合はslice)
const oneTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oneThree = oneTen.splice(1, 3);
console.log(oneThree);
console.log(oneTen);

const oneTen2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oneThree2 = oneTen.slice(1, 3);
console.log(oneThree);
console.log(oneTen);

// 配列の結合
let concated = oneTen2.concat(oneThree)
console.log(concated);

// 配列のコピー
// これはdeepcopy
let concated2 = concated.concat();
console.log(concated2);

// indexの検索
// pythonでいうlist.index()
const four = oneTen2.indexOf(4);
console.log(four);

// 値が存在するかどうか確認
// pythonでいうin list
let tf = oneTen2.includes(11);
console.log(tf);

// 要素を結合して文字列を生成
// pythonでいう''.join(list)
let strings = oneTen2.join("");
console.log(strings);

// 要素を特定の値で埋める
const zeros = new Array(100).fill(0);

// 配列をflatにする
const twoDArray = [[1, 2, 3], [4, 5, 6]];
const oneDArray = twoDArray.flat();
console.log(twoDArray);
console.log(oneDArray);

// 配列の順を逆にする
// pythonでいうsorted(reverse=True)
console.log(oneTen2);
oneTen2.reverse();
console.log(oneTen2);

// 配列の各要素で繰り返す
// pythonでいうfor elem in list
const oneFive = [1, 2, 3, 4, 5];
oneFive.forEach((v, i, a) => console.log(v, i ,a));

// 配列をmappingする
// pythonのmapとほぼ同じ
let mapped = oneFive.map((v, i, a) => v * 5);
console.log(mapped);

// 配列をfilterする
// pythonのfilterとほぼ同じ
const gt3 = oneFive.filter((v, i, a) => v > 3);
console.log(gt3);

// 配列の中で少なくとも一つはあるかどうか
// pythonのanyとほぼ同じ
let some3 = oneFive.some((v, i, a) => res1);
console.log(res1);

// 条件を満たした最初の要素の値を取得
const res2 = oneFive.find((v, i, a) => v > 2);
console.log(res2);

// 配列をソートする
// pythonでいうsorted(list)とかsorted(list, key=lambda x: ...)と同じ
let notsorted = [1, 4, 6, 7, 2, 3];
notsorted.sort();
console.log(notsorted);

// 配列をたたみ込む
// pythonのreduceとほぼ同じ
let oneFiveSum = oneFive.reduce((totalValue, currentValue) => totalValue + currentValue);
console.log(oneFiveSum);

// 配列風オブジェクトやイテラブルを配列に変換
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
const convertedArray = Array.from(set);
console.log(convertedArray);

// 配列かどうかを判定する
const set2 = new Set();
console.log(Array.isArray(set2));
console.log(Array.isArray(convertedArray))
