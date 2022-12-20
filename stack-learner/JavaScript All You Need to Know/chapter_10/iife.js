//096. Closure and Loops in Javascript
//IIFE - immediately invoking function expression

for (var index = 1; index <= 5; index++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(index)
}