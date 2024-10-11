"use strict";

let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = prompt('How many films have you watched?', '0');

    while (numberOfFilms === '' ||
        numberOfFilms === null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many films have you watched?', '0');
    }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
    if (numberOfFilms < 10)
        console.log('Few films were watched');
    else if (numberOfFilms < 30)
        console.log('You are an ordinary viewer');
    else if (numberOfFilms >= 30)
        console.log('You are a movie buff');
    else
        console.log('Error');
}

function showMyDB(hidden) {
    if (!hidden)
        console.log(personalMovieDB);
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB["genres"][i]
            = prompt(`What\'s your number ${i + 1} favorite genre?`);
    }
}

/*start();
rememberMyFilms();
detectPersonalLevel();*/
showMyDB(personalMovieDB.privat);
// writeYourGenres();