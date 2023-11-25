## Intro

CSS grid layout is a two-dimensional layout system for the web. It lets you organize content into rows and columns and offers many features to simplify the creation of complex layouts.

Similar to how you define flexbox, you define a grid layout by setting the value of the `display` property to `grid`. As in the case of flexbox, the `display: grid;` property transforms all the direct children of the container into grid items.

Unlike Flexbox, the items will not immediately look any different. Declaring `display: grid;` gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.

#### Notes

- By default, a row will have the height of its tallest grid item.
- If the `height` is set for the grid items by `grid-template-rows`, each grid item can override that `height` individually, **only** if it is lower than the value that is set by `grid-template-rows`, otherwise it will overlap behind its siblings.

---

## `grid-template-columns`

The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns.

## `grid-template-rows`

The `grid-template-rows` CSS property defines the line names and track sizing functions of the grid rows.
