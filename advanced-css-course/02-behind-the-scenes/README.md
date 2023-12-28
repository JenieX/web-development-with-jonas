## The Three Pillars

The three pillars of writing good HTML and CSS

- Responsive design

  - Fluid layouts
  - Media queries
  - Responsive images
  - Correct units
  - Desktop-first vs mobile-first

- Maintainable and scalable code

  - Clean
  - Easy-to-understand
  - Growth
  - Reusable
  - How to organize files
  - How to name classes
  - How to structure HTML

- Web performance

  - Less HTTP requests
  - Less code
  - Compress code
  - Use a CSS preprocessor
  - Less images
  - Compress images

<img src="shots/01.jpg?raw=true" width="700" >
<img src="shots/02.jpg?raw=true" width="700" >
<img src="shots/03.jpg?raw=true" width="700" >

[Resolving conflicts between different CSS rules and declarations](../../html-css-course/02-css-fundamentals#conflicting-selectors)

## [BEM](https://getbem.com/), [1](https://stackoverflow.com/questions/36703546), [2](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

BEM – meaning block, element, modifier – is a front-end naming methodology thought up by the guys at Yandex. It is a smart way of naming your CSS classes to give them more transparency and meaning to other developers. They are far more strict and informative, which makes the BEM naming convention ideal for teams of developers on larger projects that might last a while.

The reason for **double** rather than single **hyphens and underscores** is so that your block itself can be hyphen delimited.

### `block`

standalone entities that are meaningful on their own.

E.g. `header`, `container`, `menu`, and `btn`

### `block__element`

Part of blocks that have no standalone meaning and are semantically tied to their blocks.

E.g. `menu item`, `list item`, and `header title`

### `block--modifier` | `block__element--modifier`

Flags on a `block` or `block__element`, used to change appearance or behavior giving a different state or version.

E.g. `disabled`, `highlighted`, and `checked`.
