// @ts-check
'use strict';

// Generating a sequence of numbers from 1-7

const numbers1 = Array.from({ length: 7 }, (item, index) => index + 1);

console.log(numbers1);
// => [1, 2, 3, 4, 5, 6, 7]

// -------------------------

const numbers2 = Array.from(Array(7), (item, index) => index + 1);

console.log(numbers2);
// => [1, 2, 3, 4, 5, 6, 7]

// -------------------------

const numbers3 = [...Array(8).keys()].slice(1);

console.log(numbers3);
// => [1, 2, 3, 4, 5, 6, 7]

// -------------------------

const numbers4 = Array.from(Array(8).keys()).slice(1);

console.log(numbers4);
// => [1, 2, 3, 4, 5, 6, 7]
