var Felidae = /** @class */ (function () {
    function Felidae() {
        this.species = 'Felidae';
    }
    return Felidae;
}());
var Encyclopedia = /** @class */ (function () {
    function Encyclopedia() {
    }
    Encyclopedia.prototype.collect = function (a) {
        console.log(a);
    };
    return Encyclopedia;
}());
var wiki = new Encyclopedia();
wiki.collect(new Felidae);
