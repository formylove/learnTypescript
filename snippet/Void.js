// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
var num = undefined;
// 这样也不会报错
var u;
var num = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：
var u;
var num = u;
