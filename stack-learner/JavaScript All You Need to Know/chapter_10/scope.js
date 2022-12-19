var x = 55

function test() {
    var x = 34
    // console.log(y);

    function nested() {
        var y = 65
        console.log(x)
    }

    // console.log(y);
    nested();
}

test()

// lexical scope - small part token set each variable scope which means from where it can access when it goes to compiler or engine

var a = 11

function A() {
    var b = 12
    function B() {
        var c = 23
        console.log(c)
    }

    function C() {
        var d = 56
        console.log(d);
    }
    console.log(b)
    D()
    B()
    C()
}

function D(n) {
    return a + n
}

//A() -> a, b, B(), C(), D()
//B() -> a, b, c, C(), D()
//C() -> a, b, d, C(), D()
//D() -> a, n , A()