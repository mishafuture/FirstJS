'use strict';

function addSpan() {
    document.querySelector('.life-forms')
        .querySelectorAll('li').forEach(li => {
            const span = document.createElement('span');

            li.prepend(span);
            span.append(span.nextSibling);
    })
}

window.addEventListener('DOMContentLoaded', () => {
    addSpan();

    document.querySelector('.life-forms')
        .addEventListener('click', (event) => {
            const target = event.target;

            if (target.tagName.toLowerCase() === 'span') {
                const childrenContainer = target.parentNode.querySelector('ul');

                if (childrenContainer) {
                    childrenContainer.hidden = !childrenContainer.hidden;
                }
            }
    })
});