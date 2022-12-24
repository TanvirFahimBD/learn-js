//! 122. Multi Level Inheritance in Javascript
// function Person(name) {
//     this.name = name;
// }

// var p1 = new Person('Tanvir')
// console.log(p1)

//! 123. Property Descriptor in Javascript
// var person = {
//     name: 'Tanvir'
// }

// console.log(person);

// for (var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor);

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'Tanvir Hossain'
// })

//! 124. Constructor Prototype in Javascript
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.PI = 3.1416

// var p1 = new Person('Tanvir')
// var p2 = new Person('Fahim')

// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

//! 125. Instance vs Prototype Members in Javascript
//* Object Instance members
// function Square(width) {
//     this.width = width

//     this.draw = function () {
//         console.log('Draw');
//     }
// }

//* Object Prototype members
// Square.prototype = {
//     draw: function () {
//         console.log('Draw');
//     },
//     toString: function () {
//         return 'My width is: ' + this.width
//     }
// }

// var sqr1 = new Square(10)
// var sqr2 = new Square(5)

//! 126. Using Instance and Prototype Members in Javascript
// function Square(width) {
//     this.width = width
//     this.getWidth = function () {
//         console.log('Width: ' + this.width);
//         // this.draw()
//     }
// }

// Square.prototype = {
//     draw: function () {
//         this.getWidth()
//         console.log('Draw');
//     },
//     toString: function () {
//         return 'My width is: ' + this.width
//     }
// }

// var sqr1 = new Square(10)
// var sqr2 = new Square(5)

// console.log(Object.keys(sqr1));

// for (var i in sqr1) {
//     console.log(i)
// }

//! 129. First Prototypical Inheritance in Javascript
// function Shape() {

// }

// Shape.prototype = {
//     common: function () {
//         console.log('I am common method');
//     }
// }

// function Square(width) {
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)

// Square.prototype.draw = function () {
//     this.getWidth()
//     console.log('Drawing');
// }

// function Circle() {

// }

// Circle.prototype = Object.create(Shape.prototype)

// var shape = new Shape()
// var sqr = new Square(45)
// var circle = new Circle()

//* shape -> Shape -> Object
//* sqr -> Square -> Object
//* sqr -> Square -> Shape -> Object

//! 130. Reset Constructor After Inheritance in Javascript
