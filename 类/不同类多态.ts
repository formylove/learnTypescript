//ypeScript 比较的并不是类型定义本身，而是类型定义的形状（Shape），即各种约束条件：
class Foo {
    method(input: string): number { return 2 }
}

class Bar {
    method(input: string): number { return 1 }
}

const bar: Bar = new Foo(); // Okay.
let x: Foo = new Foo(); // Okay.

export { }

// 之所以 tslint 会提示这个错误，是因为在 Commonjs 规范里，
//没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局，
//因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错。


// 对于这个问题，最简单的解决方法是在报错的文件底部添加一行代码：export { }。
//这行代码会「欺骗」tslint 使其认为当前文件是一个 ESModule 模块，因此不存在变量重复声明的可能性。