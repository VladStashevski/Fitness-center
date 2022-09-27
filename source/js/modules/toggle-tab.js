const subscriptionsInfoElementsCollection = document.querySelector('.subscriptions__info').children;
const subscriptionsTabElementsCollection = document.querySelector('.subscriptions__options').children;

const hideAllSubscriptionsInfo = () => {
  for (const element of subscriptionsInfoElementsCollection) {
    element.style.display = 'none';
  }
};

const deactivateAllSubscriptionsTabsState = () => {
  for (const tab of subscriptionsTabElementsCollection) {
    tab.classList.remove('is-active');
  }
};

const setSubscriptionsTabs = () => {
  for (const tab of subscriptionsTabElementsCollection) {
    tab.querySelector('a').addEventListener('click', (evt) => {
      evt.preventDefault();
      deactivateAllSubscriptionsTabsState();
      evt.target.parentNode.classList.add('is-active');
      const macthingSubscriptionsInfoElement = document.getElementById(evt.target.href.split('#').pop());
      hideAllSubscriptionsInfo();

      macthingSubscriptionsInfoElement.style.display = 'grid';
    });
  }
};

export const toggleTab = () => {
  hideAllSubscriptionsInfo();

  document.getElementById('1-month-subscriptions').style.display = 'grid';

  setSubscriptionsTabs();
};
