 var flag:boolean=true//?????

// flag=123 报错

flag=false

console.info(flag)



export var arr:Array<Number>=[1,2,3]

console.info(arr)
//??arr????????
var arr: Number[] = [4, 7, 8, 1, 2, 3]
console.info(arr)

var arr2: any[] = [4, 7, 8, 1, 2, 3,'u r sick']
console.info(arr2)

var tp: [Number,String]=[4,'wuqing']
console.info(tp)

enum Flag{
    SUCCESS ='You tell me',
    ERROR=10086,
    CHAOS//?????10086
}

var flag2:Flag=Flag.SUCCESS
console.error(flag2==Flag.SUCCESS)
console.error(flag2 == 'You tell me')//true
console.error(flag2);
console.error(Flag.ERROR);
console.error(Flag.SUCCESS);
console.error(Flag.CHAOS);


var a:any=123
var a: any ='dont touch, it works'
// var a: any =document.getElementsByTagName('body')
console.info(a)


var num:undefined
console.info(num)
var n:undefined | number//??????
n=666
console.info(n)

var s:null |number
// console.info('s:null |number ?????',s) ??????s??
s=888
s=null
// s=undefined ??

function run():void{

    console.log('all in all');

}
run()

var b:never
// b=(()=>{throw new Error('that an error')})()


 var func=()=>console.info('export successfully')
 export{func,flag}