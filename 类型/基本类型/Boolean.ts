// 注意，使用构造函数 Boolean 创造的对象不是布尔值：

// let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 事实上 new Boolean() 返回的是一个 Boolean 对象：

let createdByNewBoolean: Boolean = new Boolean(1);
console.log(createdByNewBoolean);//[Boolean: true]

// 直接调用 Boolean 也可以返回一个 boolean 类型：
// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。


let createdByBoolean: boolean = Boolean(1);
console.log(createdByBoolean);