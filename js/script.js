'use strict';

/*
const asw = prompt('What is your name?', 'Misha');
const reg = /i/ig;

console.log(asw.match(reg));*/

/*const password = prompt('Password');
console.log(password.replace(/./g, '*'));*/

const asw = 'mis_ko@g.co';
const emailCheck = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
console.log(emailCheck.test(asw));
