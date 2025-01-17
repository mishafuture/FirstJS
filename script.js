"use strict";

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getValue: function () {
            return count;
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
counter.decrement();
console.log(counter.getValue());

const counter1 = {
    count: 0,
    increment: function () {
        this.count += 1;
    },
    decrement: function () {
        this.count -= 1;
    },
    getValue: function () {
        return this.count;
    }
}

/*class Menu {
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
    }

    getPersonInfo() {
        const name = document.querySelector("#nameInput").value;
        const age = document.querySelector("#ageInput").value;

        return [name, age];
    }

    add() {
        const newTr = document.createElement("tr");
        const newTdName = document.createElement("td");
        const newTdAge = document.createElement("td");

        const [name, age] = this.getPersonInfo();

        newTdName.textContent = name;
        newTdAge.textContent = age;

        newTr.append(newTdName);
        newTr.append(newTdAge);
        tableBody.append(newTr);
    }

    delete() {
        const tableRows = tableBody.querySelectorAll("tr");
        const [name, age] = this.getPersonInfo();

        for (let i = 0; i < tableRows.length; i++) {
            const cells = tableRows[i].querySelectorAll("td");

            if (cells[0].textContent.trim() === name &&
                cells[1].textContent.trim() === age) {
                tableRows[i].remove();
            }
        }
    }

    search() {
        alert("was found");
    }

    onClick() {
        let action = event.target.dataset.action;

        if (action) {
            this[action]();
        }
    }
}

let menu = document.querySelector('#menu'),
    tableBody = document.querySelector('tbody');

new Menu(menu);*/

