type Result = { status: 'ok' } | { status: 'error', reason: string };
type Result2 = { status: string } ;

function test(param: Result) {
    console.info(param)
}

function test2(param: Result2) {
    console.info(param)
}


test({status:'ok'})
// test({status:'error'}) 不行

test2({status:'ppp'})