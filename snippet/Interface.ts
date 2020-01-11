function printProp(label: { name: string, age: number }) {
    console.log(label)
}



printProp({ name: 'fang', age: 2222 })


interface Database {
    url: string;
    port: number;
}

function connnect(db:Database){

console.log(db);


}
//只能包含url/port
connnect({url:'mysql:123.3.3.9',port:3306})
var db = { url: 'mysql:123.3.3.9', port: 3306,user:'admin' }
connnect(db)