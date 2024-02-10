'use strict';

const hello = 'Hello'.padStart(15, '-');
const world = 'world!'.padStart(15, '-');

console.log(hello);
// => '----------Hello'

console.log(world);
// => '---------world!'
