// @ts-check

import { asserted } from './helpers.js';

const modal = asserted(document.querySelector('.modal'));
const overlay = asserted(document.querySelector('.overlay'));
const btnCloseModal = asserted(document.querySelector('.btn--close-modal'));
const btnScrollTo = asserted(document.querySelector('.btn--scroll-to'));
const section1 = asserted(document.querySelector('#section--1'));
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = asserted(document.querySelector('.operations__tab-container'));
const tabsContent = document.querySelectorAll('.operations__content');
const nav = asserted(document.querySelector('.nav'));
const header = asserted(document.querySelector('.header'));
const sections = document.querySelectorAll('.section');

export default {
  modal,
  overlay,
  btnCloseModal,
  btnScrollTo,
  section1,
  tabs,
  tabsContainer,
  tabsContent,
  nav,
  header,
  sections,
};
