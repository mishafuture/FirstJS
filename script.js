'use strict';

/*
const cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        console.log(user.name + ' has been cached');
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let anna = {name: 'anna'};
const ben = {name: 'ben'};
cacheUser(anna);
cacheUser(anna);
cacheUser(ben);

anna = null;

console.log(cache.has(anna));
console.log(cache.has(ben));*/

/*
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Anna'},
    {text: 'Hi', from: 'Misha'},
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[2]);

let sym = Symbol(2);

readMessages.add(sym);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));
console.log(readMessages.has(messages[2]));
*/

// Выполняем `fn` для всего, что хранится внутри объекта.
function execRecursively(fn, subject, _refs = new WeakSet()) {
    // Избегаем бесконечно рекурсии
    if (_refs.has(subject)) {
        return;
    }

    fn(subject);
    if (typeof subject === "object" && subject) {
        _refs.add(subject);
        for (const key in subject) {
            execRecursively(fn, subject[key], _refs);
        }
        _refs.delete(subject);
    }
}

const foo = {
    foo: "Foo",
    bar: {
        bar: "Bar",
    },
};

foo.bar.baz = foo; // Циклическая ссылка!
execRecursively((obj) => console.log(obj), foo);

