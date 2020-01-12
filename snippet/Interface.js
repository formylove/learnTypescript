function printProp(label) {
    console.log(label);
}
printProp({ name: 'fang', age: 2222 });
function connnect(db) {
    console.log(db);
}
//只能包含url/port
connnect({ url: 'mysql:123.3.3.9', port: 3306 });
var db = { url: 'mysql:123.3.3.9', port: 3306, user: 'admin' };
connnect(db);
var md5 = function (key, value) { return key + value; };
console.log(md5('今夜月色很美', '我爱你'));
var a = ['e', 'e2'];
console.log(a[1]);
var obj = { name: 'cn' };
console.log(obj['name']);
var Hyena = /** @class */ (function () {
    function Hyena() {
        this.name = 'hyana';
        this.specie = 'Canidae';
    }
    //方法的signature未必需要相同
    Hyena.prototype.eat = function () {
        return "carnivorous";
    };
    return Hyena;
}());
var hyena = new Hyena();
console.log(hyena.eat());
var Pongo = /** @class */ (function () {
    function Pongo() {
        this.name = 'pongo';
        this.specie = 'Primate';
    }
    //方法的signature未必需要相同
    Pongo.prototype.eat = function () {
        return "omnivorous";
    };
    Pongo.prototype.lactate = function () {
        console.log(this.name + " loves  suckling latex");
    };
    return Pongo;
}());
var pongo = new Pongo;
pongo.lactate();
function retrieveHabit(animal) {
    return animal.eat('');
}
console.log('pongo\'s ', retrieveHabit(pongo));
function getEncryption(key, value) { return key; }
var sha1 = getEncryption;
console.log(sha1('今夜月色很美', ''));
