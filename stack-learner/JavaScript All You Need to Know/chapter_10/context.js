// Execution context

function a() {
    b();
    console.log('From A');
}

function b() {
    d();
    console.log('From B');
}

function c() {
    console.log('From C');
}

function d() {
    c()
    console.log('From D');
}

var x = 100
a()
console.log('From Global')


// Execution of context C
// Execution of context D
// Execution of context B
// Execution of context A
// Execution of Global context

// 1. Creational Phase
// 2. Executional Phase