## CSS Properties

### [`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

#### [`<basic-shape>`](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape)

```css
/* Syntax */
clip-path: polygon(x y, x y, x y, x y);

/* Triangle */
clip-path: polygon(0 0, 50% 50%, 0 100%);

clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
```

### [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than transitions.

- To **fix the shaking bug** use `backface-visibility: hidden;` property.
- Set [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) property to `backwards` to apply the initial animation state on the original state of the element first.

```css
/* Syntax #1 */
@keyframes slideFadingFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Syntax #2 */

@keyframes slideFadingFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  70% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Usage #1 */
.heading-primary {
  animation-name: slideFadingFromLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  /* animation-delay: 3s; */
  /* animation-iteration-count: 3; */
}

/* Usage #2 */
.heading-secondary {
  animation: slideFadingFromLeft 1s ease-out;
}

/* Usage #3 */
.logo:hover {
  animation: slideFadingFromLeft 1s ease-out;
}
```

### [`backface-visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)

The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.

### [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

text-align
The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

Inline elements are treated as text, therefore this property would work on them as well.

### [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

- Two, three, or four `<length>` values.
  - If only two values are given, they are interpreted as `<offset-x>` and `<offset-y>` values.
  - If a third value is given, it is interpreted as a `<blur>`.
  - If a fourth value is given, it is interpreted as a `<spread>`.
- Optionally, the inset keyword.
- Optionally, a `<color>` value.

Making the illusion that an element is lifting up towards the user:

- **Half** the value of **Y** offset **for the X** offset (optional).
- **Higher** value for **Y** offset.
- Same value for **blur as the Y** offset.
- Making the shadow **more transparent** by lowering the alpha value.
- **Moving** the element **up** (`transform: translateY(-3px);`).
- **Making** the element **bigger** (`transform: scaleX(1.4) scaleY(1.6);`).

When the shadow is smaller, it gives the impression that the button is closer to the page and further away from the user. E.g. the active state in the example below.

Read more on [designing beautiful shadows in CSS](https://www.joshwcomeau.com/css/designing-shadows/).

```css
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
}
```

### [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

```css
transform: scale(1.5);
transform: scaleX(1.4) scaleY(1.6);

transform: translate(x, y);
transform: translateX(10px);
transform: translateY(10px);
```

Note that **the `skewX()` function skew the direct children**, therefore to counter that use the direct children selector.

```scss
.story {
  transform: skewX(-12deg);

  & > * {
    transform: skewX(12deg);
  }
}
```

### [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

The box-sizing CSS property sets how the total width and height of an element is calculated.

See **good practice** in the example below.

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;

  /* Changing a parent setting will be inherited by children automatically */
  box-sizing: inherit;
}

body {
  color: #333;
  box-sizing: border-box;
}
```

### [`calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)

The calc() CSS function lets you perform calculations when specifying CSS property values. You can use a different unit with each each operand in your expression. You may also use parentheses to establish computation order when needed.

```scss
$gutter-horizontal: 6rem;
$grid-a-third-cell: calc((100% - ($gutter-horizontal * 2)) / 3);
$grid-a-quarter-cell: calc((100% - ($gutter-horizontal * 3)) / 4);

.col-1-of-2 {
  width: calc((100% - $gutter-horizontal) / 2);
}

.col-1-of-3 {
  width: $grid-a-third-cell;
}

.col-2-of-3 {
  width: calc((($grid-a-third-cell) * 2) + $gutter-horizontal);
}

.col-1-of-4 {
  width: $grid-a-quarter-cell;
}

.col-2-of-4 {
  width: calc((($grid-a-quarter-cell) * 2) + $gutter-horizontal);
}

.col-3-of-4 {
  width: calc((($grid-a-quarter-cell) * 3) + ($gutter-horizontal * 2));
}
```

### [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)

The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

You may have to **use the prefix `-webkit-`** for some browsers!

```scss
.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;

  // The trick properties
  display: inline-block;
  background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

### [`mask-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image)

The `mask-image` CSS property sets the image that is used as mask layer for an element.

```scss
.list {
  &__item {
    // ..
  }

  &__item::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;

    // Older browsers (no coloring)
    /* background-image: url(../img/chevron-thin-right.svg); */
    /* background-size: cover; */

    // Newer browsers
    background-color: var(--color-primary);
    mask-image: url(../img/chevron-thin-right.svg);
    mask-size: cover;
  }
}
```

### [`outline`](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)

The outline CSS shorthand property sets most of the outline properties in a single declaration.

Outline is a line outside of the element's border. Unlike other areas of the box, outlines don't take up space, so they don't affect the layout of the document in any way.

```scss
.composition {
  outline-offset: 1.5rem;
  outline: 1.5rem solid $color-primary;
}
```

### [`background-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)

The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.

```scss
.card {
  &__picture {
    height: 23rem;
    background-size: cover;
    background-blend-mode: color;

    &--1 {
      background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark), url(../img/nat-5.jpg);
    }
  }
}
```

### [`-webkit-box-decoration-break`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)

The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

Normally, if a text is set to have a `padding` and breaks into two lines, the `padding-left` will be on the first line and the `padding-right` would be on the second line. Setting the `-webkit-box-decoration-break` property ensure that both side on each line get their `padding`. See the example below.

```scss
.card {
  &__heading {
    width: 75%;
    text-align: right;
  }

  &__heading-span {
    display: inline; // Just to know!
    padding: 1rem 1.5rem;

    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
}
```

### [`shape-outside`](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)

The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

```scss
.story {
  width: 75%;

  padding: 6rem;
  // Makeup for the lost padding caused by `translateX(-3rem)`
  padding-left: 9rem;

  // Restores the collapsed shape height just incase it is taller than its parent!
  @include clear-fix;

  &__shape {
    width: 15rem;
    height: 15rem;
    background-color: crimson;
    // border-radius: 50%;
    float: left;

    // The circle shape
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);

    // The triangle shape
    shape-outside: polygon(50% 0, 100% 100%, 0 100%);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);

    // The proper way of moving the shape around with affecting the element around it!
    transform: translateX(-3rem);
  }

  // To illustrate that there is text that wraps around the shape!
  // .heading-tertiary {..}
  // .paragraph {..}
}
```

### [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect the element or its background needs to be transparent or partially transparent.

```css
.main-nav {
  background-color: rgb(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
}
```

### [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

The object-fit CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

You can alter the alignment of the replaced element's content object within the element's box using the object-position property.

```scss
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.15;

  &__content {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

### [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* He said it is the same as using the keyword `cover`, but not really! */
background-size: 100%;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
```

Example in this repository:

```css
.story-special__avatar::before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url(../img/nat-8.jpg);
  background-repeat: no-repeat;
  background-size: auto 130%;
  background-position: center;
  transition: all 0.5s;
}

.story-special:hover .story-special__avatar::before {
  filter: blur(3px) brightness(80%);
  background-size: auto 100%;
}
```

### [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the `<gradient>` data type, which is a special kind of `<image>`.

#### Customizing Gradients

By adding more color-stop points on the gradient line, you can create a highly customized transition between multiple colors. A color-stop's position can be explicitly defined by using a `<length>` or a `<percentage>`. If you don't specify the location of a color, it is placed halfway between the one that precedes it and the one that follows it. The following adjacent gradients are equivalent.

```scss
// Formula (100% / (numberOfColors - 1))

.book {
  // ------------------------

  // 2 colors
  background-image: linear-gradient(to right, rgb(255, 255, 0), rgb(0, 0, 0));

  background-image: linear-gradient(to right, rgb(255, 255, 0) 0%, rgb(0, 0, 0) 100%);

  // ------------------------

  // 3 colors
  background-image: linear-gradient(to right, rgb(255, 255, 0), rgb(0, 0, 0), rgb(255, 0, 0));

  background-image: linear-gradient(to right, rgb(255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgb(255, 0, 0) 100%);

  // ------------------------

  // 4 colors
  background-image: linear-gradient(to right, rgb(255, 255, 0), rgb(0, 0, 0), rgb(255, 0, 0), rgb(0, 0, 255));

  background-image: linear-gradient(to right, rgb(255, 255, 0) 0%, rgb(0, 0, 0) 33.33%, rgb(255, 0, 0) 66.66%, rgb(0, 0, 255) 100%);
}

// My usage case
.book {
  background-image: linear-gradient(105deg, rgba($color-white, 0.8) 50%, transparent 50%), url(../img/nat-10.jpg);
}
```

### [`::placeholder`](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) aka `::-webkit-input-placeholder`

The `::placeholder` CSS pseudo-element represents the placeholder text in an `<input>` or `<textarea>` element.

```scss
.form {
  &__input {
    font-family: inherit;
    color: inherit;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    border: none;
    border-bottom: 3px solid transparent;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-primary;

      &:invalid {
        border-bottom: 3px solid $color-secondary-dark;
      }
    }

    &::placeholder {
      color: $color-gray-dark-2;
    }
    // Or
    &::-webkit-input-placeholder {
      color: $color-gray-dark-2;
    }
  }
}
```

### [`:placeholder-shown`](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)

The `:placeholder-shown` CSS pseudo-class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text.

### [`Subsequent-sibling combinator`](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) (~, a tilde)

The subsequent-sibling combinator (~, a tilde) separates two selectors and matches all instances of the second element that follow the first element (not necessarily immediately) and share the same parent element.

In the following example, the subsequent-sibling combinator (~) helps to select and style paragraphs that are both siblings of an image and appear after any image.

```css
img ~ p {
  color: red;
}
```

### [`Next-sibling combinator`](https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator) (+)

The next-sibling combinator (+) separates two selectors and matches the second element **only if it immediately follows the first element**, and both are children of the same parent element.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```

My usage case

```scss
.form {
  // ..

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.7rem;
    margin-left: 2rem;

    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    // To make it possible to animate the element
    opacity: 0;

    // Because we don't want the element to be on the page
    visibility: hidden;

    transform: translateY(-4rem);
  }

  // Subsequent-sibling would work in this example as well!
  &__input:placeholder-shown ~ &__label {
    // ..
  }
}
```

### [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

The transform-origin CSS property sets the origin for an element's transformations.

The transform origin is the point around which a transformation is applied. **For example, the default transform origin of the rotate() function is the center** of rotation.

### `column-*`

#### [`column-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)

The column-count CSS property breaks an element's content into the specified number of columns.

#### [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)

The column-gap CSS property sets the size of the gap (gutter) between an element's columns.

default value is **1em** (current-font-size).

#### [`column-rule`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule)

The column-rule shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout. Same syntax as the `border` property!

```scss
.popup {
  &__text {
    font-size: 1.4rem;
    column-count: 2;
    column-gap: 4rem; // default is 1em (current-font-size) that is 14px.
    column-rule: 1px solid $color-gray-light-2;

    hyphens: auto;
  }
}
```

### [`hyphens`](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)

The hyphens CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

### [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)

The `:target` CSS pseudo-class represents a unique element (the target element) with an id matching the URL's fragment.

### [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

One or more of the CSS transform functions to be applied. The transform functions are multiplied in order from left to right, meaning that composite transforms are effectively applied in order from right to left.

Multiple CSS transform functions can be applied. The **transform functions are applied in order from left to right**. E.g. when you want to use `translate` and `scale`, you should always `scale` last!

```scss
// Correct
.composition__photo--p3:hover {
  transform: translate(-50%, calc(-15% - 0.5rem)) scale(1.5);
}

// Incorrect
.composition__photo--p3:hover {
  transform: scale(1.5) translate(-50%, calc(-15% - 0.5rem));
}
```

### [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

The `@supports` CSS at-rule lets you specify CSS declarations that depend on a browser's support for CSS features. Using this at-rule is commonly called a feature query. The rule must be placed at the top level of your code or nested inside any other conditional group at-rule.

```css
.flex-container > * {
  float: left;
}

@supports (display: flex) {
  .flex-container > * {
    float: none;
  }

  .flex-container {
    display: flex;
  }
}
```

### [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)

The `::selection` CSS pseudo-element applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text).

### [`@media (hover: hover | none)`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)

The hover CSS media feature can be used to test whether the user's primary input mechanism can hover over elements.

```css
/* default hover effect */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* when hover is supported */
  a:hover {
    color: white;
    background: black;
  }
}
```

### [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)

The `max-width` CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by `max-width`.

### [`min-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)

The `min-width` CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.

### [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

```css
/* property name (or all) | duration | delay */
transition: all 0.2s;

/* Multiple properties are allowed separated by ","  */
transition:
  transform 0.2s,
  width 0.4s 0.2s cubic-bezier(1, 0, 0, 1),
  background-color 0.1s;
```

## HTML Properties

### [`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

`<input>` elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.

#### Defining a radio group

A radio group is **defined by giving each of radio buttons in the group the same name**. Once a radio group is established, selecting any radio button in that group automatically deselects any currently-selected radio button in the same group.

### [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

The `<picture>` HTML element contains zero or more **`<source>` elements and one `<img>`** element to offer alternative versions of an image for different display/device scenarios.

The browser will consider each child `<source>` element and choose the best match among them. If no matches are found, or the browser doesn't support the `<picture>` element, the URL of the `<img>` element's src attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.

To decide which URL to load, the user agent examines each `<source>`'s srcset, media, and type attributes to select a compatible image that best matches the current layout and capabilities of the display device.

Common use cases for `<picture>` :

- Art direction. Cropping or modifying images for different media conditions.
- Offering alternative image formats, for cases where certain formats are not supported.

```html
<!-- Example #1 -->
<picture class="footer__logo">
  <source
    title="XA1 Ultra (2x or maybe 3x!)"
    media="(min-width: 480px)"
    srcset="./img/logo-green-2x.png 2x, ./img/logo-green-3x.png 3x, ./img/logo-green-4x.png 4x"
  />

  <source
    title="XZ Premium (4x)"
    media="(min-width: 455px)"
    srcset="./img/logo-green-2x.png 2x, ./img/logo-green-3x.png 3x, ./img/logo-green-4x.png 4x"
  />

  <source title="XZ (3x)" media="(min-width: 424px)" srcset="./img/logo-green-2x.png 2x, ./img/logo-green-3x.png 3x, ./img/logo-green-4x.png 4x" />

  <img src="./img/default.png" alt="Website logo" />
</picture>

<!-- Example #2 -->
<!-- <img src="./img/logo-green-2x.png" alt="Website big logo" class="footer__logo" /> -->
<picture class="footer__logo">
  <source media="(max-width: 37.5em)" srcset="./img/logo-green-small-1x.png 1x, ./img/logo-green-small-2x.png 2x" />

  <!-- <img src="./img/logo-green-1x.png" alt="Website big logo" class="footer__logo" /> -->
  <img src="./img/logo-green-1x.png" srcset="./img/logo-green-1x.png 1x, ./img/logo-green-2x.png 2x" alt="Website big logo" class="footer__logo" />
</picture>
```

### [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)

The `<source>` HTML element specifies one or more media resources for the `<picture>`, `<audio>`, and `<video>` elements. It is a void element, which means that it has no content and does not require a closing tag. This element is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.

**Note** : The first matched `<source>` will be used if there are multiple `<source>`s that match the device.

#### Attributes

##### src

Specifies the URL of the media resource. Required if the parent of `<source>` is `<audio>` or `<video>`. **Not allowed if the parent is `<picture>`**.

##### srcset

Specifies a comma-separated list of one or more image URLs and their descriptors. Required if the parent of `<source>` is `<picture>`. **Not allowed if the parent is `<audio>` or `<video>`**.

The list consists of strings separated by commas, indicating a set of possible images for the browser to use. Each string is composed of:

- A **URL** specifying an image location.
- An **optional width descriptor**, a positive integer directly followed by "w", such as 300w.
- An **optional pixel density descriptor**, a positive floating number directly followed by "x", such as 2x.

Each string in the list must have either a width descriptor or a pixel density descriptor to be valid. These two **descriptors should not be used together**; only one should be used consistently throughout the list. The value of each descriptor in the list must be unique. If the sizes attribute is also present, then each string must include a width descriptor.

##### type

Specifies the MIME media type of the image or other media type, optionally including a codecs parameter.

##### media

Specifies the media query for the resource's intended media.

### [`srcset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)

The HTMLImageElement property `srcset` is a string which identifies one or more image candidate strings, **separated using commas (,)** each specifying image resources to use under given circumstances.

Each image **candidate string contains an image URL and an optional width or pixel density descriptor** that indicates the conditions under which that candidate should be used instead of the image specified by the src property.

The `srcset` property, along with the `sizes` property, are a crucial component in designing responsive websites, as they can be used together to make pages that use appropriate images for the rendering situation.

**Note** : If the `srcset` attribute uses width descriptors (probably they meant on `<source>` since it works fine on `<img>`), the sizes attribute must also be present, or the srcset itself will be ignored.

**Note** : If you are using `srcset` directly on an `<img>` element and not `<source>` inside `<picture>`, you should add the `src` attribute as a fallback, because if the browser does not support `srcset`, then `src` will be used for the default image source.

### [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)

The `<use>` element takes nodes from within the SVG document, and duplicates them somewhere else.

Note: this method of loading icons is not allowed on local protocol URLs.

```html
<svg class="search__icon">
  <use href="./img/sprite.svg#icon-magnifying-glass"></use>
  <!-- <use xlink:href="./img/sprite.svg#icon-magnifying-glass"></use> -->
</svg>
```

## Tricks

### [The “Checkbox Hack”](https://css-tricks.com/the-checkbox-hack/)

The “Checkbox Hack” is where you use a connected `<label>` and `<input type="checkbox">` and usually some other element you are trying to control, like this:

```html
<label for="toggle">Do Something</label>
<input type="checkbox" id="toggle" />
<div class="control-me">Control me</div>
```

Then with CSS, you hide the checkbox entirely. But just because the checkbox is hidden, clicking the `<label>` still toggles its value on and off. Then you can use the adjacent sibling combinator to style the `<div>` differently based on the :checked state of the input.

```css
.control-me {
  /* Default state */
}

#toggle:checked ~ .control-me {
  /* A toggled state! No JavaScript! */
}
```

My usage cases

```css
.form__radio-input:checked + .form__radio-label .form__radio-button::after {
  opacity: 1;
}

/* Somehow similar concept */
.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4rem);
}
```

### Making two columns match in their height, kind of!

```scss
.popup {
  &__content {
    display: table;
  }

  // First direct child of `.popup__content`
  &__left {
    display: table-cell;
  }

  // Second direct child of `.popup__content`
  &__right {
    display: table-cell;
    vertical-align: middle;
  }
}
```

### [`z-index` not Working](https://www.positioniseverything.net/z-index-not-working)

When non-positioned elements are not responding to the `z-index`, it is usually because `z-index` only applies to positioned element (i.e., elements with position: absolute, position: relative, position: fixed, or position: sticky).

## Links

### Development

- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [Emmet in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet)

### CSS

- [Jonas' Resources](https://codingheroes.io/resources/)
- [CSS for People Who Hate CSS](https://paulcpederson.com/articles/css-for-people-who-hate-css/#dont-depend-on-certain-markup-structure)
- [CSS3 Reference by Codrops](https://tympanus.net/codrops/css_reference/)
- [30 CSS Selectors by Tutplus](https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t)

- [FLEX by Malven Co.](https://flexbox.malven.co/)
- [FLEXY-BOXES](https://the-echoplex.net/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox by Joni Trythall](https://jonitrythall.com/flexbox-cheatsheet)
- [FLEXBOX FROGGY](https://flexboxfroggy.com/)

- [GRID by Malven Co.](https://grid.malven.co/)
- [GRID GARDEN](http://cssgridgarden.com/)
- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
- [layoutit-grid](https://grid.layoutit.com/)

- [Can I use?](https://caniuse.com/)
- [Clippy — CSS clip-path maker](https://bennettfeely.com/clippy/)

- [Easing Functions](https://easings.net/)
- [cubic-bezier](https://cubic-bezier.com/)

### HTML

- [HTML Entity Reference by CSS-Tricks](https://css-tricks.com/snippets/html/glyphs/)

### Design

- [Land Book](http://land-book.com/)
- [One Page Love](https://onepagelove.com/inspiration)
- [Awwwards](https://www.awwwards.com/websites/)
- [Screelane](https://screenlane.com/)
- [Dribbble](https://dribbble.com/)

### Images

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [DrawKit](https://www.drawkit.com/)
- [unDraw](https://undraw.co/illustrations)
- [UI Faces](https://www.uifaces.co/)

### Icons

- [Phosphor Icons](https://phosphoricons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Hero Icons](https://heroicons.com/)
- [IcoMoon](https://icomoon.io/)

### Colors

- [OC-](https://yeun.github.io/open-color/)
- [Tailwind](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt](https://www.colorhunt.co/)
- [Tint & Shade Generator](https://maketintsandshades.com/)
- [Paletton](http://paletton.com/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5)
- [CSS Gradient](https://cssgradient.io/)
- [Gradient Maker](https://coolors.co/gradient-maker/cf414b-852170)
- [Gradient Generator](https://www.joshwcomeau.com/gradient-generator/)

### Fonts

- [Type-scale](https://typescale.com/)
- [Google Fonts](https://fonts.google.com/)

### Deployment

- [Squoosh](https://squoosh.app/)

## Chrome Devtools

- [Enable 'Show user agent shadow DOM'](https://stackoverflow.com/questions/26852922/inspect-webkit-input-placeholder-with-developer-tools) to allow for more inspection. E.g. `input::-webkit-input-placeholder`.

- You can access the CSS Grid areas name in both Chrome and Firefox from the Layout panel. [Read more](https://umaar.com/dev-tips/237-css-grid-inspecting/).

## Visual Studio Code Shortcuts

TODO: Add `anchor` shortcuts

|     **Shortcut**      |                          **Description**                          |
| :-------------------: | :---------------------------------------------------------------: |
|      `shift+esc`      |                    Exit multiple cursors mode                     |
|          ---          |                                                                   |
|    `shift+ctrl+k`     |                            Remove line                            |
|          ---          |                                                                   |
|    `shift+ctrl+up`    |                  Select before and above cursor                   |
|   `shift+ctrl+down`   |                   Select after and below cursor                   |
|          ---          |                                                                   |
|  `shift+ctrl+enter`   |                        Add new line above                         |
|     `ctrl+enter`      |                        Add new line below                         |
|          ---          |                                                                   |
|       `alt+up`        |     Move line up, or a selection (not just cursors) of lines      |
|      `alt+down`       |    Move line down, or a selection (not just cursors) of lines     |
|          ---          |                                                                   |
|    `shift+alt+up`     |  Duplicate current line to the top (duplicates empty lines too)   |
|   `shift+alt+down`    | Duplicate current line to the bottom (duplicates empty lines too) |
|          ---          |                                                                   |
|   `shift+alt+right`   |                         Expand selection                          |
|   `shift+alt+left`    |                         Shrink selection                          |
|          ---          |                                                                   |
|     `ctrl+alt+up`     |                         Add cursor above                          |
|    `ctrl+alt+down`    |                         Add cursor below                          |
|          ---          |                                                                   |
|    `shift+ctrl+l`     |                      Select all occurrences                       |
|       `ctrl+d`        |                 Add selection to next find match                  |
| `ctrl+shift+d` (\*1)  |               Add selection to previous find match                |
| **Sequence Shortcut** |                          **Description**                          |
|    `ctrl+k ctrl+v`    |                      Transform to title case                      |
|  **Across Cursors**   |                          **Description**                          |
|       `ctrl+u`        |                            Undo cursor                            |
|          ---          |                                                                   |
|       `ctrl+l`        |                Select each line that has a cursor                 |
|          ---          |                                                                   |
|   `ctrl+shift+left`   |                       cursorWordLeftSelect                        |
|  `ctrl+shift+right`   |                     cursorWordEndRightSelect                      |
|     `ctrl+right`      |                          cursorWordLeft                           |
|      `ctrl+left`      |                        cursorWordEndRight                         |
|          ---          |                                                                   |
|  `shift+alt+u` (\*2)  |             Move each cursor to the start of the line             |
|  `shift+alt+i` (\*3)  |              Move each cursor to the end of the line              |
|          ---          |                                                                   |
|  `shift+alt+j` (\*4)  |                     Select to from the start                      |
|  `shift+alt+k` (\*5)  |                         Select to the end                         |
|          ---          |                                                                   |
|  `shift+alt+[` (\*6)  |                  Move selected word to the left                   |
|  `shift+alt+]` (\*7)  |                  Move selected word to the right                  |

### Tips

- If you have copied multiple words/selection to the clipboard, you can paste them across across these cursors.

---

- 1

  - `{ "key": "ctrl+shift+d", "command": "editor.action.addSelectionToPreviousFindMatch" }`
  - `{ "key": "ctrl+shift+d", "command": "-workbench.view.debug", "when": "viewContainer.workbench.view.debug.enabled" }`

- 2

  - `{ "key": "shift+alt+u", "command": "cursorLineStart" }`

- 3

  - `{ "key": "shift+alt+i", "command": "cursorLineEnd" }`
  - `{ "key": "shift+alt+i", "command": "-editor.action.insertCursorAtEndOfEachLineSelected", "when": "editorTextFocus" }`

- 4

  - `{ "key": "shift+alt+j", "command": "cursorHomeSelect", "when": "editorTextFocus" }`

- 5

  - `{ "key": "shift+alt+k", "command": "cursorEndSelect", "when": "editorTextFocus" }`

- 6

  - `{ "key": "shift+alt+[", "command": "editor.action.moveCarretLeftAction" }`

- 7

  - `{ "key": "shift+alt+]", "command": "editor.action.moveCarretRightAction" }`

```

```
