var a = 'abc'
/*  */

// if (true) {
//     var b = 'i am b'
// }

// console.log('b', b)

// function x() {
//     var a = 20;
//     function y() {
//         // var a = 10;
//         console.log(a);
//     }
//     console.log(a)
//     y()
// }

// x()

function test(n) {
    function a() {
        return n % 3 === 0
    }

    function b() {
        return n % 5 === 0
    }

    if (a() && b()) {
        console.log(n + ' is divisible by 3 & 5')
    } else {
        console.log('Both are no divisible by 3 & 5')
    }
}

test(15)