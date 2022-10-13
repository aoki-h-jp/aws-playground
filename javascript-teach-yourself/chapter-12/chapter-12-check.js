function genStep (min, max, step) {
    if (max < min) {
        throw "min < max"
    }
    let initValue = min - step;
    return {
        next () {
            if (initValue < max) {
                return {
                    done: false,
                    value: initValue += step
                }
            } else {
                return {
                    done: true
                }

            }
        }
    }
}

let test1 = genStep(4, 10, 2);
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
console.log(test1.next());

// [2]
function* genStepGenerator (min, max, step) {
    if (max < min) {
        throw "min < max"
    }
    let returnValue = min - step;
    while (returnValue < max) {
        yield returnValue += step;
    }
}

let test2 = genStepGenerator(4, 10, 2);
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());

// [3]
// Array.prototype[Symbol.iterator] = function () {
//     let index = 0;
//     let arry = this;
//     return {
//         next () {
//             if (index < arry.length) {
//                 return {
//                     done: false,
//                     value: [index, arry[index++]]
//                 };
//             } else {
//                 return {
//                     done: true
//                 };
//             }
//         }
//     };
// };

// for (let item of ["a", "b"]) {
//     console.log(item);
// }

// [4]
// Array.prototype[Symbol.iterator] = function* () {
//     let arry = this;
//     for (let index = 0; index < arry.length; index++) {
//         yield [index, arry[index++]]
//     }
// }

// for (let item of ["a", "b"]) {
//     console.log(item);
// }

// [5]
class Shape {
    constructor (options) {
        const defaults = {
            type: "四角形",
            textColor: "黒",
            borderColor: "なし",
            bgColor: "白"
        };
        // 被る場合は後に書かれた方に上書きされる
        this.options = {...defaults, ...options};
    }

    draw() {
        const {type, textColor, borderColor, bgColor} = this.options;
        console.log(`形: ${type} 文字色: ${textColor} 枠色: ${borderColor} 背景色: ${bgColor}`);
    }
}

const triangle = new Shape({type: "三角形"});
triangle.draw();