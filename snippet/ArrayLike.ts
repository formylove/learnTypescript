// 类数组（Array - like Object）不是数组类型，比如 arguments：

function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：

function sum() {
    let args: IArguments = arguments;
}
// 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}