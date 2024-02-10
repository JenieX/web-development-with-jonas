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

Note: Can be useful when trying to change current value to another like capitalizing the letters for example.

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

### [`Optional chaining (?.)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

The optional chaining (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is `undefined` or `null`, the expression short circuits and evaluates to `undefined` instead of throwing an error.

```js
const jenie = { name: 'Jenie', age: 32, wife: { age: 35 }, children: ['Adam'] };
const jonas = { name: 'Jonas', age: 33 };

console.log(jenie.wife.age);
// => 35
console.log(jenie.children[0]);
// => 'Adam'

console.log(jonas.children?.[0]);
// => undefined
console.log(jonas.wife?.age);
// => undefined
```

## [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections)

### [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

The `Set` object lets you store unique values of any type, whether primitive values or object references.

`Set` objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the `add()` method successfully (that is, there wasn't an identical element already in the set when `add()` was called).

Note: Sets values have no indexes, therefore it is not possible to retrieve any value. Note that `Sets` are not intended to replace `Arrays`!

Common usages for `Sets`:

- Removing duplicate values of `Arrays`
- Getting the length of unique items in an array by using the `size` method
- Counting the letters in strings by using the `size` method as well

```js
/* 
Syntax:
  - new Set();
  - new Set(iterable);
*/

const jenie = { name: 'Jenie', age: 32 };

const mySet = new Set([1, 2, 3]);
mySet.add(jenie);

console.log(mySet);
// => Set(4) {1, 2, 3, {..}}

console.log(mySet.size);
// => 4

// ------------------------

console.log(mySet.has(jenie));
// => true

mySet.delete(1);

console.log(mySet);
// => Set(3) {2, 3, {..}}

// ------------------------

mySet.clear();

console.log(mySet);
// => Set(0) {size: 0}
```

### [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

`Map` objects are collections of key-value pairs. A key in the `Map` may only occur once; it is unique in the `Map`'s collection. A `Map` object is iterated by key-value pairs — a `for...of` loop returns a 2-member array of `[key, value]` for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the `set()` method (that is, there wasn't a key with the same value already in the map when `set()` was called).

```js
/* 
Syntax:
  - new Map();
  - new Map(2D key-value Array);
*/

const keyValueArray = [
  ['one', 1],
  ['two', 2],
];

const jenie = { name: 'Jenie', age: 32 };

const myMap = new Map(keyValueArray);
myMap.set('three', 3).set(jenie, 'me');

console.log(myMap);
// => Map(4) {'one' => 1, 'two' => 2, 'three' => 3, {…} => 'me'}

console.log(myMap.size);
// => 4

// ------------------------

console.log(myMap.get(jenie));
// => 'me'

console.log(myMap.has(jenie));
// => true

myMap.delete('one');

console.log(myMap);
// => Map(3) {'two' => 2, 'three' => 3, {…} => 'me'}

// ------------------------

myMap.clear();

console.log(myMap);
// => Map(0) {size: 0}
```

#### [Objects vs. Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)

`Object` is similar to `Map`—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), `Object` has been used as `Map` historically.

##### Advantages over using `Objects`:

- A `Map` does not contain any keys by default
- A `Map`'s keys can be any value
- The keys ordered in `Map` is guaranteed
- Items number in `Maps` can be access easily via `size`
- A `Map` is an iterable
- Chaining multiple calls to `set`

## Tricks

### `index` inside for-of-loop

Can be done with the help of [`Array.prototype.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries). See the example below.

```js
const fruits = ['Apple', 'Banana', 'Orange'];

for (const [index, fruit] of fruits.entries()) {
  console.log(fruit);
}
```

### `Map` to store elements by classes

```js
const elements = new Map();

elements
  .set('.header', document.querySelector('.header'))
  .set('.content', document.querySelector('.content'));

console.log(elements);
```

### `Object` to `Map`

```js
const jenie = { name: 'Jenie', age: 32, wife: { age: 35 }, children: ['Adam'] };

const myMap = new Map(Object.entries(jenie));

console.log(myMap);
// => Map(4) {'name' => 'Jenie', 'age' => 32, 'wife' => {…}, 'children' => Array(1)}
```
