var a = 100
// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a);
}

print(a)

// creational phase
// a = undefined
// newPrint = undefined
// print = ref

// executional phase
// a = 10
// newPrint = ref
// a = 45
// a = 100
