## Intro

CSS grid layout is a two-dimensional layout system for the web. It lets you organize content into rows and columns and offers many features to simplify the creation of complex layouts.

Similar to how you define flexbox, you define a grid layout by setting the value of the `display` property to `grid`. As in the case of flexbox, the `display: grid;` property transforms all the direct children of the container into grid items.

you can define columns and rows on your grid using the `grid-template-rows` and `grid-template-columns` properties.

Unlike Flexbox, the items will not immediately look any different. Declaring `display: grid;` gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.

In CSS grid, we have a row axis and a column axis. but, unlike flexbox, we can not change their directions.

#### Notes

- By default, a row will have the height of its tallest grid item.
- If the `height` is set for the grid items by `grid-template-rows`, each grid item can override that `height` individually, if it is lower than the value that is set by `grid-template-rows`, otherwise it will overlap behind its siblings.

## [Grid Axis](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Axis)

CSS Grid Layout is a two-dimensional layout method enabling the laying out of content in rows and columns. Therefore in any grid we have two axes. The block or column axis, and the inline or row axis.

## [Grid Lines](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines)

Grid lines are created when you define tracks in the explicit grid using CSS Grid Layout.

In the following example there is a grid with three column tracks and two row tracks. This gives us 4 column lines and 3 row lines.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

Grid lines basically divide up the grid and separate the columns and the rows. These grid lines are numbered from one to the number of columns plus one, and the number of rows plus one. The intersection of all these grid lines, creates areas into which we can place the grid items, these areas are called the grid cells.

The numbers of these grid lines are actually important if we want to place a grid item at a specific area (cell). A cell can be empty.

## [Grid Tracks](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks)

A grid track (a column or a row) is the space between two adjacent grid lines. They are defined in the explicit grid by using the `grid-template-columns` and `grid-template-rows` properties or the shorthand `grid` or `grid-template` properties. Tracks are also created in the implicit grid by positioning a grid item outside of the tracks created in the explicit grid.

These tracks are about the space itself and not the grid items, more like how is a grid cell is about the area of the intersection of four grid lines, and not about the grid item.

## [Grid Cell](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Cell)

In a CSS Grid Layout, a grid cell is the smallest unit you can have on your CSS grid. It is the space between four intersecting grid lines and conceptually much like a table cell.

If you do not place items using one of the grid placement methods, direct children of the grid container will be placed one into each individual grid cell by the auto-placement algorithm. Additional row or column tracks will be created to create enough cells to hold all items.

---

## [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns.

## [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

The `grid-template-rows` CSS property defines the line names and track sizing functions of the grid rows.

## `gap`

The gap CSS shorthand property sets the gaps (gutters) between rows and columns.

This property is a shorthand for the following CSS properties:

- `column-gap`
- `row-gap`

Early versions of the specification called this property grid-gap, and to maintain compatibility with legacy websites, browsers will still accept grid-gap as an alias for gap.

Should be noted that this is the only way to set margins between the grid items, as using `margin` property wouldn't work.

## [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)

The CSS `justify-items` property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis. In grid layouts, it aligns the items inside their grid areas on the inline axis. Possible values include:

- `stretch` (default)
- `start`
- `end`
- `center`

## [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

The CSS align-items property sets the `align-self` value on all direct children as a group. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area. Possible values include:

- `stretch` (default)
- `start`
- `end`
- `center`

## [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) and [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

These two properties only apply if the container is larger than the grid.

The CSS `justify-content` property defines how the browser distributes space between and around content items along the **inline axis** of a grid container.

The CSS `align-content` property sets the distribution of space between and around content items along a grid's **block axis**.

. Possible values include:

- `start` (default)
- `end`
- `center`
