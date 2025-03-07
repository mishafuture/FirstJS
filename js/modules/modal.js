function openModal(modalSelector, modalTimedId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimedId);
    if (modalTimedId) clearTimeout(modalTimedId);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimedId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector);
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimedId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimedId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export {openModal, closeModal};
export default modal;