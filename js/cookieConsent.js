'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const storageType = localStorage,
        consentPropertyType = 'site_consent';

    const hasConsented = () => storageType.getItem(consentPropertyType) === "true";
    const toggleStorage = (prop) => storageType.setItem(consentPropertyType, prop);

    const popup = document.querySelector('.popup'),
        btnConfirm = popup.querySelector('[data-confirm]'),
        btnCancel = popup.querySelector('[data-cancel]');

    if (hasConsented()) {
        console.log('Loading...');
    }
    else {
        popup.classList.add('popup_active');
    }

    btnConfirm.addEventListener('click', () => {
        toggleStorage(true);
        popup.classList.remove('popup_active');
        console.log('Loading...');
    });

    btnCancel.addEventListener('click', () => {
        toggleStorage(false);
        popup.classList.remove('popup_active');
    })
});