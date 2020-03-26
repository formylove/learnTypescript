import { func } from "../类型/Type";


function Land(target: any) {
    target.prototype.run = () => {
        console.log('as fast as possible');
    }

    target.prototype.species = 'cheetah'

}

function Social(param: string) {
    
    console.log(param);

    return function (target: any) {
        console.log(target);
        target.prototype.daltonism = true
    }

}

function Bionic(target: any,attr:string) {
    return class extends target {
        public bionic: boolean = false//重载类的构造函数
    }

}
function protectLevel(value:string) {
    return function(target:any,attr:string) {
        console.log('begin protect level');
        
        console.log('target',target);
        console.log('attr',attr);
        console.log('当前 value', target[attr]);
        console.log( '待设置 value',value);
        target[attr]=value
        console.log('end protect level');
        
        
    }

}

@Land
@Bionic
@Social('gregarious ')
class Animal2 {
    @protectLevel('Ⅳ')
    public protectLevel:string | undefined='顶级'
    public bionic=true
    constructor() { }
}






var a=new Animal2()
console.log(a.species);
console.log(a.daltonism);
console.log(a.bionic);
console.log(a.protectLevel);
a.run()
