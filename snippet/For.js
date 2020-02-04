// for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
// TypeScript for...of 循环
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
// forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。
// 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。
// TypeScript forEach 循环
var list2 = [4, 5, 6];
list2.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
});
// TypeScript every 循环
var list3 = [4, 5, 6];
list3.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
