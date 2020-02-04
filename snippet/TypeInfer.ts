// 以下代码虽然没有指定类型，但是会在编译的时候报错：

let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7; 报错

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

let myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;