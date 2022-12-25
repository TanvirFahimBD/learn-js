import '../styles/index.scss'

// var s = `asdf
// asdf
//     asdf`
// console.log(s.trim())

var age = 23
var name = 'Tanvir Hossain'
console.log(`My name ${name}. My age ${age} so I am ${age > 18 ? ' an' : ' not an'} adult`);

console.log(name.padStart(15, '*'));
console.log(name.padEnd(15, 'a'))
console.log('S'.repeat(10))