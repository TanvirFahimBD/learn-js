// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am rectangle');
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }

// rect.draw()
// rect.height = 100
// rect.draw()

//! 108. "THIS" in Javascript
//3 this terms
// 1. this refers to the object in which object it used
// 2. without object if this is used then it refers to the window object
// 3. depend on executional context this values can be change

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am rectangle');
//         this.printProperties()
//     },

//     printProperties: function () {
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }

// function myFunc() {
//     console.log(this);
//     rect.printProperties()
// }

// myFunc() //-> window object
// new myFunc() //-> blank object


// var another = {
//     width: 12,
//     height: 67,
//     print: rect.printProperties
// }

// another.print()

//! 109. Factory Pattern in Javascript

var createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am rectangle');
            this.printProperties()
            console.log(this)
        },

        printProperties: function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
    }
}

var rect1 = createRect(10, 8)
rect1.draw()

var rect2 = createRect(40, 30)
rect2.draw()