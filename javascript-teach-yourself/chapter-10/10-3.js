// [1]
const dt_start = new Date(2022, 05, 1);
const dt_end = new Date(2022, 06, 0);
console.log(dt_start.getDay());
console.log(dt_end.getDay());

// [2]
const dt_start2 = new Date(dt_start.getFullYear(), dt_start.getMonth(), dt_start.getDay() + 30);
console.log(dt_start2);

// [3]
const dt_end2 = new Date(dt_end.getFullYear(), dt_end.getMonth() + 20, dt_end.getDay());
console.log(dt_end2);