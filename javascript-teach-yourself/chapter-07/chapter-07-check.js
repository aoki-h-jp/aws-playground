// [3]
function delayMessageFactory (callback, delaymsec) {
    return function callSetTimeout (msg) {
        setTimeout(callback, delaymsec, msg);
    }
}
const dialog = delayMessageFactory(alert, 2000);
console.log(dialog('こんにちは'));
const log = delayMessageFactory(console.log, 1000);
console.log(log('こんばんは'));

const dialogArrow = (callback, delaymsec) => msg => setTimeout(callback, delaymsec, msg);
const res = dialogArrow(console.log, 2000);
console.log(res('a'));
