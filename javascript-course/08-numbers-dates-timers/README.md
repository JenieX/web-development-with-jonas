# Numbers, Dates and Timers

## Numbers

Numbers in JavaScript are presented internally as floating point numbers (decimals).

```js
console.log(3 === 3.0);
// => true

const myInt = 5; // A number without decimals
const myFloat = 6.667; // A number with decimals
```

### [`Number.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)

The `Number.parseInt()` static method parses a string argument and returns an integer of the specified radix or base.

```js
// @ts-check
'use strict';

console.log(Number.parseInt(' 30px  '));
// => 30

console.log(Number.parseInt('   2.4rem '));
// => 2
```

### [`Number.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)

The `Number.parseFloat()` static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns `NaN`.

```js
// @ts-check
'use strict';

console.log(Number.parseFloat(' 30px  '));
// => 30

console.log(Number.parseFloat('   2rem '));
// => 2

console.log(Number.parseFloat('   2.4rem '));
// => 2.4
```

### [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)

The `Number.isNaN()` static method determines whether the passed value is the number value `NaN`, and returns `false` if the input is not of the Number type. It is a **more robust version** of the original, global `isNaN()` function.

```js
// @ts-check
'use strict';

console.log(Number.isNaN(NaN));
// => true

console.log(Number.isNaN(Number.NaN));
// => true

// @ts-ignore
console.log(Number.isNaN('a' / 10));
// => true

console.log(Number.isNaN(37));
// => false
```

#### [Difference between `Number.isNaN()` and global `isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#difference_between_number.isnan_and_global_isnan)

`Number.isNaN()` doesn't attempt to convert the parameter to a number, so non-numbers always return `false`. However, the global `isNaN()` coerces its parameter to a number:

### [`Number.isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)

The `Number.isFinite()` static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive `Infinity`, negative `Infinity`, nor `NaN`.

Hint: Checks if a value is a real number. Should be used instead of `Number.isNaN()`.

```js
// @ts-check
'use strict';

console.log(Number.isFinite(Infinity));
// => false

console.log(Number.isFinite(-Infinity));
// => false

console.log(Number.isFinite(NaN));
// => false

console.log(Number.isFinite(3));
// => true
```

#### [Difference between `Number.isFinite()` and global `isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite)

In comparison to the global `isFinite()` function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return `true`, and non-numbers always return `false`.

```js
console.log(isFinite('0'));
// => true

console.log(Number.isFinite('0'));
// => false

console.log(isFinite(null));
// => true

console.log(Number.isFinite(null));
// => false
```

### [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

The `Number.isInteger()` static method determines whether the passed value is an integer.

Hint: To check for floating point numbers as well, use `Number.isFinite()` instead.

```js
// @ts-check
'use strict';

console.log(Number.isInteger(0));
// => true

console.log(Number.isInteger(1));
// => true

console.log(Number.isInteger(-10));
// => true

console.log(Number.isInteger(5.0));
// => true

console.log(Number.isInteger(0.1));
// => false

console.log(Number.isInteger(NaN));
// => false

console.log(Number.isInteger(Infinity));
// => false

console.log(Number.isInteger(-Infinity));
// => false

console.log(Number.isInteger('10'));
// => false

// ------------------------

// An exception for the case of losing precision

console.log(Number.isInteger(5.0000000000000001));
// => true

console.log(Number.isInteger(4500000000000000.1));
// => true
```

### [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to `0` and less than `1`, with approximately uniform distribution over that range — which you can then scale to your desired range.

<img src="ruler.webp?raw=true" width="700" >

```js
// @ts-check
'use strict';

// https://stackoverflow.com/a/29246176

let lastExpression;

/** @param {() => number} generator */
function logResults(generator) {
  let loops = 1_000_000;

  /** @type {Record<String, number>} */
  const collector = {};

  while (loops) {
    const randomNumber = generator();

    if (collector[randomNumber] === undefined) {
      collector[randomNumber] = 1;
    } else {
      collector[randomNumber] += 1;
    }

    loops -= 1;
  }

  console.log(collector);
}

/**
 * Generate random integer number between 0 (included) and max (excluded)
 *
 * @param {number} max
 */
function getRandomIntegerFromZero(max) {
  const expression = `Math.floor(Math.random() * ${max})`;
  if (lastExpression !== expression) {
    lastExpression = expression;
    console.log(lastExpression);
  }

  return Math.floor(Math.random() * max);
}

/**
 * Generate random integer number between min (included) and max (excluded)
 *
 * @param {number} min
 * @param {number} max
 * @param {boolean} maxIncluded
 */
function getRandomInteger(min, max, maxIncluded = false) {
  const zeroOrOne = maxIncluded === true ? 1 : 0;

  const expression = `Math.floor(Math.random() * ${max - min + zeroOrOne}) + ${min}`;
  if (lastExpression !== expression) {
    lastExpression = expression;
    console.log(lastExpression);
  }

  return Math.floor(Math.random() * (max - min + zeroOrOne)) + min;
}

// ------------------------

logResults(getRandomIntegerFromZero.bind(undefined, 2));
// => {0: 500000, 1: 500000}

logResults(getRandomIntegerFromZero.bind(undefined, 4));
// => {0: 250000, 1: 250000, 2: 250000, 3: 250000}

logResults(getRandomInteger.bind(undefined, 4, 8));
// => {4: 250000, 5: 250000, 6: 250000, 7: 250000}

logResults(getRandomInteger.bind(undefined, 4, 8, true));
// => {4: 200000, 5: 200000, 6: 200000, 7: 200000, 8: 200000}

//------------------------

// Extra examples

// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;
```

### [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

The `Math.floor()` static method always **rounds down** and returns the largest integer less than or equal to a given number.

Note: Coerces its parameter to a number.

```js
// @ts-check
'use strict';

console.log(Math.floor(5.95));
// => 5

console.log(Math.floor(5.05));
// => 5

console.log(Math.floor(5));
// => 5

console.log(Math.floor(-5.05));
// => -6
```

### [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

The `Math.ceil()` static method always **rounds up** and returns the smallest integer greater than or equal to a given number.

Note: Coerces its parameter to a number.

```js
// @ts-check
'use strict';

console.log(Math.ceil(0.95));
// => 1

console.log(Math.ceil(4));
// => 4

console.log(Math.ceil(7.004));
// => 8

console.log(Math.ceil(-7.004));
// => -7
```

### [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

The `Math.round()` static method returns the value of a number **rounded to the nearest** integer.

Note: Coerces its parameter to a number.

```js
// @ts-check
'use strict';

console.log(Math.round(0.9));
// => 1

console.log(Math.round(5.95));
// => 6

console.log(Math.round(5.5));
// => 6

console.log(Math.round(5.499999999999999));
// => 5

console.log(Math.round(-5.05));
// => -5

console.log(Math.round(-5.5));
// => -5

console.log(Math.round(-5.95));
// => -6
```

### [`Math.trunc()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

The `Math.trunc()` static method returns the integer part of a number by **removing any fractional digits**.

Unlike the other three `Math` methods: `Math.floor()`, `Math.ceil()` and `Math.round()`, the way `Math.trunc()` works is very simple. It truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.

Note: Coerces its parameter to a number.

```js
// @ts-check
'use strict';

console.log(Math.trunc(13.37));
// => 13

console.log(Math.trunc(42.84));
// => 42

console.log(Math.trunc(0.123));
// => 0

console.log(Math.trunc(-0.123));
// => -0
```

### [`Math.abs()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

The `Math.abs()` static method returns the **absolute value** of a number.

Note: Coerces its parameter to a number.

```js
// @ts-check
'use strict';

console.log(Math.abs(-Infinity));
// => Infinity

console.log(Math.abs(-1));
// => 1

console.log(Math.abs(-0));
// => 0

console.log(Math.abs(1));
// => 1
```

---

### [``]()

```js
//
```

## Tricks and Tips

### Convert to number

```js
// @ts-check
'use strict';

const thirteen = '13';

console.log(Number(thirteen));
// => 13

console.log(+thirteen);
// => 13

// @ts-ignore
console.log(thirteen * 1);
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

### [`Math.random()` to get 50/50 chance](https://stackoverflow.com/a/44651632), [extra](https://stackoverflow.com/a/21507231)

The random number generators returns a number from `0` to `0.99999999`, We can split this range into two, [`0` - `0.49999999`] and [`0.5` - `0.9999999`].

<img src="ruler.webp?raw=true" width="700" >

```js
// @ts-check
'use strict';

let loops = 1_000_000;
let face = 0;
let tail = 0;

while (loops) {
  // const side = Math.random() < 0.5 ? 'tail' : 'face';
  // const side = Math.random() * 2 < 1 ? 'tail' : 'face';
  const side = Math.floor(Math.random() * 2) === 0 ? 'tail' : 'face';

  if (side === 'tail') {
    face += 1;
  } else {
    tail += 1;
  }

  loops -= 1;
}

console.log({ face, tail });
// => {face: 500000, tail: 500000}
```
