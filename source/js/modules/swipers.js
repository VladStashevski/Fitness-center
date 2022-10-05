/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const createFeedbackSwiper = () => {
  document.querySelector('.reviews__wrapper').setAttribute('data-is-active', '');
  const swiperFeedback = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
  });
  return (swiperFeedback);
};


const coachesSwiperPrevSlideButton = document.querySelector('.coaches__swiper-button-prev');
const coachesSwiperNextSlideButton = document.querySelector('.coaches__swiper-button-next');

const initCoachesSwiper = () => {
  coachesSwiperPrevSlideButton.style.display = 'block';
  coachesSwiperNextSlideButton.style.display = 'block';

  // eslint-disable-next-line no-undef
  const coachesSwiper = new Swiper('.coaches__list .swiper', {
    spaceBetween: 40,
    slidesPerView: 1,
    rewind: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  coachesSwiperPrevSlideButton.addEventListener('click', () => {
    coachesSwiper.slidePrev();
  });

  coachesSwiperNextSlideButton.addEventListener('click', () => {
    coachesSwiper.slideNext();
  });

  coachesSwiperPrevSlideButton.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      coachesSwiper.slidePrev();
    }
  });

  coachesSwiperNextSlideButton.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      coachesSwiper.slideNext();
    }
  });
};

export const switchSwiper = () => {
  initCoachesSwiper();
};
