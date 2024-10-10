'use strict';

let str = "hello world";

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(str));