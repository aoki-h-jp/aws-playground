import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    // 型推論でlineはstringとみなされるのでlineをnumberに変換してからたす
    // これを「明示的な変換」と呼ぶ
    const num: number = Number(line);
    console.log(num + 1000);
    rl.close();
});