"use strict";

const num = 37;

(num % 2 === 0) ? console.log(`Number ${num} is even`) : console.log(`Number ${num} is odd`);

switch (num) {
    case 0:
        console.log(`Number is 0`);
        break;

    case 1:
        console.log(`Number is 1`);
        break;

    default:
        console.log('Exit');
        break;
}

// console.log(personalMovieDB);