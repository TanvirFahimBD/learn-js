// class - class is just a factory to create multiple object without code duplication

// Ex: cake frame, student info form 

class React {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculateRange() {
        return 2 * this.width * this.height;
    }
}

var react = new React(10, 20)
var react1 = new React(70, 46)
var react2 = new React(7, 6)