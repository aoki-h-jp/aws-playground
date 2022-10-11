// [1]
console.log(/^\d{3}[-]\d{4}$/.test("001-0012"));
console.log(/^\d{3}[-]\d{4}$/.test("001-001"));
console.log(/^\d{3}[-]\d{4}$/.test("2.2-3042"));
console.log(/^\d{3}[-]\d{4}$/.test("wd3-2132"));
console.log(/^\d{3}[-]\d{4}$/.test("124-56789"));

//[2]
console.log(/^[\w.\-]+@[\w\-]+\.[\w\.\-]+$/.test("example000@gmail.com"));
console.log(/^[\w.\-]+@[\w\-]+\.[\w\.\-]+$/.test("example-0.00@gmail.com"));
console.log(/^[\w.\-]+@[\w\-]+\.[\w\.\-]+$/.test("example-0.00@ex.co.jp"));
console.log(/^[\w.\-]+@[\w\-]+\.[\w\.\-]+$/.test("example/0.00@ex.co.jp"));