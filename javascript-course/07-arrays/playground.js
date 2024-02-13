'use strict';

const users = [
  { name: 'Jenie', age: 32 },
  { name: 'Jonas', age: 33 },
  { name: 'Alicia', age: 43 },
  { name: 'Adam', age: 1 },
  { name: 'Sara', age: 7 },
];

// ------------------------

const AdamInfo = users.find(({ name }) => {
  return name === 'Adam';
});

// const AdamInfoIndex = users.indexOf(AdamInfo);

const AdamInfoIndex = users.findIndex(({ name }) => {
  return name === 'Adam';
});

console.log(AdamInfoIndex);
// => 3
