## Sass

[Pen example](https://codepen.io/Jenie7/pen/gOEpoMo)

### Variables

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store any CSS value you think you’ll want to reuse. Sass uses the $ symbol to make something a variable. Here’s an example:

```scss
$primary-color: #333;

body {
  color: $primary-color;
}
```

### Nesting

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered **bad practice**.

```scss
nav {
  ul {
    list-style: none;

    li {
      margin-left: 30px;

      &:first-child {
        margin: 0;
      }
    }
  }

  a {
    text-decoration: none;
  }
}
```

Compiled to:

```css
nav ul {
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li:first-child {
  margin: 0;
}

nav a {
  text-decoration: none;
}
```

### Mixins

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you **make groups of CSS declarations that you want to reuse** throughout your site. It helps keep your Sass very DRY. You can even pass in values to make your mixin more flexible. Here’s an example for theme.

```scss
$color-text-dark: #333;

@mixin style-link-text($color) {
  text-decoration: none;
  text-transform: uppercase;
  color: $color;
}

a:link,
a:visited {
  font-size: 1.6rem;
  @include style-link-text($color-text-dark);
}

// Another example without an argument
@mixin clear-fix {
  &::after {
    content: '';
    clear: both;
    display: table;
  }
}
```

Compiled to:

```css
a:link,
a:visited {
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #333;
}
```

### [Functions](https://sass-lang.com/documentation/at-rules/function/)

Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

```scss
@function divide($a, $b) {
  @return $a / $b;
}

div {
  border: 3px solid #fff;
  margin: divide(60, 2) * 1px;
}
```

Complied to:

```css
div {
  border: 3px solid #fff;
  margin: 30px;
}
```

### Extend/Inheritance

Using @extend lets you share a set of CSS properties from one selector to another.

The same can be achieve using `Mixins`, but using `Extend` is **better and will result in smaller code** since it doesn't include the shared properties like when using `Mixins`, but will print our selector on the shared properties instead.

**Should only be used if the rules** that we're extending are inherently **related**, so better use `Mixins`!

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}
```

Complied to:

```css
.success,
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}
```

### Tips

#### HEX Colors Transparency

You can use HEX color codes in the CSS `rgba` function!

```scss
$color-primary-dark: #28b485;

body {
  background-color: rgba($color-primary-dark, 0.6);
}
```

Compiled to

```css
body {
  background-color: rgba(40, 180, 133, 0.6);
}
```
