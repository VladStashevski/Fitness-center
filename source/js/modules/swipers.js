const commentsSwiperPrevSlideButton = document.querySelector('.comments__swiper-button-prev');
const commentsSwiperNextSlideButton = document.querySelector('.comments__swiper-button-next');
const coachesSwiperPrevSlideButton = document.querySelector('.coaches__swiper-button-prev');
const coachesSwiperNextSlideButton = document.querySelector('.coaches__swiper-button-next');

const initСommentsSwiper = () => {
  commentsSwiperPrevSlideButton.style.display = 'block';
  commentsSwiperNextSlideButton.style.display = 'block';

  // eslint-disable-next-line no-undef
  const commentsSwiper = new Swiper('.comments__list .swiper', {
    spaceBetween: 20,
  });

  commentsSwiperPrevSlideButton.addEventListener('click', () => {
    commentsSwiper.slidePrev();
  });

  commentsSwiperNextSlideButton.addEventListener('click', () => {
    commentsSwiper.slideNext();
  });

  commentsSwiperPrevSlideButton.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      commentsSwiper.slidePrev();
    }
  });

  commentsSwiperNextSlideButton.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      commentsSwiper.slideNext();
    }
  });
};

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
  initСommentsSwiper();
  initCoachesSwiper();
};
