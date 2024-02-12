# Arrays

## [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

The `slice()` method of `Array` instances returns a **shallow copy** of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

Hint: The length of the extracted nre array will be (indexEnd || ArrayLength) - (indexStart).

### Syntax

```js
slice();
slice(indexStart);
slice(indexStart, indexEnd);
```

Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const index = 1;
const indexEnd = 3;

// ------------------------

const extractedFirst = numbers.slice(index, indexEnd);

console.log(extractedFirst);
// => [2, 3]

const extractedFirstLength = indexEnd - index;
// const extractedFirstLength = text.length - index;
console.log(extractedFirstLength);
// => 2

// ------------------------

const extractedSecond = numbers.slice(index);

console.log(extractedSecond);
// => [2, 3, 4, 5, 6, 7]

const extractedSecondLength = numbers.length - index;

console.log(extractedSecondLength);
// => 6
```

## [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

The `splice()` method of `Array` instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Related: [`Array.prototype.toSpliced()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

### Syntax

```js
splice(indexStart);
splice(indexStart, deleteCount);
splice(indexStart, deleteCount, item1);
splice(indexStart, deleteCount, item1, item2);
splice(indexStart, deleteCount, item1, item2, /* …, */ itemN);
```

If `deleteCount` is omitted, or if its value is greater than or equal to the number of elements after the position specified by `indexStart`, then all the elements from `indexStart` to the end of the array will be deleted. However, if you wish to pass any `itemN` parameter, you should pass `Infinity` as `deleteCount` to delete all elements after `indexStart`, because an **explicit `undefined` for `deleteCount` gets converted to `0`**.

Remove example

```js
const numbers = [1, 2, 3, 3, 4, 4, 5];

const result = numbers.splice(3, 2);

console.log(result);
// => [3, 4]

console.log(numbers);
// => [1, 2, 3, 4, 5]
```

Replace example

```js
const months = ['Jan', 'Feb', 'March', 'April', 'June', 'June'];

const result = months.splice(4, 1, 'May');

console.log(result);
// => ['June']

console.log(months);
// => ['Jan', 'Feb', 'March', 'April', 'May', 'June']
```

Insert example

```js
const months = ['Jan', 'March', 'April', 'May'];

const result = months.splice(1, 0, 'Feb');

console.log(result);
// => []

console.log(months);
// => ['Jan', 'Feb', 'March', 'April', 'May']
```

`Infinity` example

```js
const numbers = [1, 2, 3];

// Without inserting:
// const result = numbers.splice(1);
// const result = numbers.splice(1, Number.POSITIVE_INFINITY);
// const result = numbers.splice(1, Infinity);

const result = numbers.splice(1, Infinity, 5);

console.log(result);
// =>  [2, 3]

console.log(numbers);
// =>  [1, 5]
```

Sparse example

```js
const numbers = [1, 2, , , , 4, 4, , 5];

const result = numbers.splice(2, 3);

console.log(result);
// -> [empty × 3]

console.log(numbers);
// -> [1, 2, 4, 4, empty, 5]

numbers.splice(4, 1);

console.log(numbers);
// -> [1, 2, 4, 4, 5]
```

---

## []()

```js
//
```

## Tricks and Tips

### Create a shallow copy

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers);
// => [1, 2, 3, 4, 5, 6, 7]

console.log(numbers.slice());
// => [1, 2, 3, 4, 5, 6, 7]

console.log([...numbers]);
// => [1, 2, 3, 4, 5, 6, 7]
```
