'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (const btnOpenModal of document.querySelectorAll('.show-modal')) {
  btnOpenModal.addEventListener('click', openModal);
}

document.querySelector('.close-modal').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', ({ key }) => {
  if (key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
