class Felidae {
    species: string | undefined;//undefined无需初始化
    constructor() {
        this.species = 'Felidae'
    }

}
class Encyclopedia<T>{
    collect(a: T) {
        console.log(a);
    }
}

var wiki=new Encyclopedia<Felidae>()
wiki.collect(new Felidae)