var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var evenArr = arr.filter(function (value) {
//     return value % 2 === 0
// })

// var oddArr = arr.filter(function (value) {
//     return value % 2 === 1
// })

// var greaterArr = arr.filter(function (value) {
//     return value > 4
// })

// console.log(evenArr);
// console.log(oddArr);
// console.log(greaterArr);

function myFilter(arr, cb) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}

myFilter(arr, function (value) {
    return value % 2 === 0;
})

myFilter(arr, function (value) {
    return value % 2 === 1;
})

myFilter(arr, function (value) {
    return value > 4;
})