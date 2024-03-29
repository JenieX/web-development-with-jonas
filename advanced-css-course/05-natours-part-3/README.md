## Sass

### Mixins (advanced)

#### Basic usage

```scss
@mixin clear-fix {
  &::after {
    content: '';
    clear: both;
    display: table;
  }
}

.hero {
  background-color: crimson;

  @include clear-fix;
}
```

=>

```css
.hero {
  background-color: crimson;
}

.hero::after {
  content: '';
  clear: both;
  display: table;
}
```

#### [Arguments](https://sass-lang.com/documentation/at-rules/mixin/#arguments)

Mixins can also take arguments, which allows their behavior to be customized each time they’re called. The arguments are specified in the `@mixin` rule after the mixin’s name, as a list of variable names surrounded by parentheses. The mixin must then be included with the same number of arguments in the form of SassScript expressions. The values of these expression are available within the mixin’s body as the corresponding variables.

```scss
@mixin rtl($property, $ltr-value, $rtl-value) {
  #{$property}: $ltr-value;

  [dir='rtl'] & {
    #{$property}: $rtl-value;
  }
}

.sidebar {
  @include rtl(float, left, right);
}
```

=>

```css
.sidebar {
  float: left;
}
[dir='rtl'] .sidebar {
  float: right;
}
```

#### [Optional Arguments](https://sass-lang.com/documentation/at-rules/mixin/#optional-arguments)

Normally, every argument a mixin declares must be passed when that mixin is included. However, you can make an argument optional by defining a default value which will be used if that argument isn’t passed.

```scss
@mixin replace-text($image, $x: 50%, $y: 50%) {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;

  background: {
    image: $image;
    repeat: no-repeat;
    position: $x $y;
  }
}

.mail-icon {
  @include replace-text(url('/images/mail.svg'), 0);
}
```

=>

```css
.mail-icon {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;
  background-image: url('/images/mail.svg');
  background-repeat: no-repeat;
  background-position: 0 50%;
}
```

#### [Content Blocks](https://sass-lang.com/documentation/at-rules/mixin/#content-blocks)

In addition to taking arguments, a mixin can take an entire block of styles, known as a content block. A mixin can declare that it takes a content block by including the `@content` at-rule in its body. The content block is passed in using curly braces like any other block in Sass, and it’s injected in place of the `@content` rule.

**Notice the order** in which to type the `@include respond($breakpoint)` for desktop (`max-width`):

- tab-land
- tab-port
- phone

```scss
// media-query manager

/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop

$breakpoint options: phone | tab-port | tab-land | big-desktop

Order of usage: Base + typography > general layout + grid > page layout > components

1em = 16px

| Size |   Device   |
| :--: | :--------: |
| 424  |     XZ     |
| 455  | XZ Premium |
| 480  | XA1 Ultra  |
| 1280 |   Laptop   |
| 1536 |     PC     |

*/

@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    // 600px / 16 = 37.5em
    @media only screen and (max-width: 37.5em) {
      @content;
    }
  }

  @if $breakpoint == tab-port {
    // 900px / 16 = 56.25em
    @media only screen and (max-width: 56.25em) {
      @content;
    }
  }

  @if $breakpoint == tab-land {
    // 1200px / 16 = 75em
    @media only screen and (max-width: 75em) {
      @content;
    }
  }

  @if $breakpoint == big-desktop {
    // 1800px / 16 = 112.5em
    @media only screen and (min-width: 112.5em) {
      @content;
    }
  }
}

html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;

  overflow-x: hidden;
  scroll-behavior: smooth;

  @include respond(tab-land) {
    font-size: 56.25%; // 1 rem = 9px, 9/16 = 56.25%
  }

  @include respond(tab-port) {
    font-size: 50%; // 1 rem = 8px, 8/16 = 50%
  }

  @include respond(phone) {
    font-size: 43.75%; // 1 rem = 7px, 7/16 = 43.75%
  }

  @include respond(big-desktop) {
    font-size: 75%; // 1rem = 12, 12/16
  }
}
```

=>

```css
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

@media only screen and (max-width: 75em) {
  html {
    font-size: 56.25%;
  }
}

@media only screen and (max-width: 56.25em) {
  html {
    font-size: 50%;
  }
}

@media only screen and (max-width: 37.5em) {
  html {
    font-size: 43.75%;
  }
}

@media only screen and (min-width: 112.5em) {
  html {
    font-size: 75%;
  }
}
```

### Tips

#### [Multiple classes selector](https://stackoverflow.com/questions/22476889/double-ampersand-selector-in-sass)

```scss
.composition {
  &:hover &__photo#{&}__photo--p3:not(:hover) {
    transform: scale(0.9) translate(-50%, -15%);
  }
}
```

=>

```css
.composition:hover .composition__photo.composition__photo--p3:not(:hover) {
  transform: scale(0.9) translate(-50%, -15%);
}
```

## [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

The goal of responsive images is to **serve the right image to the right screen size** and
device, in order to avoid downloading unnecessary large images on smaller screens.

**Note** : If the bigger image was loaded first, then a lower version of it will not be loaded even if it matches certain rules.

[imagekit.io article](https://imagekit.io/responsive-images)

### Resolution Switching

To use a decreased image resolution on smaller screen.

### Density Switching

To use Half the image resolution on @1x screen.

**Note** : You can use the JS variable [`devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to find the device pixel density.

### Art Direction

To use a different image on smaller screen.
