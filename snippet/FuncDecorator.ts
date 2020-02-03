import { func } from "./Type";

class Animal2 {
    species: string = 'bowerBird'

    @excretion('loose bowels')
    poop() {

        return this.species

    }
}
function excretion(param: string) {
    return function (target: any, methodName: any, desc: any) {
        console.log(methodName);
        console.log(desc);
        console.log(param);
        // var onMethod = desc.value
        // desc.value=()=>console.log('replaced');
        
        target.eat='omnivorous'



    }
}
var a:Animal2=new Animal2
console.log(a.eat);
a.poop()
