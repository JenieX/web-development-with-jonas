# Flex

## Container Properties

### [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

The `flex-direction` CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

Value: `row` (default)| `row-reverse` | `column` | `column-reverse`

Tip: Whenever you switch to `column`, try rotating the container `-90deg` in your imagination.

### [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

The `gap` CSS shorthand property sets the gaps (gutters) between rows and columns (`row-gap` and `column-gap`).

Note: The property `row-gap` can only work on flex containers that have more than one line.

### [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

The CSS `justify-content` property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

Value: `flex-start` (default) | `flex-end ` | `center` | `space-around` | `space-between` | `space-evenly`

### [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

The CSS `align-items` property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

Value: `stretch` (default) | `flex-start` | `flex-end` | `center` | `baseline`

### [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

The CSS `align-content` property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

Value: `stretch` (default) | `flex-start` | `flex-end` | `center` | `space-around` | `space-between`

Note: This property can only work on flex containers that have more than one line.

### [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

The `flex-wrap` CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

Value: `nowrap` (default) | `wrap` | `wrap-reverse`

## Item Properties

### [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

The `align-self` CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

### [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

This property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

Value: `0 1 auto` (default) | `auto` | `initial` | `none`

Value Hints:

- 1 value

  - A number without a unit => is for `flex-grow`, and `flex-basis` takes the value of `0`.
  - A width or height value => is for `flex-basis`.

- 2 values

  - Two numbers without units => for `flex-grow` and `flex-shrink` respectively.
  - Two values, second (width/height) => flex-grow | flex-basis

- 3 values => for `flex-grow`, `flex-shrink`, and `flex-basis` respectively.

### [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)

The `flex-grow` CSS property sets the flex grow factor, which specifies how much of the flex container's remaining space should be assigned to the flex item's main size.

Value: `0` (default) | `<positive-number>`

### [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)

The `flex-shrink` CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

Value: `1` (default) | `<positive-number>`

### [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

The `flex-basis` CSS property sets the initial main size (width by default) of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

Value: `auto` (default) | `<'width'>`

Notes:

- Should be used instead of the `width` property on flex items, and note that it would take priority over it.
- If one value is set for `flex-grow` on all flex items while their content are not equal, there are [two cases](./playground/flex-basis/index.html) ([preview](https://htmlpreview.github.io/?https://github.com/JenieX/web-development-with-jonas/blob/main/advanced-css-course/06-master-flexbox/playground/flex-basis/index.html)):
  - If one width value is set for `flex-basis` on all flex items, they will grow equally.
  - If the keyword `auto` is set for `flex-basis`, which is done by default, items will grow based on their content.
- The `auto` value for `flex-basis` will give it the value of the width of the element.

### [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

The `order` CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

Value: `0` (default) | `<number>`

## [CSS variables (custom properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

CSS variables are entities defined by CSS authors that represent specific values to be reused throughout a document.

### Declaring custom properties

In CSS, you can declare a custom property using two dashes as a prefix for the property name, or by using the @property at-rule.

#### Using a prefix of two dashes (`--`)

A common practice is to define custom properties on the `:root` pseudo-class, so that it can be referenced globally.

```css
:root {
  --color-primary: #eb2f64;
  --color-primary-dark: #ba265d;
  --color-primary-light: #ff3366;
}
```

#### Using the @property at-rule

...

### Advantages over Sass variables

- Native
- Can be manipulated in the devtools.
- Can be manipulated from JavaScript.
- Easier to use in the code function.
- CSS variables cascade and they are inherited.
