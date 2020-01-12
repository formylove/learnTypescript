"use strict";
exports.__esModule = true;
var flag = true; //?????
exports.flag = flag;
// flag=123 报错
exports.flag = flag = false;
console.info(flag);
var arr = [1, 2, 3];
console.info(arr);
//??arr????????
var arr = [4, 7, 8, 1, 2, 3];
console.info(arr);
var arr2 = [4, 7, 8, 1, 2, 3, 'u r sick'];
console.info(arr2);
var tp = [4, 'wuqing'];
console.info(tp);
var Flag;
(function (Flag) {
    Flag["SUCCESS"] = "You tell me";
    Flag[Flag["ERROR"] = 10086] = "ERROR";
    Flag[Flag["CHAOS"] = 10087] = "CHAOS"; //?????10086
})(Flag || (Flag = {}));
var flag2 = Flag.SUCCESS;
console.error(flag2 == Flag.SUCCESS);
console.error(flag2 == 'You tell me'); //true
console.error(flag2);
console.error(Flag.ERROR);
console.error(Flag.SUCCESS);
console.error(Flag.CHAOS);
var a = 123;
var a = 'dont touch, it works';
// var a: any =document.getElementsByTagName('body')
console.info(a);
var num;
console.info(num);
var n; //??????
n = 666;
console.info(n);
var s;
// console.info('s:null |number ?????',s) ??????s??
s = 888;
s = null;
// s=undefined ??
function run() {
    console.log('all in all');
}
run();
var b;
// b=(()=>{throw new Error('that an error')})()
var func = function () { return console.info('export successfully'); };
exports.func = func;
