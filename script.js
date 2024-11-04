'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log(box);
    }
});

console.log(boxesQuery[0].closest('.container'));

console.log(boxesQuery);
console.log(boxesGet);