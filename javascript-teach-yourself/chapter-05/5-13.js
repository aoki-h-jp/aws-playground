const breakTestArry = ["ぬけない", "not break", "break", "この前で抜ける"];
for (v of breakTestArry) {
    console.log(v);
    if (v === 'break') {
        break;
    }
};