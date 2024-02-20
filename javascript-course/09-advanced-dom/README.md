# Advanced-DOM

## Element

### [`after()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)

The `Element.after()` method inserts a set of `Node` or string objects in the children list of the `Element`'s parent, just after the `Element`. String objects are inserted as equivalent `Text` nodes.

```js
// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');

container.append(p);
p.after(document.createElement('span'), 'Text node');

console.log(container.outerHTML);
// => '<div><p></p><span></span>Text node</div>'
```

### [`before()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/before)

The `Element.before()` method inserts a set of `Node` or string objects in the children list of this `Element`'s parent, just before this `Element`. String objects are inserted as equivalent `Text` nodes.

```js
// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');

container.append(p);
p.before(document.createElement('span'), 'Text node');

console.log(container.outerHTML);
// => '<div><span></span>Text node<p></p></div>'
```

### [`cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

The `cloneNode()` method of the `Node` interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.

Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using `addEventListener()` or those assigned to element properties.

```js
// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

span.textContent = 'Hello world';

container.append(p);

p.append(span);
// Change position
p.after(span);
// p.before(span);
// container.append(span);
container.prepend(span.cloneNode(true));

console.log(container.outerHTML);
// => '<div><span>Hello world</span><p></p><span>Hello world</span></div>'
```

### [`insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

The `insertAdjacentHTML()` method of the `Element` interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

#### Syntax

```js
insertAdjacentHTML('beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', text);
```

#### Visualization of position names

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

---

### [``]()

```js

```

## Window

### [`getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

The Window.`getComputedStyle()` method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.

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
// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

span.textContent = 'Hello world';

container.append(p);

p.append(span);
// p.after(span);
// p.before(span);
// container.append(span);
container.prepend(span);

console.log(container.outerHTML);
// => '<div><span>Hello world</span><p></p></div>'
```

### Accessing and manipulating CSS variables

```js
// @ts-check
'use strict';

/* 
:root {
  --color-primary: #5ec576;
}
 */

const rootElement = document.documentElement;

const color = getComputedStyle(rootElement).getPropertyValue('--color-primary');

console.log(color);
// => '#5ec576'

rootElement.style.setProperty('--color-primary', 'crimson');
```

---

<img src="shots/behind-the-scenes.png?raw=true" width="700" >
