function sleep(ms) {
    const startTime = new Date();
    while (new Date() - startTime < ms);
    alert("完了しました。");
};
sleep(3000);

const btn = document.querySelector("button");
function clickHandler() {
    alert("ボタンがクリックされました。");
}
btn.addEventListener("click", clickHandler);