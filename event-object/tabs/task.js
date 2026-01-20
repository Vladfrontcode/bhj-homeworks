document.querySelectorAll('.tabs').forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const tabContent = container.querySelectorAll('.tab__content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(header => header.classList.remove('tab_active'));
            tabContent.forEach(text => text.classList.remove('tab__content_active'));            
            tab.classList.add('tab_active');
            tabContent[index].classList.add('tab__content_active');
        });
    });
})