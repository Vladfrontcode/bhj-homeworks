const fontButton = document.querySelectorAll('.font-size');
const text = document.querySelector('.book__content');

for (let i = 0; i < fontButton.length; i++) {
  fontButton[i].addEventListener('click', function(event) {
    fontButton[0].classList.remove('font-size_active');
    fontButton[1].classList.remove('font-size_active');
    fontButton[2].classList.remove('font-size_active');
    this.classList.add('font-size_active');
    event.preventDefault();
    if (i === 0) {
        text.classList.remove('font-size_big')
        text.classList.remove('font-size_active');
        text.classList.add('font-size_small');
    }
    if (i === 1) {
        text.classList.remove('font-size_big')
        text.classList.remove('font-size_small');
        text.classList.add('font-size_active');
    }
    if (i === 2) {
        text.classList.remove('font-size_small');
        text.classList.remove('font-size_active');
        text.classList.add('font-size_big');
    }
  })
};