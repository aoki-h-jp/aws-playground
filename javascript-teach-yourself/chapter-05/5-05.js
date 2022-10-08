let greeting = "a";
try {
    if (typeof greeting !== "string") {
    throw "不正なデータ型です。";
    }
    console.log(`${greeting}、いい天気ですね。`);
} catch(error) {
    console.log(error);
}