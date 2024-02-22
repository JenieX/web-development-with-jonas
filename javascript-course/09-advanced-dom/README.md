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

### [`dataset`](dataset)

The dataset read-only property of the `HTMLElement` interface provides read/write access to custom data attributes (data-) on elements.

```js
// @ts-check
'use strict';

const container = document.createElement('div');

container.insertAdjacentHTML(
  'afterbegin',
  '<div data-user="jenie" data-year-of-birth="1992"></div>',
);

const child = /** @type {HTMLDivElement} */ (container.firstElementChild);

console.log(child.dataset.user);
// => 'jenie'

console.log(child.dataset.yearOfBirth);
// => '1992'

console.log(container.outerHTML);
// => '<div><div data-user="jenie" data-year-of-birth="1992"></div></div>'
```

### [`clientWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)

The `Element.clientWidth` property is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scroll-bars (if present).

When `clientWidth` is used on the root element (the `<html>` element), (or on `<body>` if the document is in quirks mode), the viewport's width (excluding any scrollbar) is returned. **This is a special case of `clientWidth`**.

Note: This property will round the value to an integer. If you need a fractional value, use `element.getBoundingClientRect()`.

### [`clientHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)

The `Element.clientHeight` read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scroll-bars (if present).

When `clientHeight` is used on the root element (the `<html>` element), (or on `<body>` if the document is in quirks mode), the viewport's height (excluding any scrollbar) is returned. **This is a special case of `clientHeight`**.

### [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

The `Element.getBoundingClientRect()` method returns a `DOMRect` object providing information about the size of an element and its position relative to the viewport.

```js
const elementCoords = element.getBoundingClientRect();

// Old way
window.scrollTo({
  left: elementCoords.left + window.scrollX,
  top: elementCoords.top + window.scrollY,
  behavior: 'smooth',
});

// New way (See next section)
element.scrollIntoView({ behavior: 'smooth' });
```

### [`scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

The `Element` interface's `scrollIntoView()` method scrolls the element's ancestor containers such that the element on which `scrollIntoView()` is called is visible to the user.

---

### [``]()

```js

```

## Window

### [`scrollX`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX)

The read-only `scrollX` property of the `Window` interface returns the number of pixels that the document is currently scrolled horizontally.

Note: The `pageXOffset` property is an alias for the `scrollX` property.

### [`scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

The read-only `scrollY` property of the `Window` interface returns the number of pixels that the document is currently scrolled vertically.

Note: The `pageYOffset` property is an alias for the `scrollY` property.

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

### [Event bubbling and capturing](https://stackoverflow.com/a/4616720)

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

With bubbling (default), the event is first captured and handled by the innermost element and then propagated to outer elements.

With capturing, the event is first captured by the outermost element and propagated to the inner elements.

Important: See the playground examples.

---

<img src="shots/behind-the-scenes.png?raw=true" width="700" >
