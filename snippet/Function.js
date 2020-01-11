var run2 = function (name, seq, age) {
    if (seq === void 0) { seq = 2; }
    console.log(name + " \u82B3\u9F84 " + age + " \u5BB6\u91CC\u6392\u884C\u8001" + seq);
};
run2('Hello', 18);
run2('Hello');
run2('Hello', 3);
var foo = function (a) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var p = params.reduce(function (p1, p2) { return p1 + p2; });
    return p + a;
};
console.log(foo(1, 2, 3, 4));
function printParam(p) {
    if (typeof p === 'string') {
        console.log('it is a string');
    }
    else if (typeof p === 'number') {
        console.log('it is a number');
    }
    else {
        console.log(typeof p);
    }
}
printParam('shut up');
printParam(666);
// printParam(true)
