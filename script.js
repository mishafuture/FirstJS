'use strict';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.list')
        .addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn')) {
                e.target.closest('.paragraph').remove();
            }
        })
});