'use strict';

console.log(this);
// => Window {}

function logThis() {
  console.log(this);
  // => undefined
}

function logThis() {
  console.log(this);
  // => Window {}
}

logThis();
