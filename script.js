"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, backgroundColor) {
        super(width, height);
        this.text = text;
        this.backgroundColor = backgroundColor;
    }

    showMyProps() {
        console.log(`My Props: text '${this.text}' and backgroundColor is ${this.backgroundColor} and has area ${this.calculateArea()}`);
    }
}

const square = new Rectangle(10, 10);
const longRectangle = new Rectangle(20, 100);

console.log(square.calculateArea());
console.log(longRectangle.calculateArea());

const redRectangle = new ColoredRectangleWithText(20, 30, 'New Rectangle', 'red');

redRectangle.showMyProps();