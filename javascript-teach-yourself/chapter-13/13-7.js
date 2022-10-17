function action (actionName, duration) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`${actionName}`);
            resolve();
        }, duration);
    });
}

// function makeAction() {
//     action("散歩", 500)
//     .then(() => action("朝食", 200))
//     .then(() => Promise.all([action("昼食", 500), action("おしゃべり", 100)]))
//     .then(() => action("夕食", 600))
//     .then(() => action("趣味", 400))
// };

// makeAction();

// async, awaitでの書き換え
async function asyncMakeAction () {
    await action("散歩", 500);
    await action("朝食", 200);
    await Promise.all([action("昼食", 500), action("おしゃべり", 100)]);
    await action("夕食", 600);
    await action("趣味", 400);
}

asyncMakeAction();