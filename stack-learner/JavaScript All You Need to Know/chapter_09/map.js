var arr = [1, 2, 3];

// var randArr = arr.map(function (value) {
//     return Math.random() * 100;
// })
// var sqrArr = arr.map(function (value) {
//     return value * value;
// })

// console.log(arr);
// console.log(randArr);
// console.log(sqrArr);

function myMap(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

var sqrArr = myMap(arr, function (value) {
    return value * value
})

var tenTimeArr = myMap(arr, function (value) {
    return value * 10
})

console.log(arr)
console.log(sqrArr)
console.log(tenTimeArr)


