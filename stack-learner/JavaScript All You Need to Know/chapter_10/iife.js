//096. Closure and Loops in Javascript
for (var index = 1; index <= 5; index++) {
    setTimeout(function () {
        console.log(index)
    }, 1000 * index)
}