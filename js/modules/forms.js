function forms() {
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
}

module.exports = forms;