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

`justify-content` does not take `baseline` value.

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

Using `gap` is a better solution than to use `margin` (`margin-right` for default) to all element, then excluding the last item.

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

## `align-self`

The align-self CSS property overrides a grid or flex item's `align-items` value. In Flexbox, it aligns the item on the cross axis. Possible values include:

- `auto` (default)
- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `baseline`

The property doesn't apply to block-level boxes, or to table cells. If a flexbox item's cross-axis margin is auto, then align-self is ignored.

## `flex-grow`

The flex-grow CSS property sets the flex grow factor, which specifies how much of the flex container's remaining space should be assigned to the flex item's main size.

The flex-grow property is specified as a single \<number\>. Negative values are invalid. Defaults to `0` (not allowed to grow).

When the flex-container's main size is larger than the combined main sizes of the flex items, the extra space is distributed among the flex items, with each item growth being their growth factor value as a proportion of the sum total of all the container's items' flex grow factors.

## `flex-shrink`

The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

The flex-shrink property is specified as a single \<number\>. Negative values are invalid. Defaults to `1` (allowed to shrink).

## `flex-basis` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

The `flex-basis` CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

The `flex-basis` property is specified as either the keyword ~~`content`~~ `auto` (default) or a <'width'>.

#### Notes

- When we want to size flex items, and in particular the `width`, then we usually do not use the `width` property, but instead we use `flex-basis`.
- In case both `flex-basis` (other than auto) and width (or `height` in case of `flex-direction: column;`) are set for an element, **`flex-basis` has priority**.
- In case of `flex-grow` is enabled for all flex items with the same value, and these items have different width (or `height` in case of `flex-direction: column;`), there are two possibilities:
  - If `flex-basis` is set on these flex items with the same value, they will grow equally.
  - If not, `flex-basis` will defaults to `auto` and they will grow according to their width (or `height` in case of `flex-direction: column;`).

## `flex` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

This property is a shorthand for the following CSS properties:

- `flex-grow`
- `flex-shrink`
- `flex-basis`

#### Value

- `0 1 auto` (default)
- Keyword values:
  - `auto`
  - `initial`
  - `none`
- One value, unit-less number => `flex-grow`. `flex-basis` is then equal to `0`.
- One value, width/height => `flex-basis`
- Two values => `flex-grow` | `flex-shrink`
- Two values, second (width/height) => `flex-grow` | `flex-basis`
- Three values => `flex-grow` | `flex-shrink` | `flex-basis`

## `order`

The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order. Items not given an explicit order value are assigned the **default** value of `0`.

Value \<integer\>: Represents the ordinal group to be used by the item. Negative values are also valid.

Can be very helpful when we are adapting a bigger layout to a small layout for mobile screens.
