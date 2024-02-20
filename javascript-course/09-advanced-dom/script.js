// @ts-check

import elements from './elements.js';
import { closeModal, openModal } from './helpers.js';

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
