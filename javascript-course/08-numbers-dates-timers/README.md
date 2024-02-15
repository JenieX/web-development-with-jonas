# Numbers, Dates and Timers

## Numbers

Numbers in JavaScript are presented internally as floating point numbers (decimals).

```js
console.log(3 === 3.0);
// => true
```

## Tricks and Tips

### Convert to number

```js
// @ts-check
'use strict';

const thirteen = '13';

console.log(Number(thirteen));
// => 13

// @ts-ignore
console.log(thirteen * 1);
// => 13

console.log(+thirteen);
// => 13
```

### Check if a value is originally a `number`

```js
const value = false;
const valueAsNumber = Number(value);
console.log(valueAsNumber);
// => 0

// const value = true;
// const valueAsNumber = Number(value);
// console.log(valueAsNumber);
// => 1

// const value = '';
// const valueAsNumber = Number(value);
// console.log(valueAsNumber);
// => 0

// const value = '0';
// const valueAsNumber = Number(value);
// console.log(valueAsNumber);
// => 0

// const value = '3';
// const valueAsNumber = Number(value);
// console.log(valueAsNumber);
// => 0

if (valueAsNumber.toString() === value) {
  console.log('A number!');
} else {
  console.error('Not a number!');
}
```
