// @ts-check
'use strict';

const arrayOfUndefined = Array.from({ length: 5 });

console.log(arrayOfUndefined);
// => [undefined, undefined, undefined, undefined, undefined]

// ------------------------

// Generate a sequence of numbers
const numbers = Array.from({ length: 5 }, (item, index) => {
  return index + 1;
});

console.log(numbers);
// => [1, 2, 3, 4, 5]

// ------------------------

const pElementsClasses = Array.from(document.querySelectorAll('p'), (element) => {
  return element.className;
});

console.log(pElementsClasses);
