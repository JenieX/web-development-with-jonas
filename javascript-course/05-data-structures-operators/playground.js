'use strict';

const elements = new Map();

elements
  .set('.header', document.querySelector('.header'))
  .set('.content', document.querySelector('.content'));

console.log(elements);
