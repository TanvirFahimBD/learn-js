// function add(a, b) {
//     var result = a + b;
//     console.log(result);
// }

// add(10, 20)

var arr1 = [10, 20, 30]
var arr2 = [15, 22, 52]
var arr3 = [16, 27, 31]

function sumOfArray(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    console.log(sum);
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
