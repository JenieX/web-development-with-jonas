// @ts-check

import { asserted } from './helpers.js';

const modal = asserted(document.querySelector('.modal'));
const overlay = asserted(document.querySelector('.overlay'));
const btnCloseModal = asserted(document.querySelector('.btn--close-modal'));

export default {
  modal,
  overlay,
  btnCloseModal,
};
