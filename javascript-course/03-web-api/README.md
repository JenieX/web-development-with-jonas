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
