var persons = [
    { name: 'A', age: 24 },
    { name: 'B', age: 19 },
    { name: 'C', age: 26 },
    { name: 'D', age: 21 },
]

var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 0, 8, 2, -1, 7];

// arr.sort()
// console.log(arr)

// var ascOrder = arr.sort(function (a, b) {
//     if (a > b) return 1;
//     else if (a < b) return -1;
//     else return 0;
// })

// var desOrder = arr.sort(function (a, b) {
//     if (a > b) return -1;
//     else if (a < b) return 1;
//     else return 0;
// })

// console.log(ascOrder);
// console.log(desOrder);

// persons.sort(function (a, b) {
//     if (a.age > b.age) return 1;
//     else if (a.age < b.age) return -1;
//     else return 0;
// })

// persons.sort(function (a, b) {
//     if (a.name > b.name) return 1;
//     else if (a.name < b.name) return -1;
//     else return 0;
// })

// console.log(persons)

// var res1 = arr.every(function (value) {
//     return value % 2 === 0
// })

// console.log(res1);

// var res2 = arr.every(function (value) {
//     return value >= 0
// })

// console.log(res2);

var res3 = arr.some(function (value) {
    return value % 2 === 0
})

console.log(res3);

var res4 = arr.some(function (value) {
    return value < 0
})

console.log(res4);