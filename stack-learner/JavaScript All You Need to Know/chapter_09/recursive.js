// function sayHi(n) {
//     if (n === 0) return
//     console.log('Hi i am calling');
//     sayHi(n - 1)
// }

// sayHi(6)

// function sumOfNum(n) {
//     if (n === 1) return 1
//     else return n += sumOfNum(n - 1)
// }

// var sumRes = sumOfNum(5)
// console.log(sumRes)

// function fact(n) {
//     if (n === 1) return 1
//     else return n * fact(n - 1)
// }

// console.log(fact(3));


var arr = [1, 2, 3, 4, 5]

function sumOfArr(arr, lastIndex) {
    if (lastIndex === 0) return arr[0];
    return arr[lastIndex] + sumOfArr(arr, lastIndex - 1)
}

console.log(sumOfArr(arr, arr.length - 1));