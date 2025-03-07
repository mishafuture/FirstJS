function calculator() {
    // calculator

    const result = document.querySelector('.calculating__result span');
    let sex = localStorage.getItem('sex') || 'female',
        height, weight, age,
        ratio = localStorage.getItem('ratio') || '1.375';

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element) => {
            element.classList.remove(activeClass);

            if (element.getAttribute('id') === sex) {
                element.classList.add(activeClass);
            }
            else if (element.getAttribute('data-ratio') === ratio) {
                element.classList.add(activeClass);
            }


        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if (sex === 'female')
            result.textContent = (Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio)).toString();
        else
            result.textContent = (Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio)).toString();
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((el) => {
            el.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        })
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', (e) => {

            if (input.value.match(/\D/)) {
                input.style.border = '1px solid red';
            }
            else {
                input.style.border = 'none';
            }

            switch (e.target.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#weight');
    getDynamicInformation('#height');
    getDynamicInformation('#age');
}

export default calculator;