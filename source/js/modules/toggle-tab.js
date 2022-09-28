/* eslint-disable no-invalid-this */
/* eslint-disable no-shadow */
let tab = document.querySelectorAll('.subscriptions__item');
let content = document.querySelectorAll('.subscriptions__cards');

export const toggleTab = () => {
  tab.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      hideTab();

      this.classList.add('subscriptions__item--current');
      content[i].classList.add('subscriptions__cards--show');
    });
  });
};

function hideTab() {
  tab.forEach((item) => {
    item.classList.remove('subscriptions__item--current');
  });
  content.forEach((item) => {
    item.classList.remove('subscriptions__cards--show');
  });
}

const toggleKeyTab = () => {
  tab.forEach(function (tab, i) {
    tab.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        hideTab();
        tab.classList.add('subscriptions__item--current');
        content[i].classList.add('subscriptions__cards--show');
      }
    });
  });
};
toggleKeyTab();
