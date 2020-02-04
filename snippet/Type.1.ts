type str1 = string;
type str2 = () => string;   //????????????????
type str = str1 | str2;

let s: str = "hello";
let s1: str = () => "heihei";   //??????


type Name = "xiaoming" | "xiaohong" | "xiaozhang";

let theName: Name = "xiaozhang";   //??
//let theName1: Name = "xiaoxue";   //?????????Name???????


// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}