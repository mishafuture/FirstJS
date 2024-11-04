"use strict";

console.log(document.querySelectorAll('p'))

function loadScripts(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.append(script);
}

loadScripts("js/test.js");
loadScripts("js/test1.js");