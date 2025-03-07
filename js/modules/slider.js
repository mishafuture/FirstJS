function slider() {
    //slider

    //first version
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

    //second version
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

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        }

        return num;
    }

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

    prev.addEventListener('click', (e) => {
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
}

export default slider;