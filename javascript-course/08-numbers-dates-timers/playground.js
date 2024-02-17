// @ts-check
'use strict';

const futureDate = new Date(2037, 0, 10, 13, 30, 7, 98);

console.log(futureDate);
// => Sat Jan 10 2037 13:30:00 GMT+0300 (Arabian Standard Time)

console.log(futureDate.toISOString());
// => 2037-01-10T10:30:07.098Z

// ------------------------

const properDateMethod1 = futureDate
  .toISOString()
  .slice(0, 10)
  .split('-')
  .reverse()
  .join('/');

console.log(properDateMethod1);
// => 10/01/2037

const day = `0${futureDate.getDate()}`.slice(-2);
// const day = `${futureDate.getDate()}`.padStart(2, '0');

const month = `0${futureDate.getMonth() + 1}`.slice(-2);
// const month = `${futureDate.getMonth() + 1}`.padStart(2, '0');

const year = futureDate.getFullYear();

const properDateMethod2 = `${day}/${month}/${year}`;

console.log(properDateMethod2);
// => 10/01/2037
