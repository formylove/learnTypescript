function Person(name, age) {
    var _this = this;
    this.age = age;
    this.name = name;
    this.run = function () {
        console.log(_this.name, 'i am working out');
    };
}
Person.prototype.work = function () { return console.log('sleep and fuck'); };
var person = new Person('Freud', 222);
person.work();
//静态方法
Person.distinguish = function () { console.log('hohohohohoo'); };
function Girl(name, age) {
    Person.call(this, name, age);
}
//对象冒充不能继承原型链，只能继承构造函数内的方法
var g = new Girl('Freud', 222);
g.run();
//原型链继承
function Boy(name, age) {
}
Boy.prototype = new Person();
var b = new Boy('Freud', 222);
b.work();
