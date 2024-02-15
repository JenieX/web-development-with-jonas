// @ts-check
'use strict';

/** @type {(number | 'Jenie')[]} */
const numbers = [1, 2, 3, 4, 5];

numbers.fill('Jenie');

console.log(numbers);
// => ['Jenie', 'Jenie', 'Jenie', 'Jenie', 'Jenie']

// ------------------------

const emptySlotsArray = new Array(5);

emptySlotsArray.fill('Jenie');

console.log(emptySlotsArray);
// => ['Jenie', 'Jenie', 'Jenie', 'Jenie', 'Jenie']

// ------------------------

/** @type {('*' | number)[]} */
const pin = [4, 8, 2, 6, 3, 5];

// pin.fill('*', 1, pin.length - 1);
pin.fill('*', 1, -1);

console.log(pin);
// => [4, '*', '*', '*', '*', 5]
