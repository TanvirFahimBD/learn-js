//! 169. Error in Javascript 
// let n = 40

// if (n > 30) {
//     throw new RangeError("The number is too long")
// }

//! 170. Error Handling with If Else in Javascript
//* NaN === NaN  // -> false
// function changeToInt(v) {
//     let result = Number.parseInt(v)
//     if (!result) {
//         return 'Please provide an value which is possible to convert into an integer'

//     }
//     return result
// }

// let result = changeToInt('45')
// console.log(result);

//! 171. Error Handling with Try Catch in Javascript
// function makeWords(text) {
//     try {
//         let str = text.trim()
//         let words = str.split(' ')
//         return words
//     } catch (e) {
//         // return e.message;
//         return 'Please provide a valid text';
//     }
// }

// let words = makeWords('           I am Tanvir    ')
// console.log(words)

//! 172. Throwing an Error in Javascript
// try {
//     console.log('I line 1');
//     throw new Error('I am your error')
//     console.log('I line 2');
//     console.log('I line 3');
// } catch (e) {
//     console.log(e.message);
// }

//! 173. Finally Block in Javascript
// try {
//     console.log('I line 1');
//     // throw new Error('I am your error')
//     console.log('I line 2');
//     console.log('I line 3');
// } catch (e) {
//     console.log(e.message);
// } finally {
//     console.log('I am finally block');
// }

//! 174. Optional Catch Binding in Javascript
// try {
//     console.log('I line 1');
//     throw new Error('I am your error')
// } catch {
//     console.log('This is a custom error message');
// } finally {
//     console.log('I am finally block');
// }

//! 175. Custom Error in Javascript 
class CustomError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try {
    console.log('I line 1');
    throw new CustomError('I am your error')
} catch (e) {
    console.dir(e);
    // console.log(e.message);
    console.log('This is a custom error message');
} finally {
    console.log('I am finally block');
}