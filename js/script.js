"use strict";

let numberOfFilms = prompt('How many films have you watched?', '0');
let lastFilm = prompt('What is the name of the last film you watched?', 'Back to the Future');
let rateLastFilm = prompt('How much did they rate the film??', '1');

let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movie[lastFilm] = rateLastFilm;

// console.log(personalMovieDB);