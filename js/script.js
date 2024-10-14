'use strict';

let obj = {
    name: 'Misha',
    age: 21,
    password: '123456',
    favoriteColors: ['red', 'green', 'blue'],
    favoriteMovies: {
        StarWars: 10,
        HarryPotter: 9
    },
    makeTest: function() {
        console.log('Make test');
    }
};

/*
console.log(obj);

delete obj.password;

console.log(obj);

for (let key in obj) {
    if (Object.is(typeof obj[key], "object")) {
        console.log(`Complex property ${key} includes`);
        for (let subKey in obj[key]) {
            console.log(`\tProperty: ${subKey} is ${obj[key][subKey]}`);
        }
    }
    else
        console.log(`Property: ${key} is ${obj[key]}`);
}

console.log(Object.keys(obj).length);
obj.makeTest();*/

console.log(obj["favoriteMovies"]["StarWars"]);

const {StarWars, HarryPotter} = obj["favoriteMovies"];

console.log(StarWars);