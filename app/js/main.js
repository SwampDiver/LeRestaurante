// --- GALLERY ---

$(function () {
    $('.gallery__wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
});

// --- MENU ---

$(function () {
    $('.main-nav__burger').click(function (event) {
        $('.main-nav__burger,.main-nav__list').toggleClass('active');
    });
});

// --- SLIDER ---

$(function () {
    let index = 0;

    const activeSlide = n => {
        for (let slide of $('.online-menu__offer')) {
            slide.classList.remove('online-menu__offer--active');
        }
        $('.online-menu__offer')[n].classList.add('online-menu__offer--active');
    };

    $('.online-menu__next-btn').click(function () {
        if (index == $('.online-menu__offer').length - 1) {
            index = 0;
            activeSlide(index);
        } else {
            index++;
            activeSlide(index);
        }
    });
});
