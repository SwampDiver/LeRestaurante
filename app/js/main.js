$(function() {
	$('.gallery__wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
});

const next = document.querySelector('.online-menu__next-btn');
const slides = document.querySelectorAll('.online-menu__offer');

let index = 0;

const activeSlide = n => {
  for (let slide of slides) {
    slide.classList.remove('online-menu__offer--active');
  }
  slides[n].classList.add('online-menu__offer--active');
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};


next.addEventListener('click', nextSlide);
