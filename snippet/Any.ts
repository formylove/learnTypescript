// 在任意值上访问任何属性都是允许的：

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);