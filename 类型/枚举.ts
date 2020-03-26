enum Flag {
    SUCCESS = 'You tell me',
    ERROR = 10086,
    CHAOS//?????10086
}
enum color{ red , green, blue }
let colorName: string = color[2];

var flag2: Flag = Flag.SUCCESS
console.error(flag2 == Flag.SUCCESS)
console.error(flag2 == 'You tell me')//true
console.error(flag2);
console.error(Flag.ERROR);
console.error(Flag.SUCCESS);
console.error(Flag.CHAOS);//10087
console.error(color.green);//1
console.error(color.blue);//2
//枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
console.error(Flag[10087]);//CHAOS


