'use strict';

function Example(name, text) {
    this.name = name;
    this.text = text;
    this.getThis = () => this;
}
//Example.prototype = 42;

const example = new Example('test', 'some text');
const example1 = new Example('test1', 'some text1');
console.log(example.getThis());

Example.prototype.getName = function () {
    return this.name;
}

console.log(example1.getName());
console.log(example.getName());