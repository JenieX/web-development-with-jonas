# Data Structures and Modern Operators

## Destructuring

### Arrays

Example showing an issue that can be easily solved with destructuring.

```js
// Incorrect naming!
let [one, two, three = 3] = [2, 1];

console.log(one, two, three);
// => 2 1 3

// Correcting the order (old way)
// const temp = one;
// one = two;
// two = temp;

// Correcting the order in one go!
[one, two] = [two, one];

console.log(one, two, three);
// => 1 2 3
```

### Objects

Example showing re-assignment, default value, and changing properties names while destructuring.

```js
let one = '1';
let two = '2';
let three;

const realNumbers = {
  realOne: 1,
  'real-two': 2,
};

console.log(one, two, three);
// => '1' '2' undefined

({
  //
  realOne: one,
  ['real-two']: two,
  realThree: three = 3,
} = realNumbers);

console.log(one, two, three);
// => 1 2 3
```
