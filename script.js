'use strict';

class Menu {
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
    }

    save() {
        alert('saving...');
    }
    delete() {
        alert('deleting...');
    }
    load() {
        alert('loading...');
    }

    onClick (event) {
        const action = event.target.dataset.action;

        if (action) {
            this[action]();
        }
    }
}

const menu = document.querySelector('.menu');

new Menu(menu);