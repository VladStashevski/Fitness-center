/* eslint-disable no-unused-vars */
export const switchSwiperReviews = () => {
  // eslint-disable-next-line no-undef
  const mySwiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidersPerGroup: 1,

    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
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
