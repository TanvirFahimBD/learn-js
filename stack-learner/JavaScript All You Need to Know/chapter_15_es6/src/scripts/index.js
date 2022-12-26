import '../styles/index.scss'

//! 139. Template String in Javascript
// var s = `asdf
// asdf
//     asdf`
// console.log(s.trim())

// var age = 23
// var name = 'Tanvir Hossain'
// console.log(`My name ${name}. My age ${age} so I am ${age > 18 ? ' an' : ' not an'} adult`);

// console.log(name.padStart(15, '*'));
// console.log(name.padEnd(15, 'a'))
// console.log('S'.repeat(10))

//! 140. Let vs Const vs Var in Javascript
// if (true) {
//     var a = 10
// }

// console.log(a);


// for (var i = 0; i < 10; i++) {
// }
// console.log(i)

//     (function (a) {
//         var abc = 'ABV'
//         console.log(abc)
//     })

//! 141. Arrow Function Syntax in Javascript
// let add = (a, b) => a + b
// console.log(add(10, 20));

// let sqr = a => a * a;
// console.log(sqr(5))

//! 142. Arrow Functions & This in Javascript
//* usestrict mode normal function don't shows object of this gives undefined
//* usestrict mode arrow function shows window object of this
// function testMe() {
//     console.log(this);
// }

// testMe.call({});

// let obj = {
//     name: 'Tanvir Hossain',
//     print: () => {
//         console.log(this)
//     }
// }

// obj.print()

// let obj = {
//     name: 'Tanvir Hossain',
//     print: function () {
//         // let self = this;
//         setTimeout(() => {
//             console.log(`Hello ${this.name}`);
//         }, 1000)
//     }
// }

// obj.print()

//! 143. Default Parameters in Javascript
// function sqr(n = 1) {
//     return n * n
// }

// console.log(sqr())

// function greet(name = 'Tanvir', msg = 'Hello') {
//     console.log(name.length);
//     console.log(`${msg}! ${name}`);
// }

// greet(null, 'Good Morning')

//! 144. Custom Iterable Object in Javascript
// let obj = {
//     start: 1,
//     end: 10,
//     [Symbol.iterator]: function () {
//         let currentValue = this.start
//         const self = this
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value: currentValue > self.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }

// for (let v of obj) {
//     console.log(v)
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

//! 145. Rest & Spread Operator in Javascript
// function sum(...rest) {
//     return rest.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4, 5))

// let a = [1, 2, 3, 4, 5]
// console.log(...a);

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let obj2 = { ...obj }
// let obj3 = obj

// console.log(obj2 === obj) //false
// console.log(obj3 === obj) //true

//! 146. Enhance Object in Javascript
// let a = 10, b = 20
// let obj = {
//     a,
//     b,
//     print() {
//         console.log(this)
//     }
// }
// console.log(obj);
// obj.print()

//! 147. Destructuring in Javascript
// let person = {
//     name: 'John',
//     email: 'john@example.com',
//     address: {
//         city: 'Khulna',
//         country: 'Bangladesh',
//     }
// }

// let { name, email, address: { city, country } } = person;
// console.log(name, email, city, country);

// let arr = [1, 2, 3, 4, 5]
// let [first, second, , , last] = arr;
// console.log(first, second, last);

//! 148. Object From Entries in Javascript
// var obj = {
//     a: 10,
//     b: 20
// };

// console.log(object.entries(obj)); //array

// var objArr = [
//     ['a', 10],
//     ['b', 20],
// ];

// console.log(object.fromEntries(objArr)); //object

//! 149. Symbols in Javascript
// let s1 = Symbol()
// let s2 = Symbol('test symbols')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2);

// let toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }

//! 150. Webpack 4 + Babel 7

//! 151. Iterator Basics in Javascript
// const arr = [1, 2, 3]

// function createIterator(collection) {
//     let i = 0
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]

//             }
//         }
//     }
// }

// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

//! 152. Iterator With Symbol in Javascript
// let arr = [1, 2, 3]
// console.log(arr[Symbol.iterator])
// console.log('str'[Symbol.iterator])

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// let str = str[Symbol.iterator]()

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

//! 153. For of Loop in Javascript
//* complexity less because of only value not index
// for (let v of arr) {
//     console.log(v)
// }

// for (let v of 'Tanvir') {
//     console.log(v)
// }
//* for of not working for object
// let obj = {
//     a: 10,
//     b: 20
// }

// for (let v of obj) {
//     console.log(v)
// }