const coachCardElementsCollection = document.querySelectorAll('.coaches__card');

const showCardCoaches = () => {
  for (const card of coachCardElementsCollection) {
    const cardInfo = card.querySelector('.coaches__info');
    const cardPhotoHeading = card.querySelector('.coaches__photo h2');

    const hideInfo = () => {
      cardInfo.style.height = '0';
      cardPhotoHeading.style.display = 'block';
    };

    const showInfo = () => {
      cardInfo.style.height = '100%';
      cardPhotoHeading.style.display = 'none';
    };

    cardPhotoHeading.style.display = 'block';
    hideInfo();
    card.addEventListener('mouseenter', showInfo);
    card.addEventListener('mouseleave', hideInfo);
    card.addEventListener('focus', showInfo);
    card.addEventListener('blur', hideInfo);
  }
};

export {showCardCoaches};
