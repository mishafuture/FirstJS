"use strict";

let numberOfFilms = prompt('How many films have you watched?', '0');

let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let countFilmsRequest = 2;
let i = 0;

while (i < countFilmsRequest) {
    let lastFilm = prompt('What is the name of the last film you watched?', 'Back to the Future');
    personalMovieDB.movie[lastFilm] = prompt('How much did they rate the film??', '1');

    i++;
}

console.log(personalMovieDB);