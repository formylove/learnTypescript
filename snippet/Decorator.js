"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function Land(target) {
    target.prototype.run = function () {
        console.log('as fast as possible');
    };
    target.prototype.species = 'cheetah';
}
function Social(param) {
    console.log(param);
    return function (target) {
        console.log(target);
        target.prototype.daltonism = true;
    };
}
function Bionic(target, attr) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bionic = false; //重载类的构造函数
            return _this;
        }
        return class_1;
    }(target));
}
function protectLevel(value) {
    return function (target, attr) {
        console.log('begin protect level');
        console.log('target', target);
        console.log('attr', attr);
        console.log('当前 value', target[attr]);
        console.log('待设置 value', value);
        target[attr] = value;
        console.log('end protect level');
    };
}
var Animal2 = /** @class */ (function () {
    function Animal2() {
        this.protectLevel = '顶级';
        this.bionic = true;
    }
    __decorate([
        protectLevel('Ⅳ')
    ], Animal2.prototype, "protectLevel");
    Animal2 = __decorate([
        Land,
        Bionic,
        Social('gregarious ')
    ], Animal2);
    return Animal2;
}());
var a = new Animal2();
console.log(a.species);
console.log(a.daltonism);
console.log(a.bionic);
console.log(a.protectLevel);
a.run();
