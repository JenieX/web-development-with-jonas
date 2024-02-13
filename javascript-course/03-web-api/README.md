# Web APIs

## [`Element: insertAdjacentHTML() method`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

The `insertAdjacentHTML()` method of the `Element` interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

### Syntax

```js
insertAdjacentHTML('beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', text);
```

### Visualization of position names

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## Tips

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
