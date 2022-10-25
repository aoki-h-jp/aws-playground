import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    // 型推論でlineはstringとみなされるので数値を入れても1000がたされるわけではない
    // これを「暗黙の変換」と呼ぶ
    console.log(`${line} + 1000`);
    rl.close();
});