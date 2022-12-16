function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    return cb(c, d)
}

function sum(a, b) {
    return a + b
}

var result = sample(5, 8, sum)
console.log(result)

var result2 = sample(5, 8, function (a, b) {
    return a - b
})
console.log(result2)

var result3 = sample(5, 8, function (a, b) {
    return a * b
})
console.log(result3)