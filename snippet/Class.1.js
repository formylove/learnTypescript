var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name1, age1) {
        this.age = age1;
        this.name = name1;
    }
    return Person2;
}());
var Beauty = /** @class */ (function (_super) {
    __extends(Beauty, _super);
    function Beauty(name, age) {
        return _super.call(this, name, age) || this;
    }
    Beauty.prototype.runTemple = function () {
        console.log("Temple " + this.name + "\u82B3\u9F84" + this.age);
    };
    Beauty.prototype.run = function () {
        console.log("implemented " + this.name + "\u82B3\u9F84" + this.age);
    };
    Beauty.giniCoefficient = 0;
    return Beauty;
}(Person2));
var beauty = new Beauty('ooooooo', 22);
beauty.run();
beauty.runTemple();
