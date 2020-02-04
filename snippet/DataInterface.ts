function printProp(label: { name: string, age: number }) {
    console.log(label)
}



printProp({ name: 'fang', age: 2222 })

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：


interface Person2 {
    readonly name: string;
    [propName: string]: any;
}

let tom2: Person2 = {
    name: 'Tom',
    gender: 'male'
};
// 使用[propName: string]定义了任意属性取 string 类型的值。

// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

interface Database {
    url: string;
    table?: string;
    // db: string='merlin'; 接口不可初始化
    port: number;
}

function connnect(db: Database) {

    console.log(db);


}
//只能包含url/port
connnect({ url: 'mysql:123.3.3.9', port: 3306 })
var db = { url: 'mysql:123.3.3.9', port: 3306, user: 'admin' }
connnect(db)




//可约束数组
interface Arr {
    [index: number]: string
}
var a: Arr = ['e', 'e2']
console.log(a[1]);


//可约束对象，对象所有的值只能说string
interface Obj {
    [index: string]: string
}

var obj: Obj = { name: 'cn' }

console.log(obj['name']);


