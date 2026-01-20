const link = document.getElementsByClassName('dropdown__link');
const button = document.querySelectorAll('.dropdown__value');
const list = document.querySelectorAll('.dropdown__list');

for (let j = 0; j < button.length; j++) {
        button[j].addEventListener('click', function() {
        list[j].classList.toggle('dropdown__list_active');
            for (let i = 0; i < link.length; i++) {
                link[i].addEventListener('click', function(event) {
                button[j].textContent = this.textContent;
                list[j].classList.remove('dropdown__list_active');
                event.preventDefault();
            });
        };
    });
};