const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const link = document.getElementsByClassName('dropdown__link');

button.addEventListener('click', function() {
    list.classList.add('dropdown__list_active');
})

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
        button.textContent = this.textContent;
        list.classList.remove('dropdown__list_active');
        event.preventDefault();
    });
};