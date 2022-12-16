var arr = [1, 2, 3, 44, 5]

// var sum = arr.reduce(function (prev, curr) {
//     return prev + curr
// }, 0)

// var max = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr)
// }, 0)

// var min = arr.reduce(function (prev, curr) {
//     return Math.min(prev, curr)
// }, arr[0])

// console.log(sum)
// console.log(max)
// console.log(min)    

//! acc - accumulator 

function myReduce(arr, cb, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = cb(arr[i], acc)
    }
    return acc
}

var sum = myReduce(arr, function (value, acc) {
    return value + acc
}, 0)

var max = myReduce(arr, function (value, acc) {
    return Math.max(value, acc)
}, arr[0])

var min = myReduce(arr, function (value, acc) {
    return Math.min(value, acc)
}, arr[0])

console.log(sum);
console.log(max);
console.log(min);