'use strict';

/*console.log("Request to database...");

const req = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("Preparing data...");

      const product = {
         name: 'Grape',
         price: 100,
      }

      resolve(product);
   }, 2000);
});

req.then(product => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         product.status = 'ordered';
         resolve(product);
      }, 2000)
   });
}).then(data => {
   data.modify = true;
   return data;
}).then(data => {
   console.log(data);
}).catch(() => {
   console.error("Error occurred");
}).finally(() => {
   console.log("Database finished...");
});*/

/*
const test = time =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, time);
});

test(1000).then(() => {
   console.log('1000 ms have passed!');
});

test(2000).then(() => {
   console.log('2000 ms have passed!');
});*/

let resultA, resultB, resultC;
function addAsync(num1, num2) {
// ES6 подтягивает API, который возвращает промис.
    return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
        .then(x => x.json());
}

addAsync(1, 2)
    .then(success => {
        resultA = success;
        return resultA;
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success;
        return resultB;
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success;
        return resultC;
    })
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });