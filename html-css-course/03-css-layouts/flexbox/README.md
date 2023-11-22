## Intro

Flexbox is a one-dimensional layout method for arranging items in rows (default) or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.

Flexbox conveniently solve issues like:

- Vertically centering a block of content inside its parent.
- Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Making all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

#### Notes

- Setting `display: flex;` on container element (flex container) would enable Flexbox. Children of this element are called flex items.
- Horizontally, **by default**, each flex item takes up exactly the space that it needs for its text content. And Vertically, **by default** (`align-items: stretch;`), all the flex items are as tall as the tallest one of them.

## Main Axis

The main axis in flexbox is defined by the direction set by the flex-direction property. There are four possible values for `flex-direction`. These are:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Should you choose `row` or `row-reverse` then your main axis will run along the row in the inline direction.

Choose `column` or `column-reverse` and your main axis will run top to bottom of the page in the block direction.

On the main axis you can control the sizing of flex items by adding any available space to the items themselves, by way of flex properties on the items. Or, you can control the space between and around items by using the `justify-content` property.

## Cross Axis

The cross axis in flexbox runs perpendicular to the main axis, therefore if your `flex-direction` is either `row` or `row-reverse` then the cross axis runs down the columns.

If your main axis is `column` or `column-reverse` then the cross axis runs along the rows.

Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items. In the case of a multi-line flex container, with additional space on the cross axis, you can use `align-content` to control the spacing of the rows.

---

## `justify-content`

The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container. Possible values include:

- `flex-start` (default)
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`

## `align-items`

The CSS align-items property sets the `align-self` value on all direct children as a group. In **Flexbox**, it controls the alignment of items on the Cross Axis. Possible values include:

- `stretch` (default)
- `flex-start`
- `flex-end`
- `center`
- `baseline`

## `gap`

The gap CSS shorthand property sets the gaps (gutters) between rows and columns.

This property is a shorthand for the following CSS properties:

- `column-gap`
- `row-gap`

## `flex-direction`

The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). Possible values include:

- `row` (default)
- `row-reverse`
- `column`
- `column-reverse`

Note that the values row and row-reverse are affected by the directionality of the flex container. If its dir attribute is ltr, row represents the horizontal axis oriented from the left to the right, and row-reverse from the right to the left; if the dir attribute is rtl, row represents the axis oriented from the right to the left, and row-reverse from the left to the right.

## `flex-wrap`

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. Possible values include:

- `nowrap` (default)
- `wrap`
- `wrap-reverse`

## `align-content`

The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis. Possible values include:

- `stretch` (default)
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`

This property has no effect on single line flex containers (i.e. ones with `flex-wrap: nowrap`).

---
