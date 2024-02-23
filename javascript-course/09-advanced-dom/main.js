// @ts-check

import elements from './elements.js';
import { asserted, closeModal, openModal } from './helpers.js';

// Modal window
(() => {
  for (const btnOpenModal of document.querySelectorAll('.btn--show-modal')) {
    btnOpenModal.addEventListener('click', openModal);
  }

  elements.btnCloseModal.addEventListener('click', closeModal);
  elements.overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !elements.modal.classList.contains('hidden')) {
      closeModal();
    }
  });
})();

// Button scrolling
(() => {
  elements.btnScrollTo.addEventListener('click', function (event) {
    // const section1Coords = elements.section1.getBoundingClientRect();

    // console.log(/** @type {HTMLElement} */ (event.target).getBoundingClientRect());
    // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

    // No animation
    // window.scrollTo(
    //   section1Coords.left + window.scrollX,
    //   section1Coords.top + window.scrollY,
    // );

    // window.scrollTo({
    //   left: section1Coords.left + window.scrollX,
    //   top: section1Coords.top + window.scrollY,
    //   behavior: 'smooth',
    // });

    elements.section1.scrollIntoView({ behavior: 'smooth' });
  });
})();

// Tabbed component
(() => {
  elements.tabsContainer.addEventListener('click', (event) => {
    const target = /** @type {Element} */ (event.target);

    const tab = target.closest('.operations__tab');

    if (!tab || !(tab instanceof HTMLElement)) {
      return;
    }

    // Clearing tabs

    for (const element of elements.tabs) {
      element.classList.remove('operations__tab--active');
    }

    for (const element of elements.tabsContent) {
      element.classList.remove('operations__content--active');
    }

    // Activating clicked tab

    tab.classList.add('operations__tab--active');

    const tabContentSelector = `.operations__content--${tab.dataset.tab}`;
    const tabContent = asserted(document.querySelector(tabContentSelector));
    tabContent.classList.add('operations__content--active');
  });
})();
