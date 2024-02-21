// @ts-check

import { asserted } from './helpers.js';

const modal = asserted(document.querySelector('.modal'));
const overlay = asserted(document.querySelector('.overlay'));
const btnCloseModal = asserted(document.querySelector('.btn--close-modal'));
const btnScrollTo = asserted(document.querySelector('.btn--scroll-to'));
const section1 = asserted(document.querySelector('#section--1'));

export default {
  modal,
  overlay,
  btnCloseModal,
  btnScrollTo,
  section1,
};
