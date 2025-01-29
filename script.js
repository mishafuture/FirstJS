'use strict';

/*
function memoize(fn) {
    const cache = new Map();

    return function (param) {
        if (cache.has(param)) {
            console.log(`Parameter ${param} has already cashed`);

            return cache.get(param);
        }

        console.log(`Parameter ${param} hasn't cashed`);
        const result = fn(param);
        cache.set(param, result);

        return result;
    }
}

const memoizeOne = memoize((param) =>
    param.toUpperCase());

console.log(memoizeOne('one'));
console.log(memoizeOne('one'));
console.log(memoizeOne('three'));*/

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(`Parameters ${args} has already cashed`);

            return cache.get(key);
        }

        console.log(`Parameters ${args} hasn't cashed`);
        const result = fn(args);
        cache.set(key, result);

        return result;
    }
}

const makeFullName = (fName, lName) => `${fName} ${lName}`
const reduceAdd = (numbers, startValue = 0) => numbers.reduce((total, cur) => total + cur, startValue)

const memoizedFullName = memoize(makeFullName)
const memoizeReduceAdd = memoize(reduceAdd)

memoizedFullName('Marko', 'Polo')
memoizedFullName('Marko', 'Polo') // не выполнится

memoizeReduceAdd([1,2,3,4],5)
memoizeReduceAdd([1,2,3,4],5) // не выполнится
