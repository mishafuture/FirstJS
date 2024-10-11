'use strict';

function loadScripts(src, callback) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScripts('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
    script => {
    alert(`Script ${script} is already loaded.`);
    alert( _ );
});