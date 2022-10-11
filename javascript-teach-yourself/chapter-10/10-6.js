const fruits = {
    banana: "うまい",
    apple: "普通",
    orange: "微妙",
    other: {
        grape: "うまい"
    }
};

// [1]
JSON.stringify(fruits, ["banana", "orange"]);

// [2]
function replacer (prop, value) {
    if (value !== "うまい") {
        return;
    }
    return value;
}

JSON.stringify(fruits, replacer);