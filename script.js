'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('test', 'test1', 'basic', 'info', 'user');

function calcOrDouble(num, basis = 2) {
    console.log(num * basis);
}

calcOrDouble(4, 5);
calcOrDouble(5);

