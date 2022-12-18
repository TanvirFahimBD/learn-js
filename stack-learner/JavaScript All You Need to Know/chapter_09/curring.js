function add(a, b, c) {
    return a + b + c;
}

// console.log(add(1, 2, 3))

function curring(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(curring(1)(2)(3));