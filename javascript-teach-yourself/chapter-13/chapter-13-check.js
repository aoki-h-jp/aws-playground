// [1]
function run (personName) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random()*11);
        setTimeout(() => {
            if (time % 4 === 0) {
                reject({personName});
            } else {
                resolve({personName, time});
            }
        }, time);
    });
}

async function running () {
    try {
        let taroRun = await run("太郎");
        console.log(`${taroRun.personName}のタイムは${taroRun.time}です。`)
        let jiroRun = await run("次郎");
        console.log(`${jiroRun.personName}のタイムは${jiroRun.time}です。`)
        let saburoRun = await run("三郎");
        console.log(`${saburoRun.personName}のタイムは${saburoRun.time}です。`)
    } catch (e) {
        console.log(`${e.personName}が転けました。レースやり直し！`)
    }
}

// running();

// [2]
// Promise.any([run("太郎"), run("次郎"), run("三郎")])
// .then(firstGoal => console.log(`一番最初にゴールしたのは${firstGoal.personName}でタイムは${firstGoal.time}です。`))
// .catch(() => console.log(`レースやり直し！`))

// [3]
// Promise.all([run("太郎"), run("次郎"), run("三郎")])
// .then(([taro, jiro, saburo]) => {
//     console.log(`${taro.personName}のタイムは${taro.time}です。`);
//     console.log(`${jiro.personName}のタイムは${jiro.time}です。`);
//     console.log(`${saburo.personName}のタイムは${saburo.time}です。`);
// })
// .catch((e) => console.log(`${e.personName}が転けました。レースやり直し！`))

// [4]
// promise.allsettled([run("太郎"), run("次郎"), run("三郎")])
// .then(arry => {
//     for (const {status, value, reason} of arry) {
//         if (status === "fulfilled") {
//             console.log(`${value.personname}のタイムは${value.time}です。`);
//         } else {
//             console.error(`${reason.personname}が転けました。`);
//         }
//     }
// })

// [5]
// Promise.race([run("太郎"), run("次郎"), run("三郎")])
// .then(({person}) => {console.log(`${person.personname}のタイムは${person.time}です。`);})
// .catch(({e}) => {console.error(`${e}は転けました。`)});

async function preview () {
    let fruit = await fetch("fruit.json");
    let fruitInfo = await fruit.json();
    for (const {key, value} of fruitInfo) {
        let fruitTag= await fetch("fruit-tag.json");
        let fruitTagInfo = await fruitTag.json();
        console.log(`${key}は次の特徴があります。(${fruitTagInfo[key]})`)
    }
}

preview();
