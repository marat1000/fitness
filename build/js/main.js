'use strict';

// Переключение табов в блоке season-tickets

tabs('.season-tickets__wrapper');

function tabs(target) {
  let seasonTickets = document.querySelector('.season-tickets');
  let tab = seasonTickets.querySelector(target);
  if (!(seasonTickets && tab)) {
    return;
  }
  let showTab = function (tabsItemTarget) {
    if (!tabsItemTarget) {
      return;
    }
    let ratesItem = document.querySelector(tabsItemTarget.getAttribute('href'));
    let tabsItemActive = tabsItemTarget.parentElement.querySelector('.tabs__item_active');
    if (!(ratesItem && tabsItemActive)) {
      return;
    }
    let ratesListActive = ratesItem.parentElement.querySelector('.rates__list_active');
    if (tabsItemTarget === tabsItemActive || !ratesListActive) {
      return;
    }
    tabsItemActive.classList.remove('tabs__item_active');
    ratesListActive.classList.remove('rates__list_active');
    tabsItemTarget.classList.add('tabs__item_active');
    tabsItemTarget.blur();
    ratesItem.classList.add('rates__list_active');
  };

  tab.addEventListener('click', function (evt) {
    let tabsItem = evt.target;
    if (!tabsItem.classList.contains('tabs__item')) {
      return;
    }
    evt.preventDefault();
    showTab(tabsItem);
  });
}
