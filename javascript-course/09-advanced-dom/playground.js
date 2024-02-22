// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');
const p2 = document.createElement('p');

p2.classList.add('p');
const span = document.createElement('span');

span.textContent = 'Hello world';

p2.append(p);
container.append(p2);
p.append(span);

console.log(container.outerHTML);
// => '<div><p><span>Hello world</span></p></div>'

// ------------------------

console.log(p.outerHTML);
// => '<p><span>Hello world</span></p>'

console.log(p.closest('p')?.outerHTML);
// => '<p><span>Hello world</span></p>'

console.log(p.closest('div')?.outerHTML);
// => '<div><p><span>Hello world</span></p></div>'
