const headerItemMobile = document.querySelector('.header__item--mobile');
const headerMenu = document.querySelector('.header__menu');
const modal = document.querySelector('#modal');
const headerMenuTopClose = document.querySelector('.header__menu--top--close');

const businessArea = document.querySelector('.business__area--container');

const indexSliderFirst = document.getElementById('index__slider--first');
const buttonSliderLeftFirst = document.getElementById('button__slider--left--first');
const buttonSliderRightFirst = document.getElementById('button__slider--right--first');
const sliderMainFirst = document.getElementById('slider__main--first');

const indexSliderSecond = document.getElementById('index__slider--second');
const buttonSliderLeftSecond = document.getElementById('button__slider--left--second');
const buttonSliderRightSecond = document.getElementById('button__slider--right--second');
const sliderMainSecond = document.getElementById('slider__main--second');

const buttonBanner = document.querySelector('.banner__button');
const bannerContent = document.getElementsByClassName('banner__content');
const indexBanner = document.getElementById('index__slider--banner');

const sliderCircleItems = document.querySelector('.near__footer--content--pagination');
const contentSliderNearFooter = document.querySelector('.near__footer--content--main');

const yearList = document.getElementsByClassName('relationship-detail__top--content--item');
const buttonYearLeft = document.querySelector('#button__year--left');
const buttonYearRight = document.querySelector('#button__year--right');
const indexYear = document.querySelector('#index__year');

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
        headerMenu.style = '';
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

const handleClickSliderHozi = (isNext, sliderMain, indexSlider) => {
    if (!sliderMain || !indexSlider) return;

    let length = Math.ceil(sliderMain.children.length / 3);
    let current = Number(indexSlider.value);
    let indexSliderHozi = Number(indexSlider.value);
    if (isNext) {
        if (indexSliderHozi === length - 1) {
            indexSliderHozi = 0;
            current = 0 * 100;
        }
        else {
            indexSliderHozi++;
            if (indexSliderHozi === length - 1) {
                current = ((length - 2 < 0 ? 0 : length - 2) * 100) + ((sliderMain.children.length % 3) * (100 / 3))
                    + 4
            }
            else {
                current = indexSliderHozi * 100;
            }
        }
    } else {
        if (indexSliderHozi - 1 < 0) {
            indexSliderHozi = length - 1;
            current = ((length - 2 < 0 ? 0 : length - 2) * 100) + ((sliderMain.children.length % 3) * (100 / 3))
                + 4;
        }
        else {
            indexSliderHozi--;
            if (indexSliderHozi < 0) {
                current = ((length - 2 < 0 ? 0 : length - 2) * 100) - ((sliderMain.children.length % 3) * (100 / 3))
                    + 4
            }
            else {
                current = indexSliderHozi * 100;
            }
        }
    }
    indexSlider.value = indexSliderHozi;
    sliderMain.style.transform = `translateX(-${current}%)`;
}

const addEventButtonSliderHozi = (buttonLeft, buttonRight, indexSlider, sliderMain) => {
    if (buttonLeft && buttonRight) {
        buttonLeft.addEventListener('click', () => {
            handleClickSliderHozi(false, sliderMain, indexSlider)
        });
        buttonRight.addEventListener('click', () => {
            handleClickSliderHozi(true, sliderMain,
                indexSlider)
        });
    }
}

addEventButtonSliderHozi(buttonSliderLeftFirst, buttonSliderRightFirst,
    indexSliderFirst, sliderMainFirst);
addEventButtonSliderHozi(buttonSliderLeftSecond, buttonSliderRightSecond,
    indexSliderSecond, sliderMainSecond);

if (buttonBanner) {
    buttonBanner.addEventListener('click', () => {
        let _indexBanner = Number(indexBanner.value);
        let length = bannerContent[0].children.length;
        if (_indexBanner === length - 1) {
            _indexBanner = 0;
        }
        else {
            _indexBanner++;
        }
        indexBanner.value = _indexBanner;
        bannerContent[0].style.transform = `translateX(-${_indexBanner * 100}%)`
        bannerContent[1].style.transform = `translateX(-${_indexBanner * 100}%)`
    });
}

if (sliderCircleItems) {
    [...sliderCircleItems.children].forEach((el, index) => {
        el.addEventListener('click', () => {
            [...sliderCircleItems.children].forEach(el_ => {
                el_.classList.remove('near__footer--content--pagination--active');
            });
            contentSliderNearFooter.style.transform = `translateX(-${80 * (index)}%)`
            el.classList.add('near__footer--content--pagination--active');
        })
    })
}

if (yearList && indexYear && buttonYearLeft && buttonYearRight) {
    let pos = Number(indexYear.value);
    const pass = (el_, pos_) => {
        [...yearList].forEach(el_ => {
            el_.classList.remove('relationship-detail__top--content--item--active');
        });
        el_.classList.add('relationship-detail__top--content--item--active');
        indexYear.value = pos_;
    }
    [...yearList].forEach((el, index) => {
        el.addEventListener('click', () => {
            pass(el, index);
        });
    });
    buttonYearLeft.addEventListener('click', () => {
        if (pos === 0) {
            pos = yearList.length - 1;
        }
        else {
            pos--;
        }
        pass(yearList[pos], pos);
    })
    buttonYearRight.addEventListener('click', () => {
        if (pos === yearList.length - 1) {
            pos = 0;
        }
        else {
            pos++;
        }
        pass(yearList[pos], pos);
    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1140) {
        clickOutSide();
    }
    else {
        headerMenu.style.transition = 'none';
    }
})

if ($('.partner__content')) {
    // $('.partner__content').slick({
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    // });
}