// @ts-check

import elements from './elements.js';

/**
 * @template T
 * @param {T} value
 */
export function asserted(value) {
  if (value === null || value === undefined) {
    throw new Error('Value is either null or undefined');
  }

  return value;
}

/** @param {Event} event */
export function openModal(event) {
  event.preventDefault();

  elements.modal.classList.remove('hidden');
  elements.overlay.classList.remove('hidden');
}

export function closeModal() {
  elements.modal.classList.add('hidden');
  elements.overlay.classList.add('hidden');
}
