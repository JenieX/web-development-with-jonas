// @ts-check

'use strict';

/** @typedef {{ name: string; age?: number; gender: 'male' | 'female' }} User */

/** @type {User[]} */
const users = [
  { name: 'Jenie', age: 32, gender: 'male' },
  { name: 'Jonas', age: 33, gender: 'male' },
  { name: 'Sara', age: 7, gender: 'female' },
  { name: 'Adam', gender: 'male' },
];

// ------------------------

const completeAgeInfo = users.every(({ age }) => {
  return age !== undefined;
});

// console.log(completeAgeInfo);
// => false
