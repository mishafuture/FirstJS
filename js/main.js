'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (!target ||
            !target.classList.contains('tabheader__item') ||
            target.classList.contains('tabheader__item_active')) return;

        hideTabContent();

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] === target) {
                showTabContent(i);
                break;
            }
        }
    });

    // timer

    const deadline = '2025-02.1'
    setTimer('.timer', deadline);

    function getTimeRemaining(endTime) {
        const difTime = Date.parse(endTime) - Date.now();
        let days = 0, hours = 0, minutes = 0, seconds = 0;

        if (difTime > 0) {
            days = Math.floor(difTime / (1000 * 60 * 60 * 24));
            hours = Math.floor(difTime / (1000 * 60 * 60) % 24);
            minutes = Math.floor(difTime / (1000 * 60) % 60);
            seconds = Math.floor(difTime / 1000 % 60);
        }

        return {difTime, days, hours, minutes, seconds};
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        }

        return num;
    }

    function setTimer(selector, deadline) {
        const timer = document.querySelector(selector);

        let days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerId = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.difTime <= 0)
                clearInterval(timerId);
        }
    }

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearTimeout(modalTimedId);
    }

    const modalTimedId = setTimeout(openModal, 50000);

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // menu item

    class MenuItem {
        constructor(subTitle, description, cost, srcIcon, altTextIcon, parentSelector, ...classes) {
            this.subTitle = subTitle;
            this.description = description;
            this.cost = cost;
            this.srcIcon = srcIcon;
            this.altTextIcon = altTextIcon;
            this.transfer = 41.7;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.changeToUAH();
        }

        changeToUAH() {
            this.cost = Math.round(this.transfer * this.cost);
        }

        render() {
            const element = document.createElement('div');

            if (!this.classes.includes('menu__item'))
                this.classes.push('menu__item');

            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
                <img src="${this.srcIcon}" alt="${this.altTextIcon}">
                <h3 class="menu__item-subtitle">${this.subTitle}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                </div>
            `

            this.parent.append(element);
        }
    }

/*    const getResource = async () => {
        const res = await fetch('http://localhost:3000/menu');

        if (!res.ok) {
            throw new Error(`Error getting resource with status ${res.status}`);
        }

        return await res.json()
    }*/

    /*    getResource('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({title, descr, price, img, altimg}) => {
                    new MenuItem(title, descr, price, img, altimg,'.menu  .container', 'menu__item').render();
                })
            })
            .catch(err => {
                console.error(err);
            });*/

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({title, descr, price, img, altimg}) => {
                new MenuItem(title, descr, price, img, altimg, '.menu  .container', 'menu__item').render();
            })
        })
        .catch(err => {
            console.error(err);
        });

    /*getResource('http://localhost:3000/menu')
        .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({title, descr, price, img, altimg}) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');

            element.innerHTML = `
                <img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
            `;

            document.querySelector('.menu .container').append(element);
        });
    }*/

    // forms

    const forms = document.querySelectorAll('form'),
        message = {
            loading: 'img/form/spinner.svg',
            success: 'Thank you! We\'l contact with you as soos as possible.',
            failure: 'Something went wrong. Please try again.',
        };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: data,
        })

        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = 'img/form/spinner.svg';
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
                statusMessage.remove();
            })

            /*req.addEventListener('load', () => {
                if (req.status === 200) {
                    console.log(req.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }
                else {
                    showThanksModal(message.failure);
                }
            })*/

        })
    }

    forms.forEach((form) => {
        bindPostData(form);
    });

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');

        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="module__title">${message}</div>
        </div>
        `

        document.querySelector('.modal').appendChild(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 1500)
    }

    //slider

    /*const sliderCounterWrapper = document.querySelector('.offer__slider-counter');

    function getNewIndex(current, total, direction) {
        const currentIndex = Number.parseInt(current.textContent),
            totalIndex = Number.parseInt(total.textContent);
        let newIndex;

        if (currentIndex + direction > totalIndex)
            newIndex = 1;
        else if (currentIndex + direction === 0)
            newIndex = totalIndex;
        else
            newIndex = currentIndex + direction;

        return getZero(newIndex);
    }

    function showSlide(newIndex, parent = '.offer__slider-wrapper') {
        const sliderWrapper = document.querySelector(parent);
        for (let i = 0; i < sliderWrapper.children.length; i++) {
            sliderWrapper.children[i].classList.remove('show');
            sliderWrapper.children[i].classList.add('hide');
            if (i === newIndex - 1) {
                console.log(sliderWrapper.children[i]);
                sliderWrapper.children[i].classList.add('show');
                sliderWrapper.children[i].classList.remove('hide');
            }
        }
    }

    showSlide(3)

    sliderCounterWrapper.querySelectorAll('div').forEach(button => {
        button.addEventListener('click', (e) => {
            const current = sliderCounterWrapper.querySelector('#current'),
                total = sliderCounterWrapper.querySelector('#total');
            let direction = e.target.classList.contains('offer__slider-prev') ? -1 : 1;

            const newIndex = getNewIndex(current, total, direction);
            current.textContent = newIndex;
            showSlide(newIndex);
        })
    });*/

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        widthWrapper = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    total.textContent = getZero(slides.length);
    current.textContent = getZero(slideIndex);

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = widthWrapper;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');

    slider.appendChild(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', `${i + 1}`);

        if (i === 0) {
            dot.style.opacity = '1';
        }

        indicators.appendChild(dot);
        dots.push(dot);
    }

    function showSlide(offset, slideIndex) {
        slidesField.style.transform = `translateX(-${offset}px)`;

        current.textContent = getZero(slideIndex)

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    const removeNotDigits = (exp) => +exp.replace(/\D/g, '');

    next.addEventListener('click', () => {
        if (offset === removeNotDigits(widthWrapper) * (slides.length - 1)) {
            offset = 0;
        } else
            offset += removeNotDigits(widthWrapper);

        if (slideIndex === slides.length) {
            slideIndex = 1;
        }
        else {
            slideIndex++;
        }

        showSlide(offset, slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = removeNotDigits(widthWrapper) * (slides.length - 1);
        } else
            offset -= removeNotDigits(widthWrapper);

        if (slideIndex === 1) {
            slideIndex = slides.length;
        }
        else {
            slideIndex--;
        }

        showSlide(offset, slideIndex);
    });

    dots.forEach(dot => {
       dot.addEventListener('click', (e) => {
           const slideTo = e.target.dataset.slideTo;

           slideIndex = slideTo;
           offset = +widthWrapper.replace(/\D/g, '') * (slideTo - 1);

           showSlide(offset, slideIndex);
       });
    });
})
