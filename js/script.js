'use strict';

function first() {
    // Do something

    setTimeout(function () {
        console.log('Hello World!');
    }, 1000);
}

function second() {
    console.log('Hello World!1');
}

/*first();
second();*/

function learn(lang, callback) {
    console.log(`I learn ${lang}`);

    callback();
}

function done() {
    console.log('I am done learning project!');
}

learn('Javascript', done);