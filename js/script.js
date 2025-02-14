'use strict';

let inputUAH = document.querySelector('#UAH'),
    inputUSD = document.querySelector('#USD');

inputUAH.addEventListener('input', (e) => {
   const request = new XMLHttpRequest();

   request.open("GET", "js/current.json");
   request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
   request.send();

   /*request.addEventListener("readystatechange", (e) => {
      if (request.readyState === 4 && request.status === 200) {
         const data = JSON.parse(request.response);
         inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
      } else {
         inputUSD.value = 'Error';
      }
   });*/

/*   request.addEventListener('load', () => {
      if (request.status === 200) {
         const data = JSON.parse(request.response);
         inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
      } else {
         inputUSD.value = 'Error';
         request.abort();
      }
   });*/

   request.onreadystatechange = function () {
      if (request.readyState === 4) {
         if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
         } else {
            inputUSD.value = 'Error';
            request.abort();
         }
      } else {
         console.log(request.readyState)
         inputUSD.value = request.status;
      }
   }
});