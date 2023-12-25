## Tips

### Scroll to section

Using the property `href="#cta"` on an anchor element, makes it so that clicking the element would auto-scroll to the element that has the property `id="cta"` on it.

## CSS Properties

### [`scroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

- `auto`

  - The scrolling box scrolls instantly.

- `smooth`
  - The scrolling box scrolls in a smooth fashion using a user-agent-defined easing function over a user-agent-defined period of time.

### [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect the element or its background needs to be transparent or partially transparent.

```css
background-color: rgb(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
```

## Links

- [Can I use](https://caniuse.com/)
