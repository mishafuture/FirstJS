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
    let lastFilm = '';
    let rate = '';

    do {
        lastFilm = prompt('What is the name of the last film you watched?', 'Back to the Future');
        rate = prompt('How much did they rate the film??', '1');
    }
    while (lastFilm === null ||
        lastFilm === '' ||
        lastFilm.length > 50 ||
        rate === null ||
        rate === '');

    personalMovieDB.movie[lastFilm] = rate;

    i++;
}

if (numberOfFilms < 10)
    console.log('Few films were watched');
else if (numberOfFilms < 30)
    console.log('You are an ordinary viewer');
else if (numberOfFilms >= 30)
    console.log('You are a movie buff');
else
    console.log('Error');

console.log(personalMovieDB);