'use strict'

/*
localStorage.setItem('number', '13');
localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.clear();
*/

const checkBox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    changeColorBtn = document.querySelector('#color');

if (localStorage.getItem('isChecked') === 'true') {
    checkBox.checked = true;

}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {
    localStorage.setItem('isChecked', 'true');
});

changeColorBtn.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#ffffff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'John',
    age: 8,
};
const serializedPerson = JSON.stringify(person);

localStorage.setItem('John', serializedPerson);

console.log(JSON.parse(localStorage.getItem('John')));