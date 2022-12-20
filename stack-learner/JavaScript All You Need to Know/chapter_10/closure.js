//closure is when a function is able to remember & access it's lexical scope even when that function executing outside it lexical scope

function test() {
    var msg = 'I am learning lexical scope and closure'

    return function () {
        console.log(msg);
    }
}

var sayMsg = test()
sayMsg()