// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal, {openModal} from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
   console.log("HERE");
   const modalTimedId = setTimeout(() => openModal('.modal', modalTimedId), 300000);

   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimedId);
   timer('.timer', '2025-05-08');
   console.log('Timer pass');
   cards();
   calculator();
   forms('form', modalTimedId);
   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      slide: '.offer__slide',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
   });
});