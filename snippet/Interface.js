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
