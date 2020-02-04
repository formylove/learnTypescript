// 也可以使用数组泛型（Array Generic） Array < elemType > 来表示数组：


var arr: Array<Number> = [1, 2, 3]

console.info(arr)
//??arr????????
var arr: Number[] = [4, 7, 8, 1, 2, 3]
console.info(arr)

var arr2: any[] = [4, 7, 8, 1, 2, 3, 'u r sick']
console.info(arr2)

var tp: [Number, String] = [4, 'wuqing']
console.info(tp)