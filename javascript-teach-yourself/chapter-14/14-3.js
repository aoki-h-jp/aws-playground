function moveElement (callback) {
    return () => new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, 2000);
    });
}

// #sourceをspanの上に移動させる
const source = document.querySelector("#source");
const move1 = moveElement(() => {
    const title = document.querySelector(".title");
    title.prepend(source);
});

// #sourceをh1タグの下に移動させる
const move2 = moveElement(() => {
    const h1 = document.querySelector("h1");
    h1.after(source);
});

// #sourceを.wrapの子要素の末尾に移動させる
const move3 = moveElement(() => {
    const wrap = document.querySelector(".wrap");
    wrap.append(source);
});

// #sourceをliタグの2番目の文字の前に移動
const move4 = moveElement(() => {
    const li2 = document.querySelectorAll("li")[1];
    li2.prepend(source);
});

move1().then(move2).then(move3).then(move4)