try {
    let b = 10 + a;
    console.log(b);
} catch (error) {
    console.log(error)
} finally {
    console.log("後続の処理")
}