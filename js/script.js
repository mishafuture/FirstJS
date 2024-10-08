"use strict";

top: for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j === 2 && i === 2)
            break top;
        console.log(i + " : " + j);
    }
}