 var flag:boolean=true//?????

// flag=123 报错

flag=false
let num2: 0xd000;

console.info(flag)



var a:any=123
var a: any ='dont touch, it works'
// var a: any =document.getElementsByTagName('body')
console.info(a)

//?????null?undefined?????????? ??????? null?undefined???number??????
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

// ??never??????????????
function error(message: string): never {
    throw new Error(message);
}


//????
let str: any = "this is a number";
let strlength: number = (<string>str).length
// ? tsx ???React ? jsx ??? ts ??????as?

// ?????????????????????????

let strlength2: number = (str as string).length


 var func=()=>console.info('export successfully')
 export{func,flag}