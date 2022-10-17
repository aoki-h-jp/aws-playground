let instance = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.floor(Math.random() * 11);
        if (rand < 5) {
            reject(rand);
        } else {
            resolve(rand);
        }
    }, 1000);
});

instance = instance.then(value => {
    console.log(`5以上の値[${value}]が渡ってきました。`);
});

instance = instance.catch(errorValue => {
    console.log(`5未満の値[${errorValue}]が渡ってきました。`);
});

instance = instance.finally(() => {
    console.log("処理を終了します。");
});

let count = 0;
function promiseFactory () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++;
            console.log(`${count}回目のコールです。時刻: [${new Date().toTimeString()}]`);
            if (count === 3) {
                reject(count);
            } else {
                resolve(count);
            }
        }, 1000);
    });
}

// promiseFactory();と書いた時点で中身のPromiseが実行されるので、生成したPromiseインスタンスは使いまわせない
const instance2 = promiseFactory();
instance2.then(() => {
    return instance2;
}).then(() => {
    return instance2;
}).then(() => {
    return instance2;
}).catch(errorCount => {
    console.error(`エラーに飛びました。現在のカウントは${errorCount}です。`);
}).finally(() => {
    console.log("処理を終了します");
});
