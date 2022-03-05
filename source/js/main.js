'use strict';

// Переключение табов в блоке season-tickets


(function () {
  let tab = document.querySelector('.season-tickets__wrapper');
  if (!tab) {
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
})();

// Слайдер

var $;
$(document).ready(function () {
  $('.trainers__list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
