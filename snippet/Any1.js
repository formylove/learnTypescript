// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// 必须把 JavaScript 文件删除，重新编译才行；要是之前编译的 JavaScript 还在，直接在 ts 上把 let a 删除，再写 let a 就会报错。
var something1;
something1 = 'seven';
something1 = 7;
something1.setName('Tom');
// 等价于
var something;
something1 = 'seven';
something1 = 7;
something1.setName('Tom');
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');
