function printProp(label: { name: string, age: number }) {
    console.log(label)
}



printProp({ name: 'fang', age: 2222 })


interface Database {
    url: string;
    table?: string;
    // db: string='merlin'; 接口不可初始化
    port: number;
}

function connnect(db: Database) {

    console.log(db);


}
//只能包含url/port
connnect({ url: 'mysql:123.3.3.9', port: 3306 })
var db = { url: 'mysql:123.3.3.9', port: 3306, user: 'admin' }
connnect(db)


interface Encrypt {
    (key: string, value: string): string;
}

var md5: Encrypt = (key, value) => key + value;

console.log(md5('今夜月色很美', '我爱你'));

//可约束数组
interface Arr {
    [index: number]: string
}
var a: Arr = ['e', 'e2']
console.log(a[1]);


//可约束对象，对象所有的值只能说string
interface Obj {
    [index: string]: string
}

var obj: Obj = { name: 'cn' }

console.log(obj['name']);

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

interface EncryptGeneral<T> {
    <T>(key: T, value: T): T;
}

function getEncryption<T> (key: T, value: T): T { return key  }

var sha1: EncryptGeneral<string> = getEncryption;
console.log(sha1('今夜月色很美',''));
