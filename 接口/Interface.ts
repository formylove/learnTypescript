interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 111
};


//对类进行约束

interface Animal {
    name: string;
    specie: string;
    eat(food: string): string;
}

class Hyena implements Animal {
    name: string;
    specie: string;
    constructor() {
        this.name = 'hyana'
        this.specie = 'Canidae'
    }
    //方法的signature未必需要相同
    eat(): string {
        return "carnivorous";
    }
}
var hyena: Animal = new Hyena()

console.log(hyena.eat('哦哦哦哦哦'));
var hyena2: Hyena = new Hyena()
console.log(hyena2.eat());

//扩展接口
interface Mammalia extends Animal {
    lactate(): void;
}

class Pongo implements Mammalia {
    name: string;
    specie: string;
    constructor() {
        this.name = 'pongo'
        this.specie = 'Primate'
    }
    //方法的signature未必需要相同
    eat(): string {
        return "omnivorous";
    }
    lactate() {
        console.log(`${this.name} loves  suckling latex`);

    }

}
var pongo = new Pongo
pongo.lactate()



function retrieveHabit<A extends Animal>(animal: A): string {
    return animal.eat('')
}
console.log('pongo\'s ', retrieveHabit<Pongo>(pongo));

