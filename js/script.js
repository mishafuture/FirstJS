"use strict";

let personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,

    start: function start() {
        this.count = prompt('How many films have you watched?', '0');

        while (this.count === '' ||
        this.count === null ||
        isNaN(this.count)) {
            this.count = prompt('How many films have you watched?', '0');
        }
    },

    rememberMyFilms: function rememberMyFilms() {
        let countFilmsRequest = 2;
        let i = 0;

        while (i < countFilmsRequest) {
            let lastFilm = '';
            let rate = '';

            do {
                lastFilm = prompt('What is the name of the last film you watched?',
                    'Back to the Future').trim();
                rate = prompt('How much did they rate the film??',
                    '1').trim();
            }
            while (lastFilm === null ||
            lastFilm === '' ||
            lastFilm.length > 50 ||
            rate === null ||
            rate === '');

            this.movie[lastFilm] = rate;

            i++;
        }
    },

    detectPersonalLevel: function detectPersonalLevel() {
        if (this.count < 10)
            console.log('Few films were watched');
        else if (this.count < 30)
            console.log('You are an ordinary viewer');
        else if (this.count >= 30)
            console.log('You are a movie buff');
        else
            console.log('Error');
    },

    showMyDB: function showMyDB() {
        if (!this.privat)
            console.log(personalMovieDB);
    },

    writeYourGenres: function writeYourGenres() {
        let answer = '';

        for (let i = 0; i < 3; i++) {
            answer = prompt(`What\'s your number ${i + 1} favorite genre?`, '');

            if (answer === null || answer.trim() === '')
                i--;
            else
                this.genres.push(answer);
        }

        this.genres.forEach((genre, index) => {
           console.log(`My favorite genre #${++index} is ${genre}`);
        });
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
}

/*personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();*/
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
