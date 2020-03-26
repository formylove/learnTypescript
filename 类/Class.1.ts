abstract class Person2 {
    public age: number;
    public name: string; //前面省略了public
    constructor(name1: string, age1: number) {
        this.age = age1
        this.name = name1
    }
   abstract run():void;
}





class Beauty extends Person2 {
    static giniCoefficient:number=0
    constructor(name: string, age: number) {
        super(name, age)
    }
    runTemple(): void {
        console.log(`Temple ${this.name}芳龄${this.age}`);

    }
    run(): void {
        console.log(`implemented ${this.name}芳龄${this.age}`);

    }
}

var beauty = new Beauty('ooooooo', 22)
beauty.run()
beauty.runTemple()

