"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    let startTime;
    let betw = {}
    let endTime;

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();

        startTime = new Date().getTime();
        betw.x = e.changedTouches[0].pageX;
        betw.y = e.changedTouches[0].pageY;
    }, false);

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();

        endTime = new Date().getTime();
        if (e.changedTouches[0].pageX === betw.x && e.changedTouches[0].pageY === betw.y &&
            (endTime - startTime) > 800) {
            console.log("It was long tap");
        }
        else
            console.log("It was common tap");
    }, false);

/*    box.addEventListener('touchmove', (e) => {
        console.log('move');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', () => {
        console.log('end');
    });*/
});