'use strict';

let tooltipElem;

document.addEventListener('mouseover', (event) => {
    const target = event.target;

    const tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltip');
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    const coords = target.getBoundingClientRect();

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    let left = coords.left + (coords.width - tooltipElem.offsetWidth) / 2;
    if (left < 5) {
        left = coords.left;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
})

document.addEventListener('mouseout', () => {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
})
