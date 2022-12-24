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

//! 131. Calling Super With Call Method in Javascript

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am common method');
}

function Square(width, color) {
    //* super call by passing this not window object call
    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log('Drawing');
}

var sqr = new Square(45, 'green')