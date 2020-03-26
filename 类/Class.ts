function Person(name:string,age:number) {//实际是个构造函数
    this.age = age;
    this.name = name;
    this.run = () => {
        console.log(this.name,'i am working out');
    }
    return this;

}
var person = new Person('Freud', 222)
Person.prototype.work = () => console.log('sleep and fuck');

person.work()

//静态方法
Person.distinguish = () => { console.log('hohohohohoo'); }

function Girl(name: string, age: number) {
    Person.call(this,name,age)
}
//对象冒充不能继承原型链，只能继承构造函数内的方法
var g = new Girl('Freud', 222)
g.run()

//原型链继承
function Boy(name: string, age: number) {
}
Boy.prototype = new Person()
var b = new Boy('Freud',222)
b.work()