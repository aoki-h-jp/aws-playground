const instance = new Promise((resolve, reject) => {
    setTimeout(() => {}, 1000);
    let now = new Date();
    let nowSeconds = now.getSeconds();
    if (nowSeconds % 2 == 0) {
        reject(nowSeconds)
    } else {
        resolve(nowSeconds)
    }
}).catch(nowSeconds => {
    console.log(`[${nowSeconds}は奇数]`)
}).then(nowSeconds => {
    console.log(`[${nowSeconds}は奇数]`)
}).finally(() => {
    console.log('処理を終了します。')
});