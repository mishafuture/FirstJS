/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const inputMovie = document.getElementsByClassName('adding__input')[0];
    const btnSave = document.getElementsByTagName('button')[0];
    const filmsList = document.querySelector('.promo__interactive-list');
    const isFavorite = document.querySelector('input[type="checkbox"]');

    document.querySelectorAll('.promo__adv img').forEach((img) => {
        img.remove();
    })
    document.querySelector('.promo__genre').innerText = 'Драма';
    document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

    const createList = (path, database) => {
        path.innerHTML = '';

        database.forEach((movie, i) => {
            path.innerHTML += `
            <li class="promo__interactive-item">${++i}. ${movie}
                <div class="delete"></div>
            </li>
            `;
        });

        filmsList.querySelectorAll('.delete')
            .forEach((movie, i) => {
                movie.addEventListener('click', function () {
                    movie.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createList(filmsList, movieDB.movies);
                })
        });
    }

    movieDB.movies.sort();
    createList(filmsList, movieDB.movies);

    btnSave.addEventListener('click', function (event) {
        event.preventDefault();

        let movie = inputMovie.value;

        if (movie) {
            if (movie.length > 21)
                movie = movie.substring(0, 20) + '...';

            movieDB.movies.push(movie);
            movieDB.movies.sort();

            if (isFavorite.checked) {
                console.log("Adding favorite movie " + movie);
                isFavorite.checked = false;
            }


            createList(filmsList, movieDB.movies);

            inputMovie.value = '';
        }


    });
});




