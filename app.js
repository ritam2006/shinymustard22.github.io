const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = select.querySelector('.fa-caret-down');
    const smLinks = dropdown.querySelector('.sm-links');
    
    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        smLinks.classList.toggle('active');
    });
});