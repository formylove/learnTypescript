interface Itest {
    webName: string;
    age: number;
    address: string
}
type ant = keyof Itest;//type ant = "webName" | "age" | "address"

