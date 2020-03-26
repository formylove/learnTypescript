// 在任意值上访问任何属性都是允许的：
//有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
//这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
let anyThing: any = 'hello';
console.log(anyThing.myName);//undefined
console.log(anyThing.myName.firstName);//Cannot read property 'firstName' of undefined