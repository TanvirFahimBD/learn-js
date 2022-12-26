import Shape from "./Shape";

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log('drawing a rectangle...')
    }

    calculate() {
        return this.width * this.height
    }
}

export default Rectangle