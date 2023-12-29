## Sass

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
