## [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

To built a desktop responsive design, we start at the highest width, then make it smaller and smaller and keep adjusting whenever our design breaks.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` should always be included in the HTML `<head>`.
- If there are conflicting media queries, the last one will be applied.
- Responsive units in media queries **do not respond to our defined `rem` setting** in the HTML.
  - One `rem` is not `10px`.
  - One `rem` is always one `em` that always equals `16px`.
  - We should not use `px` nor `rem` (has bugs), but use `em` (current font-size) instead.
- Extremely common screen size is `1366px`. These are HD ready screens.
- A media query should at least work for a range of 200 or 300 pixels.
  - We should not create a media query every 50 pixels!
  - You should test that your media query works below 150px at least.
- You should create your media query break points just before reaching down a width where your design breaks the most, and not just follow the popular break points!
- `display: none;` can not be animated, therefore we use a combination of properties as a trick to achieve its behavior:
  - `opacity: 0;` to hide the element visually
  - `pointer-events: none;` to make the element unaccessible to mouse and keyboard
  - `visibility: hidden;` to hide the element from screen readers
- To create an animation for an element (completely hidden) sliding from the right, we position it there and have the `<body>|<html>` clip it by `overflow-x: hidden;`, then use `translateX`.
  - `overflow-x: hidden;` works only if there is nothing absolutely positioned in relation the `<body>|<html>`.
  - Always use `translateX` property instead of the `left/right` property.
- `translate` is simply the easiest way of moving elements around without affecting the rest of the elements around it.
