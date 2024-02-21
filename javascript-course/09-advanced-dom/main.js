// @ts-check

import elements from './elements.js';
import { asserted, closeModal, openModal } from './helpers.js';

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// Button scrolling

elements.btnScrollTo.addEventListener('click', function (event) {
  const section1Coords = elements.section1.getBoundingClientRect();
  console.log(section1Coords);

  // console.log(/** @type {HTMLElement} */ (event.target).getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  // No animation
  // window.scrollTo(
  //   section1Coords.left + window.scrollX,
  //   section1Coords.top + window.scrollY,
  // );

  window.scrollTo({
    left: section1Coords.left + window.scrollX,
    top: section1Coords.top + window.scrollY,
    behavior: 'smooth',
  });

  // elements.section1.scrollIntoView({ behavior: 'smooth' });
});
