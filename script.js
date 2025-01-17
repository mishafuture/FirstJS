"use strict";

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(array, fn) {
        if (!Array.isArray(array) || !array.length || typeof fn !== 'function')
            return [];

        const newArray = [];

        array.forEach(item => {
            newArray.push(fn(item));
        });

        return newArray;
}

console.log(strArray);
console.log(mapForEach(strArray, function (item) {
    return item.length;
}));

function filter(array, fn) {
    if (!Array.isArray(array) || !array.length || typeof fn !== 'function')
        return [];

    const newArray = [];

    array.forEach(item => {
        if (fn(item)) {
            newArray.push(item);
        }
    });

    return newArray;
}

console.log(filter(strArray, function (item) {
    return item.length > 3;
}));

const numArray = [1, 2, 3, 4, 5];

function reduce(array, fn, initialValue) {
    if (!Array.isArray(array) || !array.length || typeof fn !== 'function')
        return [];

    const hasInitialValue = initialValue !== undefined;
    let accumulator = hasInitialValue ? initialValue : array[0];

    for (let i = hasInitialValue ? 0 : 1; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], array);
    }

    return accumulator;
}

console.log(reduce(numArray, function (accumulator, currentValue) {
    return accumulator + currentValue;
}));