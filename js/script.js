import tabs from './modules/tabs';
import modal, {openModal} from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
   const modalTimedId = setTimeout(() => openModal('.modal', modalTimedId), 300000);

   tabs();
   modal('[data-modal]', '.modal', modalTimedId);
   timer();
   cards();
   calculator();
   forms('form', modalTimedId);
   slider();
});