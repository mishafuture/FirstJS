"use strict";

let numberOfFilms = prompt('How many films have you watched?', '0');

// console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

// console.log(personalMovieDB);