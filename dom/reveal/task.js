const message = document.querySelectorAll('.reveal');
console.log(message);

function isVisible (el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }

    if (bottom > window.innerHeight) {
        return false
    }

    return true
}

window.addEventListener('scroll', function() {
  if (isVisible (message[0])) {
    message[0].classList.add('reveal_active')
  }else{
    message[0].classList.remove('reveal_active')
  }
  if (isVisible (message[1])) {
    message[1].classList.add('reveal_active')
  }else{
    message[1].classList.remove('reveal_active')
  }
});