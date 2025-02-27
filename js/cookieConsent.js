'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /*const cookieStorage = {
        getItem: (key) => {
            const cookies = document.cookie.split(';')
                .map(item => item.split('='))
                .reduce((acc, [key, value]) => ({...acc,
                    [key.trim()]: value}), {});

            return decodeURIComponent(cookies[key]);
        },
        setItem(key, value) {
            document.cookie = `${key}=${encodeURIComponent(value)};expires=Fri, 28 Feb 2025 12:00:00 GMT`;
        }
    }

    const storageType = cookieStorage,
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
    })*/

    class cookieConsent {
        constructor({popup, btnConfirm, btnCancel, activeClass = ''} = {}) {
            this.popup = document.querySelector(popup);
            this.btnConfirm = document.querySelector(btnConfirm);
            this.btnCancel = document.querySelector(btnCancel);
            this.activeClass = activeClass;
            this.consentPropertyType = 'site_consent';
        }

        getItem = (key) => {
            const cookies = document.cookie.split(';')
                .map(item => item.split('='))
                .reduce((acc, [key, value]) => ({...acc,
                    [key.trim()]: value}), {});

            return decodeURIComponent(cookies[key]);
        }

        setItem = (key, value) => {
            document.cookie = `${key}=${encodeURIComponent(value)};expires=Fri, 28 Feb 2025 12:00:00 GMT`;
        }

        hasConsented = () => this.getItem(this.consentPropertyType) === "true";

        changeStatus = (prop) => {
            this.setItem(this.consentPropertyType, prop);

            if (this.hasConsented()) {
                // Выполнить
                myScripts();
            }
        }

        bindTriggers = (btns) => {
            btns.forEach((btn) => {
                let status = btn === this.btnConfirm;

                btn.addEventListener('click', () => {
                    this.changeStatus(status);
                    this.popup.classList.remove(this.activeClass);
                })
            })
        }

        init = () => {
            try {
                if (this.hasConsented()) {
                    myScripts();
                } else {
                    this.popup.classList.add(this.activeClass);
                }

                this.bindTriggers([this.btnConfirm, this.btnCancel]);
            } catch (e) {
                console.error('Not all data transferred');
            }
        }
    }

    new cookieConsent({
        activeClass: 'popup_active',
        popup: '.popup',
        btnConfirm: '[data-confirm]',
        btnCancel: '[data-cancel]',
    }).init();

    function myScripts() {
        console.log('Loading...')
    }
});