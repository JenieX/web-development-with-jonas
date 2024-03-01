# Advanced-DOM

## HTML

### [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

<img src="shots/defer-and-async-3.png?raw=true" width="700" >

[Read more](https://gist.github.com/jakub-g/385ee6b41085303a53ad92c7c8afd7a6)

Note: The `defer` attribute has no effect on module scripts — they defer by default.

#### Attributes

##### defer

This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing `DOMContentLoaded`.

Scripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.

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

### [`closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)

The `closest()` method of the `Element` interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

#### Return value

**Itself** or the closest ancestor `Element`, which matches the `selectors`. If there are no such element, `null`.

```js
// @ts-check
'use strict';

const container = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

span.textContent = 'Hello world';

container.append(p);
p.append(span);

console.log(container.outerHTML);
// => '<div><p><span>Hello world</span></p></div>'

// ------------------------

console.log(p.outerHTML);
// => '<p><span>Hello world</span></p>'

console.log(p.closest('p')?.outerHTML);
// => '<p><span>Hello world</span></p>'

console.log(p.closest('div')?.outerHTML);
// => '<div><p><span>Hello world</span></p></div>'
```

## addEventListener

### [`currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

The `currentTarget` read-only property of the `Event` interface identifies the element to which the event handler has been attached.

This will not always be the same as the element on which the event was fired, because the event may have fired on a descendant of the element with the handler, and then bubbled up to the element with the handler. The element on which the event was fired is given by `Event.target`.

Hint: Usually, it is the element that `this` points to, and can be used in arrow functions instead of `this`.

### [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

The read-only `target` property of the `Event` interface is a reference to the object onto which the event was dispatched. It is different from `Event.currentTarget` when the event handler is called during the bubbling or capturing phase of the event.

### [`mouseenter`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)

The `mouseenter` event is fired at an `Element` when a pointing device (usually a mouse) is initially moved so that its hot-spot is within the element at which the event was fired.

`mouseenter` and `mouseover` are similar but differ in that `mouseenter` does not bubble and `mouseover` does. See the playground example.

### [`mouseleave`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)

The `mouseleave` event is fired at an `Element` when the cursor of a pointing device (usually a mouse) is moved out of it.

`mouseleave` and `mouseout` are similar but differ in that `mouseleave` does not bubble and `mouseout` does. This means that `mouseleave` is fired when the pointer has exited the element and all of its descendants, whereas `mouseout` is fired when the pointer leaves the element or leaves one of the element's descendants (even if the pointer is still within the element). See the playground example.

### [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

Note: The `defer` attribute has no effect on module scripts — they defer by default.

The `DOMContentLoaded` event fires when the HTML document has been completely parsed, and all deferred scripts (`<script defer src="…">` and `<script type="module">`) have downloaded and executed. It doesn't wait for other things like images, sub-frames, and async scripts to finish loading.

`DOMContentLoaded` does not wait for stylesheets to load, however **deferred scripts do wait for stylesheets, and the `DOMContentLoaded` event is queued after deferred scripts**. Also, scripts which aren't deferred or async (e.g. `<script>`) will wait for already-parsed stylesheets to load.

Hint: You can inspect the timing for this event in the Network tab of the DevTools.

```ts
/**
 * Waits for the page to load.
 *
 * @param completely Whether or not to wait for resources to load as well.
 */
async function pageLoad(completely?: boolean): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve();

      return;
    }

    if (completely === true) {
      window.addEventListener('load', () => resolve());

      return;
    }

    document.addEventListener('DOMContentLoaded', () => resolve());
  });
}
```

### [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

The `load` event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. This is in contrast to `DOMContentLoaded`, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

### [`beforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)

The `beforeunload` event is fired when the current window, contained document, and associated resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.

## Window

### [`scrollX`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX)

The read-only `scrollX` property of the `Window` interface returns the number of pixels that the document is currently scrolled horizontally.

Note: The `pageXOffset` property is an alias for the `scrollX` property.

### [`scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

The read-only `scrollY` property of the `Window` interface returns the number of pixels that the document is currently scrolled vertically.

Note: The `pageYOffset` property is an alias for the `scrollY` property.

### [`getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

The Window.`getComputedStyle()` method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.

## Web APIs

### [`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

Intersection Observer observes the “intersection” (i.e. the passing across) of an element through one of its ancestor elements or the area on screen where the page is visible (aka the viewport).

#### Intersection observer options

##### `root`

The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. **Defaults to the browser viewport** if not specified or if `null`.

##### `rootMargin`

Margin around the root. Can have values similar to the CSS margin property. The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. **Defaults to all zeros**.

##### `threshold`

Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of `0.5`. A threshold of `0` (**default**) triggers the intersection when the first pixel of the target element intersects the root element. A threshold of `1` triggers when the entire target element is inside the root element.

Hint: ~A single value for `threshold` (not an array), will give a single entry inside `entries`.~ Seems to give multiple entries for multiple observed elements!

#### [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)

The `IntersectionObserverEntry` interface of the Intersection Observer API describes the intersection between the target element and its root container at a specific moment of transition.

##### [`isIntersecting`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)

The `isIntersecting` property is a Boolean value which is `true` if the target element intersects with the intersection observer's `root`. If this is `true`, then, the `IntersectionObserverEntry` describes a transition into a state of intersection; if it's `false`, then you know the transition is from intersecting to not-intersecting.

##### [`intersectionRatio`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)

The `intersectionRatio` property tells you how much of the target element is currently visible within the `root`'s intersection ratio, as a value between `0` and `1`.

#### Read more

- [An Explanation of How the Intersection Observer Watches](https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/)
- [A Few Functional Uses for Intersection Observer](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)

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

With capturing, the event is first captured by the outermost element and propagated to the inner elements. **See the playground examples**.

### Event delegation

Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future. **See the playground example**.

---

<img src="shots/behind-the-scenes.png?raw=true" width="700" >
<img src="shots/defer-and-async-1.png?raw=true" width="700" >
<img src="shots/defer-and-async-2.png?raw=true" width="700" >
