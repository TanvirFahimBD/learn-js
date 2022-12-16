function add(a, b) {
    return a + b;
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    return function () {
        var m = func(c, d)
        return c * d * m
    }
}

var multi = manipulate(4, 3, add)
console.log(multi())