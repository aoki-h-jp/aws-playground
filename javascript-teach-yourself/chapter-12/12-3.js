function total (taxRate, ...hontaiPrice) {
    let sum = 0;
    for (const hontai of hontaiPrice) {
        let totalPrice = Math.floor(hontai * (1 + taxRate * 0.01));
        sum += totalPrice;
    }
    return sum;
}

console.log(total(taxRate=10, 1000, 2002, 30421, 12391));