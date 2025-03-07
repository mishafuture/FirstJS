import {getResource} from "../services/services";

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

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({title, descr, price, img, altimg}) => {
                new MenuItem(title, descr, price, img, altimg,'.menu  .container', 'menu__item').render();
            })
        })
        .catch(err => {
            console.error(err);
        });

/*    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({title, descr, price, img, altimg}) => {
                new MenuItem(title, descr, price, img, altimg, '.menu  .container', 'menu__item').render();
            })
        })
        .catch(err => {
            console.error(err);
        });*/
}

export default cards;