// @ts-check
'use strict';

// year, month, day (called date!), hours, minutes, seconds, ms
const futureDate = new Date(2037, 0, 10, 13, 30, 7, 98);

console.log(futureDate);
// => Sat Jan 10 2037 13:30:00 GMT+0300 (Arabian Standard Time)

console.log(futureDate.getFullYear());
// => 2037

console.log(futureDate.getMonth());
// => 0

console.log(futureDate.getDate());
// => 10

console.log(futureDate.getHours());
// => 13

console.log(futureDate.getMinutes());
// => 30

console.log(futureDate.getSeconds());
// => 7

console.log(futureDate.getMilliseconds());
// => 98
