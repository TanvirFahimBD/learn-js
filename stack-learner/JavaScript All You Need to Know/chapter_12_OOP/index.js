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

//! 115. Bind, Call, Apply in Javascript
// function myFunc(c, d) {
//     console.log(this);
//     console.log(this.a + this.b + c + d);
// }
// myFunc()

//* call -> (object, parameters)
// myFunc.call({ a: 1, b: 2 }, 3, 4);

//* apply -> (object, parameters into array)
// myFunc.apply({ a: 10, b: 20 }, [30, 40]);

//* bind -> return function (object) & then call the function
// var bindFunc = myFunc.bind({ a: 100, b: 200 });
// bindFunc(300, 400)

//! 116. Pass By Value vs Pass By Reference in Javascript

//* Pass By Value/call by value -> primitive data types not changes globally if primitive data types changes applied. Here we can see variables are immutable objects
// var a = 10

// function byValue(a) {
//     a = 100 + a
//     console.log(a)
// }

// byValue(a)
// console.log(a);

//* Pass By reference/call by reference -> reference data types changes globally if reference data types changes applied. Here we can see objects are mutable objects
// var obj = {
//     a: 10,
//     b: 30
// }

// function byRef(obj) {
//     obj.a = 100 + obj.a
//     obj.b = 100 + obj.b
//     console.log(obj)
// }

// byRef(obj)
// console.log(obj);

//! 118. Private Properties in Javascript
// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height
//     var position = {
//         x: 56,
//         y: -100
//     }

//     var printProperties = function () {
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }.bind(this)

//     this.draw = function () {
//         console.log('I am rectangle');
//         printProperties()
//         console.log("Position: X = " + position.x, "Position: Y = " + position.y)
//     }
// }

// var rect7 = new Rectangle(45, 30)
// rect7.draw()

//! 119. How to Use Getter Setter in Javascript
var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    this.getPosition = function () {
        return position
    }

    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })

    var printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)

    this.draw = function () {
        console.log('I am rectangle');
        printProperties()
        console.log("Position: X = " + position.x, "Position: Y = " + position.y)
    }
}

var rect7 = new Rectangle(45, 30)
// rect7.getPosition()
rect7.position = {
    x: 10,
    y: 674
}
console.log(rect7.position);
