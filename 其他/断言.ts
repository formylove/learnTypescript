// 也可以使用数组泛型（Array Generic） Array < elemType > 来表示数组：


function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}