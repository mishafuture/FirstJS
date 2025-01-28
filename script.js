'use strict';

let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.txt', true);
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
}

fetch('data.txt')
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

fetch('‘https://api.example.com/data', {
    method: 'POST',
    body: JSON.stringify({key:`value`}),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

