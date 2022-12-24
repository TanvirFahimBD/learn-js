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

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method');
// }

// function Square(width, color) {
//* super call by passing this not window object call
//     Shape.call(this, color)
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Square.prototype.draw = function () {
//     console.log('Drawing');
// }

// var sqr = new Square(45, 'green')

//! 132. Creating Extends Function in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method');
// }

// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Square)

// Square.prototype.draw = function () {
//     console.log('Drawing');
// }

// var sqr = new Square(45, 'green')

// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }
// extend(Shape, Circle)

//! 133. Method Overriding in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method');
// }

// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Square)

// Square.prototype.draw = function () {
//     console.log('Drawing');
// }

// var sqr = new Square(45, 'green')

// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }
// extend(Shape, Circle)

// Circle.prototype.common = function () {
//     Shape.prototype.common.call(this)
//     console.log('I am calling from circle and overriding')
// }

// var c = new Circle(4, 'Black')

//! 134. Polymorphism in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method');
// }

// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Square)

// Square.prototype.common = function () {
//     console.log('I am calling from square and i have overridden');
// }

// var sqr = new Square(45, 'green')

// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }
// extend(Shape, Circle)

// Circle.prototype.common = function () {
//     Shape.prototype.common.call(this)
//     console.log('I am calling from circle and overriding')
// }

// var c = new Circle(4, 'Black')
// var s = new Shape('Purple')

// var shapes = [s, sqr, c]
// for (var i of shapes) {
//     i.common()
// }

//! 135. When to Use Inheritance in Javascript
//* for 2/3 stage hierarchy use otherwise OOP composition use

//! 136. Inheritance & Composition Mixing in Javascript

function mixin(target, ...source) {
    Object.assign(target, ...source);
}

var canWalk = {
    walk: function () {
        console.log('walking...');
    }
}

var canEat = {
    eat: function () {
        console.log('Eating...');
    }
}

var canSwim = {
    swim: function () {
        console.log('Swimming...');
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Tanvir'

function Person(name) {
    this.name = name;
}
// Object.assign(Person.prototype, canWalk, canEat);
mixin(Person.prototype, canWalk, canEat);

var person = new Person('Tanvir');
console.log(person)

function GoldFish(name) {
    this.name = name;
}
mixin(GoldFish.prototype, canSwim, canEat);

var goldFish = new GoldFish('Gold color fish')
console.log(goldFish);