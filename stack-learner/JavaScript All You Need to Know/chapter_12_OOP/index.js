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
// Factory Pattern is like object with properties

// var createRect = function (width, height) {
//     return {
//         width: width,
//         height: height,

//         draw: function () {
//             console.log('I am rectangle');
//             this.printProperties()
//             console.log(this)
//         },

//         printProperties: function () {
//             console.log('My width is ' + this.width);
//             console.log('My height is ' + this.height);
//         }
//     }
// }

// var rect1 = createRect(10, 8)
// rect1.draw()

//! 110. Constructor Pattern in Javascript
// Constructor Pattern is like function declaration

// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('I am rectangle');
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }

// var rect1 = new Rectangle(15, 58)
// rect1.draw()

//! 111. New Keyword in Javascript

// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('I am rectangle');
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }

// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj;
// }

// var rect4 = myNew(Rectangle, 45, 30)
// rect4.draw()

//! 112. Factory vs Constructor in Javascript
//Constructor pattern more preferable than factory pattern

//! 113. Constructor Property in Javascript

// var str = new String('str')
// console.log(str.constructor);
// console.log(str);
// console.log('My String is ' + str);

//! 114. Functions Are Object in Javascript
// function test() {
//     console.log('something')
// }

// console.log(test.name, test.length)

// var Rect = new Function('width', 'height',
//     `this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('I am rectangle');
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }`
// )

// var rect5 = new Rect(4, 5)
// console.log(rect5);
// rect5.draw();    