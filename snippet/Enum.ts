enum Flag {
    SUCCESS = 'You tell me',
    ERROR = 10086,
    CHAOS//?????10086
}
enum color={ red = 1, green, blue }
let colorName: string = color[2];

var flag2: Flag = Flag.SUCCESS
console.error(flag2 == Flag.SUCCESS)
console.error(flag2 == 'You tell me')//true
console.error(flag2);
console.error(Flag.ERROR);
console.error(Flag.SUCCESS);
console.error(Flag.CHAOS);

