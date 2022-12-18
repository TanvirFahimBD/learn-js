// function greet(msg) {
//     function greeting(name) {
//         return msg + ', ' + name + '!';
//     }
//     return greeting
// }

// var gm = greet('Good morning')
// var gn = greet('Good night')
// var gb = greet('Good bye')
// // console.log(typeof grt);
// console.log(gm('Tanvir'))
// console.log(gn('Tanvir'))
// console.log(gb('Tanvir'))

function base(b) {
    var res = 1;
    return function (num) {
        for (let index = 0; index < b; index++) {
            res *= num
        }
        return res
    }
}

var base10 = base(10)
console.log(base10(2))