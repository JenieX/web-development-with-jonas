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

## Operators

### [`Logical AND assignment (&&=)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)

The logical AND assignment (`&&=`) operator only evaluates the right operand and assigns to the left if the left operand is truthy.

```js
function makeBoolean(value) {
  if (value === 'yes') {
    return true;
  }

  return false;
}

const jenie = { name: 'Jenie', age: 32, married: 'yes' };
const jonas = { name: 'Jonas', age: 33 /* , married: 'no' */ };

// Switching `married` ('yes'/'no') value to `Boolean` if it exists

// Not really the same results as they will create the property with `undefined`
// value if the property didn't exit!
// jenie.married = jenie.married ? makeBoolean(jenie.married) : jenie.married;
// jenie.married = jenie.married && makeBoolean(jenie.married);

jenie.married &&= makeBoolean(jenie.married);
jonas.married &&= makeBoolean(jonas.married);

console.log(jenie);
// => {name: 'Jenie', age: 32, married: true}

console.log(jonas);
// => {name: 'Jonas', age: 33}
```

### [`Logical OR assignment (||=)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

The logical OR assignment (`||=`) operator only evaluates the right operand and assigns to the left if the left operand is falsy.

```js
const jenie = { name: 'Jenie', age: 32, married: true };
const jonas = { name: 'Jonas', age: 33 };

// Defaulting `married` property to `false` instead of `undefined`

// jenie.married = jenie.married ? jenie.married : false;
// jenie.married = jenie.married || false;
jenie.married ||= false;

jonas.married ||= false;

console.log(jenie);
// => {name: 'Jenie', age: 32, married: true}

console.log(jonas);
// => {name: 'Jonas', age: 33, married: false}
```

### [`Nullish coalescing assignment (??=)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

The nullish coalescing assignment (`??=`) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (`null` or `undefined`).

```js
const jenie = { name: 'Jenie', age: 32, children: 0 };

// Will not change anything!
jenie.children ??= 1;
// => {name: 'Jenie', age: 32, children: 0}

// ------------------------

// jenie.children = null;
jenie.children = undefined;

// Now that the value is either `null` or `undefined`, it will change
jenie.children ??= 1;

console.log(jenie);
// => {name: 'Jenie', age: 32, children: 1}
```
