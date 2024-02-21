// @ts-check
'use strict';

const container = document.createElement('div');

container.insertAdjacentHTML(
  'afterbegin',
  '<div data-user="jenie" data-year-of-birth="1992"></div>',
);

const child = /** @type {HTMLDivElement} */ (container.firstElementChild);

console.log(child.dataset.user);
// => 'jenie'

console.log(child.dataset.yearOfBirth);
// => '1992'

console.log(container.outerHTML);
// => '<div><div data-user="jenie" data-year-of-birth="1992"></div></div>'
