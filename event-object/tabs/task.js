const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab__content');

for (let i = 0; i < 2; i++) {
    tabs[i].addEventListener('click', function() {
        tabs[0].classList.remove('tab_active');
        tabs[1].classList.remove('tab_active');
        tabs[2].classList.remove('tab_active');
        this.classList.add('tab_active');
        tabContent[0].classList.remove('tab__content_active');
        tabContent[1].classList.remove('tab__content_active');
        tabContent[2].classList.remove('tab__content_active');
        tabContent[i].classList.add('tab__content_active');
    });
};

function onClick() {
    tabs[0].classList.remove('tab_active');
    tabs[1].classList.remove('tab_active');
    this.classList.add('tab_active');
    tabContent[0].classList.remove('tab__content_active');
    tabContent[1].classList.remove('tab__content_active');
    tabContent[2].classList.add('tab__content_active');
};

tabs[2].onclick = onClick