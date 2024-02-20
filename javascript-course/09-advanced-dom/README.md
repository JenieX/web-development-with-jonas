# Advanced-DOM

## Tips and Tricks

### HTMLCollection is live

An `HTMLCollection` in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (e.g., using `Array.from`) to iterate over if adding, moving, or removing nodes.

```js
// @ts-check
'use strict';

// Live
const collection = document.getElementsByTagName('tagName');

console.log(collection);
// => HTMLCollection []

// ------------------------

// Not live
const nodeList = document.querySelectorAll('tagName');

console.log(nodeList);
// => NodeList []
```

### Changing Element Position

```js
const p = document.createElement('p');
p.textContent = 'Hey there!';

document.body.append(p);
document.body.prepend(p);
```

---

<img src="shots/behind-the-scenes.png?raw=true" width="700" >
