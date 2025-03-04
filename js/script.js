'use strict';
/*

const person = {
    name: 'John',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}

console.log(person.userAge = -5);
console.log(person.userAge);*/

const person = {
    get name() {
        return this._name;
    },

    set name(name) {
        if (name.length < 3) {
            console.error('Name should be at least 3 characters long.');
            return;
        }
        this._name = name;
    }
}

person.name = 'Ra';
console.log(person.name);

person.name = 'Misha';
console.log(person);