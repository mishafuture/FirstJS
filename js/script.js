'use strict';

let str = "hello world";

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let convertedStr = str.toLowerCase();

    return convertedStr.includes('viagra') ||
        convertedStr.includes('xxx');
}

function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength-1) + '…' : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
