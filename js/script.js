'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Kovalov';

    sayHello() {
        console.log(`Hello, ${this.name} ${this.#surname} with age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    get surname() {
        return this.#surname;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110)
            this._age = age;
        else
            console.log('age must be positive integer but not more than 110');
    }

    set surname(surname) {
        if (surname.length < 4) {
            console.log('surname must be at least 4 characters long');
        } else {
            this.#surname = surname;
        }
    }
}

const misha = new User("Misha", 22);
misha.age = 24;
misha.sayHello();
console.log(misha.name + ' ' + misha.age);
console.log(misha.surname + ' ' + misha.age);