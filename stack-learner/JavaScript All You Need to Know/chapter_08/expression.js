// anonymous function - function have no name
var add = function (a, b) {
    return a + b;
}

setTimeout(function () {
    console.log('i will call after 5 seconds')
}, 5000)

console.log(add(10, 20));