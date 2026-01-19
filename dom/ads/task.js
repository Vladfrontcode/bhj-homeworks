const adsItems = document.querySelectorAll('.rotator__case')

let i = 0;

setInterval(() => {    
  if (i < adsItems.length) {
    adsItems[i].classList.remove('rotator__case_active')
    i = (i + 1) % adsItems.length;
    adsItems[i].classList.add('rotator__case_active')
   } 
}, 1000);