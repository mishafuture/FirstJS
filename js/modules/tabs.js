function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
// tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (!target ||
            !target.classList.contains(tabsSelector.slice(1)) ||
            target.classList.contains(activeClass)) return;

        hideTabContent();

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] === target) {
                showTabContent(i);
                break;
            }
        }
    });
}

export default tabs;