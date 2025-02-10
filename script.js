'use strict';

const addTextBtn = document.querySelector('#add-text'),
    addElemBtn = document.querySelector('#add-element'),
    observableDiv = document.querySelector('#watch-me');

addTextBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Added text';
    observableDiv.append(p);
});

addElemBtn.addEventListener('click', () => {
    const div = document.createElement('div'),
        p = document.createElement('p');
    p.innerText = 'Added element';
    div.append(p);
    observableDiv.append(div);
});



const config = { subtree: true, childList: true },
    observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                const lastNode = mutation.addedNodes[mutation.addedNodes.length - 1];

                if (lastNode instanceof HTMLParagraphElement) {
                    console.log('text added');
                } else if (lastNode instanceof HTMLDivElement) {
                    console.log('div added');
                }
            }
        }
});

observer.observe(observableDiv, config);