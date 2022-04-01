const headerItemMobile = document.querySelector('.header__item--mobile');
const headerMenu = document.querySelector('.header__menu');
const modal = document.querySelector('#modal');
const headerMenuTopClose = document.querySelector('.header__menu--top--close');
let isClick;

headerItemMobile.addEventListener('click', () => {
    if (isClick) {
        headerMenu.style.display = 'none';
        modal.style.display = 'none';
        document.body.style = '';
    }
    else {
        headerMenu.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

headerMenuTopClose.addEventListener('click', () => {
    headerMenu.style.display = 'none';
    modal.style.display = 'none';
    document.body.style = '';
})