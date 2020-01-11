var run2 = function (name: string, seq: number = 2,age?:number):void {console.log(`${name} 芳龄 ${age} 家里排行老${seq}`);
}
run2('Hello',18)
run2('Hello')
run2('Hello',3)


var foo=function(a:number,...params:number[]):number{
var p:number=params.reduce((p1,p2)=>p1+p2)
return p+a
}


console.log(foo(1, 2, 3, 4));



function printParam(p:number):void;
function printParam(p:string):void;
function printParam(p:any):void{

if (typeof p === 'string') {
    console.log('it is a string');
    
} else if (typeof p === 'number'){
    console.log('it is a number');
    
}else{
    console.log(typeof p);
    
}

}

printParam('shut up')
printParam(666)
// printParam(true)