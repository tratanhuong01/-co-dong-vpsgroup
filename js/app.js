const headerItemMobile = document.querySelector('.header__item--mobile');
const headerMenu = document.querySelector('.header__menu');
const modal = document.querySelector('#modal');
const headerMenuTopClose = document.querySelector('.header__menu--top--close');

const businessArea = document.querySelector('.business__area--container');

let isClick;

const clickOutSide = () => {
    headerMenu.classList.remove('header__menu--show');
    modal.classList.remove('modal__active');
    document.body.style = '';
}

headerItemMobile.addEventListener('click', () => {
    if (isClick) {
        clickOutSide();
        modal.removeEventListener('click', clickOutSide)
    }
    else {
        headerMenu.classList.add('header__menu--show');
        modal.classList.add('modal__active');
        document.body.style.overflow = 'hidden';
        modal.addEventListener('click', clickOutSide)
    }
});

headerMenuTopClose.addEventListener('click', () => {
    clickOutSide();
})

if (businessArea) {
    businessArea.addEventListener('scroll', () => {
        if (businessArea.scrollLeft > 290) {
            businessArea.classList.remove('business__area--main');
        }
        else {
            businessArea.classList.add('business__area--main');
        }
    })
}

