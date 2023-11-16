## Id vs Class

- An id attribute should be used for one element only.
- Always use classes instead of ids, to be prepared for when you want to add similar elements in the future.

## Color

- RGB rgba(red, green, blue, alpha), is used over hexadecimal only if transparency is needed.
- In RGB, if the values in all three channels are the same, we get a gray color. E.g. `rgb(69, 69, 69)`, that is `#444444` (`#444`).

## Pseudo Classes

- The `:nth-child` pseudo class, matches elements based on the index of the elements starting from 1, e.g. `:nth-child(2)` would match the second element. Keywords like `odd` and `even` can be used instead of a number.
- The `:first-child` pseudo class, same as `:nth-child(1)`, represents an element that is the first child of some other element. It should be noted that it is to be used on elements that has the same type of children, e.g. `ul` and `ol`.
- The `:link` pseudo class for `a` elements, applies to links that have not yet been visited, and only if they have `href` attributes.
- The `:visited` pseudo class for `a` elements, applies once the link has been visited by the user. It is not commonly used, therefor, visited links should be styled the same as the not visited links.
- The `:hover` pseudo class is to apply specific style while hovering the target element.
- The `:active` pseudo class is to apply specific style while clicking the target element.

## Conflicting Selectors

- The order in which a conflicting declaration for a property between multiple declaration blocks is resolved is:
  - Style with `!important` keyword
  - inline style
  - Declaration block with an id and class selectors
  - Declaration block with an id
  - Declaration block with multiple classes
  - Declaration block with a class/pseudo class
  - Declaration block with a element selector
  - Declaration block with the universal selector (\*)
  - Inherited properties from direct parent element
  - Inherited properties from parent elements
- If there are multiple declaration blocks that are of the same type, then the last one will be applied.

## Inheritance

When an element has some specific properties (mostly related to text), they will be passed to its children. E.g. `color` and `font-family`.

## Box Model

- The `border` is a line around an element, which is a part of it.
- `padding` is the space between the content of an element and its border.
- `margin` is the space outside the element (beyond its border).
- By default, the total element width (the same goes for total height) consists of:
  - Left border
  - Left padding
  - Specified/Implied width
  - Right padding
  - Right border
- To create vertical space between elements, use either margin top or margin bottom. Usually margin bottom is used.
- The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing.

## Global Reset

- Many elements have default `margin` and `padding` values, to override that behavior, we use the universal selector to do that, which is very common.

## Dimensions

- The `width` and `height` when set in external/internal CSS style, **do** override the `width` and `height` HTML attributes on the element.
- When `width` and `height` HTML attributes **both** are set on an element, you will have to specify the value of either `width` and `height` to `auto`, to resolve the aspect ratio of an image element.
- Usually for width/height measurement, the percentage in `width`/`height` is the percentage of the container element.

## Types of Boxes

- Inline boxes: boxes that only occupy the space they need for their content. These elements do not start on a new line. Examples:

  - \<a>
  - \<img>
  - \<span>
  - \<em>
  - \<strong>
  - \<button>
  - \<input>
  - \<textarea>

- Block-level boxes: boxes that always takes up the full width available. These element always starts on a new line. Examples:

  - \<body\>
  - \<div\>
  - \<p\>
  - \<ul\>
  - \<li\>
  - \<h1>-<h6\>
  - \<video\>
  - \<table\>
  - \<form\>
  - \<main\>
  - \<header\>
  - \<nav\>
  - \<article\>
  - \<aside\>
  - \<footer\>

### Notes

- An inline element cannot contain a block-level element
- Most elements are Block-level elements.
- Box model applies to block-level elements, while the same is not true for inline elements.
