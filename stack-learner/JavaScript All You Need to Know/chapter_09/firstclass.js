// First class function

function add(a, b) {
    return a + b;
}

// 1. A function can be stored in a variable
var sum = add
// console.log(sum(5, 6));
// console.log(typeof sum)

// 2. A function can be stored in an array
// var arr = []
// arr.push(sum)
// console.log(arr[0](5, 3));

// 3. A function can be stored in an object
// var obj = {
//     sum: add
// }

// console.log(obj)
// console.log(obj.sum(5, 7))

// 4. We can create a function as need
setTimeout(function () {
    console.log('Call after 2 seconds');
}, 2000)


// 5. We can pass function as an arguments

// 6. We can return a function from another function