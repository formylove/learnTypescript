let strInit = "abc";
let strClone = strInit;
strClone = "efg";
console.log(strInit); // 'abc'
let objInit = { a: "aa" };
console.log('类型',typeof objInit);

let objClone = objInit;
console.log(objClone) // {a:"aa"}
objInit.a = "bb";
console.log(objClone); // { a: 'bb' }
console.log(objClone.a); //  'bb' 
console.log(objInit.a); //  'bb' 


let obj2: object
obj2 = { name: 'Lison' }
//必须初始化时候确定所有
// console.log(obj2.name) 找不到name属性 

let c:number[]=[2,34,5]
let d:object[]=[]
d.concat(
c.map(v=>{
    id:v
})
)
console.log(d);
console.log(c.map(v => v+4
));
