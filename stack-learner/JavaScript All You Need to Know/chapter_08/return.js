// function addAll() {
//     var sum = 0
//     for (let index = 0; index < arguments.length; index++) {
//         sum += arguments[index]
//     }
//     return sum;
// }

// const result = addAll(10, 20, 30)
// console.log('result:', result);

function person(name, email) {
    return {
        name,
        email
    };
    console.log('Will not show')
}

const personInfo = person('Tanvir', 'tanvir@gmail.com')
console.log('personInfo:', personInfo);