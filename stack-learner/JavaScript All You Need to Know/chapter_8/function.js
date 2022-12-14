// Chapter eight: function in JS

//What is function

//Input output Processing

// var date = new Date()
// var year = date.getFullYear()
// console.log('year: ', year)

//! 059. Defining a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

function functionName() {
    console.log('I am a function')
}

function add() {
    var a = 10
    var b = 20
    console.log(a + b);
}

function sub() {
    var a = 10
    var b = 20
    console.log(a - b);
}

//! 060. Invoking a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

for (let index = 0; index < 5; index++) {
    functionName()
}

add()
sub()

console.log(add());