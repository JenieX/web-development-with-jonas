# Numbers, Dates and Timers

## Numbers

Numbers in JavaScript are presented internally as floating point numbers (decimals).

```js
console.log(3 === 3.0);
// => true
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

Hint: Check if a value is a real number. Should be used instead of `Number.isNaN()`.

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

---

### []()

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
