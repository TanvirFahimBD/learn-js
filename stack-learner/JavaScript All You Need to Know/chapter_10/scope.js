var x = 55

function test() {
    var x = 34
    // console.log(y);

    function nested() {
        var y = 65
        console.log(x)
    }

    // console.log(y);
    nested();
}

test()