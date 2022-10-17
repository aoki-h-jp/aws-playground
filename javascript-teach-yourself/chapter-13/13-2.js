function delay (fn, message, ms) {
    setTimeout(() => {
        fn(message);
    }, ms);
}

// [1]
delay(console.log, 'こんにちは', 1000);

// [2]
delay(alert, 'さようなら', 2000);

// [3]
delay(msg1 => {
    console.log(msg1);
    delay(msg2 => {
        console.log(msg2);
    }, "さらに1秒経ちました" ,1000)
}, "1秒経ちました", 1000);
