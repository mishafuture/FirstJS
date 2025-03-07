import calculator from "./calculator";

function cards() {
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
}

export default cards;