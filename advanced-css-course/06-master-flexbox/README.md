# Flex

## Container Properties

### [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

The `flex-direction` CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

Value: `row` (default)| `row-reverse`| `column`| `column-reverse`

### [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

The `gap` CSS shorthand property sets the gaps (gutters) between rows and columns (`row-gap` and `column-gap`).

Note: The property `row-gap` can only work on flex containers that have more than one line.

### [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

The CSS `justify-content` property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

Value: `flex-start` (default) | `flex-end `| `center` | `space-around` | `space-between` | `space-evenly`

### [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

The CSS `align-items` property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

Value: `stretch` (default) | `flex-start` | `flex-end` | `center` | `baseline`

### [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

The CSS `align-content` property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

Value: `stretch` (default) | `flex-start` | `flex-end` | `center` | `space-around` | `space-between`

Note: This property can only work on flex containers that have more than one line.

### [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

The `flex-wrap` CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

Value: `nowrap` (default) | `wrap` | `wrap-reverse`
