'use strict';

function readNumber() {
    let num;

    do {
        num = prompt("Enter your number", "");
    }
    while (!isFinite(num));

    return (num === null || num === '') ? null : parseInt(num);
}

alert(readNumber());