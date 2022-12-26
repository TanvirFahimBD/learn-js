'use strict';
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

//! 154. Generators in Javascript
// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* () {
//         let currentValue = this.start;
//         while (currentValue < this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }

// let it = generate()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let arr = [10, 22, 35]
// function* generate(collection) {
//     for (let i = 0; i < collection.length; i++) {
//         yield collection[i];
//     }
// }

// let it = generate(arr)
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//! 155. Set in Javascript
// let set = new Set([1, 2, 3]);
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)

// console.log(set)
// console.log(set.size)

// set.delete(5)
// set.has(3)
// console.log(set);
// console.log(set.keys());
// console.log(set.values());

// let keyIterate = set.values()
// console.log(keyIterate.next());

// for (let v of set) {
//     console.log(v);
// }

// console.log(set.entries());

//! 156. Map in Javascript
// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30],
// ]);

// map.set('d', 40)
// map.set({ name: 'Tanvir' }, 45)

// map.delete('c')

// console.log(map)
// console.log(map.size)
// console.log(map.get('b'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// for (let [k, v] of map) {
//     console.log(v, k)
// }

// map.forEach((v, k) => {
//     console.log(k, v);
// })

//! 157. Weak Set in Javascript

// let a = { a: 10 }, b = { b: 20 }
// let set = new Set([a, b])

// a = null
// console.log(set)

// let arr = [...set]
// console.log(arr[0]);

// let weakSet = new WeakSet([a, b])
// a = null
// console.log(weakSet)
// console.log(weakSet.has(a))

//! 158. Weak Map in Javascript
// let weakMap = new WeakMap([[a, 45], [b, 75]])

// a = null

// console.log(weakMap.get(a));
// console.log(weakMap.has(a));
// console.log(weakMap.has(b));

//! 159. Class in Javascript
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     draw() {
//         console.log('drawing rectangle')
//     }
// }

// let rect1 = new Rectangle(45, 23)
// console.log(typeof Rectangle)

//! 160. Class Properties in Javascript
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.another = function () {

//         }
//     }

//     name = 'Tanvir'
//     test2 = function () {

//     }

//     draw() {
//         console.log('drawing...');
//     }
// }

// let rect2 = new Rectangle(34, 56)
// console.log(rect2)

//! 161. Static Method in Javascript
// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     print() {
//         console.log(this.name, this.email);
//     }

//     static create(str) {
//         let person = JSON.parse(str);
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name": "Tanvir", "email": "tanvir@gmail.com"}'
// let p1 = Person.create(str)
// console.log(p1)
// console.log(p1 instanceof Person)
// p1.print()

//! 162. "This" in Javascript Class
// function Shape() {
//     this.draw = function () {
//         console.log(this);
//     }
// }

// let s1 = new Shape();
// let anotherDraw = s1.draw
// anotherDraw()

// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     print() {
//         console.log(this.name, this.email);
//     }

//     test() {
//         console.log(this);
//     }

//     static create(str) {
//         let person = JSON.parse(str);
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name": "Tanvir", "email": "tanvir@gmail.com"}'
// let p1 = Person.create(str)
// let test = p1.test()
// test()

//! 163. Private Data with Symbol in Javascript
// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle {
//     constructor(radius, name) {
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_draw]() {
//         console.log('Drawing Circle')
//     }
// }

// let c1 = new Circle(2, 'CRED')
// console.log(c1);

// console.log(Object.getOwnPropertyNames(c1));
// let key = Object.getOwnPropertySymbols(c1)[0];
// console.log(c1[key])

//! 164. Private Properties with WeakMap in Javascript
// const _radius = WeakMap()
// const _name = WeakMap()
// const _resize = WeakMap()

// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size)
//         })
//     }

//     draw() {
//         console.log('Drawing Circle')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()

//! 165. Getter & Setter in ES6
// const _radius = WeakMap()
// const _name = WeakMap()
// const _resize = WeakMap()

// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size)
//         })
//     }

//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(v) {
//         _radius.set(this, v)
//     }

//     draw() {
//         console.log('Drawing Circle')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()
// c1.radius = 100
// console.log(c1.radius);

//! 166. Inheritance in ES6 in Javascript
// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     draw() {
//         console.log('drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     calculate() {
//         return this.width * this.height
//     }
// }

// let r = new Rectangle('Green', 4, 5)
// console.log(r);
// r.draw()

//! 167. Method Overriding in ES6 in Javascript
// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     draw() {
//         console.log('drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     draw() {
//         console.log('drawing a rectangle...')
//     }

//     calculate() {
//         return this.width * this.height
//     }
// }

// let r = new Rectangle('Green', 4, 5)
// console.log(r);
// r.draw()

//! 168. ES6 Modules System in Javascript
// import Rectangle from './Rectangle';

// let r = new Rectangle('Green', 4, 5)
// console.log(r);
// r.draw()

// import * as func from './func';

// console.log(func.add(45, 10))
// console.log(func.sub(45, 10))
// console.log(func.times(45, 10))
// console.log(func.div(45, 10))

// import { add, sub, times, div } from './func';

// console.log(add(45, 10))
// console.log(sub(45, 10))
// console.log(times(45, 10))
// console.log(div(45, 10))