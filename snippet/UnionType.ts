
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：


function getString(something: string | number): string {
    return something.toString();
}


let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5
myFavoriteNumber3 = 7;
console.log(myFavoriteNumber3.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
// 上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。

// 而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。