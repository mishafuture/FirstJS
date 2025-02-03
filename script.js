'use strict';

const tGrid = document.querySelector('#grid');

tGrid.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName.toLowerCase() !== 'th') return;

    const thIndex = target.cellIndex;
    const type = target.dataset.type;
    const tbody = tGrid.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    const sortedRows = rows.sort((rowA, rowB) => {
        const a = rowA.cells[thIndex].innerText.trim();
        const b = rowB.cells[thIndex].innerText.trim();

        if (type === 'number') {
            return a - b;
        }
        else if (type === 'string') {
            return (a.toLowerCase()).localeCompare(b.toUpperCase());
        }
        return new Error('Inappropriate data type');
    })

    tbody.append(...sortedRows);
})