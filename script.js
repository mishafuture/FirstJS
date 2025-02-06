'use strict';

function formatDate(date) {
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();

    console.log(diffTime);

    if (diffTime < 1000) {
        return 'прямо сейчас';
    }
    else if (diffTime < 60 * 1000) {
        return `${Math.floor(diffTime / 1000)} сек назад`
    }
    else if (diffTime < 60 * 60 * 1000) {
        return `${Math.floor(diffTime / 60 / 1000)} мин назад`
    }
    else {
        const d = [
            '0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes(),
        ].map(elem => elem.slice(-2));

        return d.slice(0, 3).join('.') + ', ' + d.slice(-2).join(':');
    }
}

/*
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 29.5 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
*/

alert( formatDate(new Date(new Date - 86400 * 1000)) );