# Omnifood Project – Setup and Desktop Version

<img src="shots/1.jpg?raw=true" width="700" >
<img src="shots/2.jpg?raw=true" width="700" >
<img src="shots/3.jpg?raw=true" width="700" >
<img src="shots/4.jpg?raw=true" width="700" >
<img src="shots/5.jpg?raw=true" width="700" >
<img src="shots/6.jpg?raw=true" width="700" >
<img src="shots/7.jpg?raw=true" width="700" >

## Dividing Content into Sections

- Logo + Navigation
- Hero
- Featured in (**after Hero**)
- How it works
- Meals + Diets
- Testimonials + Gallery
- Pricing (**before CTA**) + Features
- CTA (**before Footer**)
- Footer

## Responsive Design

- Design technique to make a webpage adjust its layout and visual style to any possible screen size (window or viewport size)
- In practice, this means that responsive design **makes websites usable on all devices**, such as desktop computers, tablets, and mobile phones.
- It’s a set of practices, not a separate technology. **It’s all just CSS!**

The ingredients for responsive design should be considered/implemented from the start. The last ingredient should be left for later though.

### Ingredients

#### 1- Fluid Layouts

- To **allow webpage to adapt** to the current viewport width (or even height).
- **Use % (or vh / vw) unit** instead of px for elements that should adapt to viewport (usually layout).
- Use **max-width instead of width**.

#### 2- Responsive Units

- Use **rem unit instead of px** for most lengths.
- To make it easy to scale the entire layout down(or up) automatically.
- Helpful trick: setting **1rem to 10px** for easy calculations.

#### 3- Flexible Images

- By default, images don’t scale automatically as we change the viewport, so we need to fix that.
- Always **use % for image dimensions**, together **with the max-width** property.

#### 4- Media Queries

- Bring responsive sites to life!
- To **change CSS styles on certain viewport widths** (called breakpoints).

### Desktop-First vs. Mobile-First Development

#### Desktop-First

- Start writing CSS for the desktop: large screen
- Then, media queries shrink design to smaller screens.

#### Mobile-First (Common nowadays)

- Start writing CSS for mobile devices: small screen
- Then, media queries expand design to a large screen
- Forces us to reduce websites and apps to the absolute essentials

### `width` vs. `max-width`

When we set the **width of container to 1000px** on a **viewport** that **is smaller** than that, there are two scenarios:

#### `width: 1000px;`

would give **horizontal scroll bar** to allow for the desired width.

#### `max-width: 1000px;`

would take up the **full width of the viewport only!**

- **Container is larger than** the specified value of **`max-width`**, then the width of the element would **match** that value.
- **Container is smaller**, then the width of the element would be **100% of the container** width.

#### What about using `width: 100vw;`?

In that case, it would work as desired for the smaller viewport, but it will never consider the `1000px` width anymore.

### `rem` Unit

- The root element is the parent, that is the `<html>` element.
- `rem` is the root element's `font-size`.
- If `rem` is not defined, it would fall to the default `font-size`, which is `16px`.
- So by default, `1rem` would equal `16px`.
- The browser would then automatically calculate `rem` to `px`, just like the other units.
- To make it easy for us, we will override it by `html { font-size: 10px; }`.
  - However, overriding it by a fixed value like this, the user's definition of the browser font-size will not be respected.
  - Instead, we will set it to a percentage of the default font-size. `10px / 16px = 0.625 = 62.5%`
  - Therefor, `html { font-size: 62.5%; }` should be the trick!

`rem` can be useful for adopting your website to different devices, instead of using media queries. E.g. for smaller screens' devices, setting `html { font-size: 8px; }`, will shrink all elements that are using the `rem` unit.

#### Inspecting `rem`

- `window.getComputedStyle(document.documentElement).fontSize;`
- `window.getComputedStyle(document.querySelector('html')).getPropertyValue('font-size');`

## Re-usable Classes

You should always consider using re-usable classes.

Note: In our project, we could have used the classes `container grid` on the Hero section, but it has more `width` (`130rem`) on it, which makes it look better. **Usually, the Hero section is an exception that does not use these classes**.

### `.margin-right-sm`

```css
.margin-right-sm {
  margin-right: 1.6rem !important;
}
```

Notice the use of the `!important` keyword!

### `.container`

It should be set on elements which content needs to be centered on our page.

These elements therefor need to have a width value. Which should be `max-width` to make it fluid.

- Value of `120rem` is very common for these elements.
  - With `padding` right and left, this value will be close to the next.
- Another common value is `1140px`.

```css
.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}
```

### `.grid`

```css
.grid {
  display: grid;
  gap: 9.6rem;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

.grid--4-cols {
  grid-template-columns: repeat(4, 1fr);
}

.grid--center-v {
  align-items: center;
}
```

## Gray Colors

| Darker | dark | Light | Lighter |
| :----: | :--: | :---: | :-----: |
|  #000  | #444 | #888  |  #ccc   |
|  #111  | #555 | #999  |  #ddd   |
|  #222  | #666 | #aaa  |  #eee   |
|  #333  | #777 | #bbb  |  #fff   |

## CSS Properties

### [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

Syntax: `transition: <property> <duration>`

- Always set the `transition` property on the original state.
- The keyword `all` is a valid value for `<property>`, which would animate all properties.
- `<duration>` is a number with either `ms` or just `s` unit.
  - Common value is `0.3s` (`300ms`).

### [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

sets the desired behavior when content does not fit in the parent element box (overflows) in the horizontal and/or vertical direction.

- `hidden`
  - Overflow content is clipped at the element's padding box.
  - There are no scroll bars, and the clipped content is not visible (i.e., clipped content is hidden), but the content still exists.
  - Can be used to **prevent an image from overflowing a container** with `border-radius`.

## Notes

- Setting for example `padding: 1.6rem 3.2rem;` on an inline element like `<a>`, will not act as expected, therefore `display: inline-block;` is required, and should be set by default.
- `rem` should always be used, except for properties that are not very large to start with. E.g. `word-spacing` and `border-radius`.
- To create a border on an element from the inside, instead of using `border: 3px solid #e67e22;`, we would use `box-shadow: inset 0 0 0 3px #e67e22;`.
- Always place the font(s) `<link>` element before your `<style>`/`<link>` element.
- The `<header>` element is used at the top of the whole website, a `<section>`, or an `<article>`.
- The `<main>` element is a semantic element, that contains the main part of web document. It does not include parts that are repeated across multiple pages, e.g. the main `<header>` and the `<footer>` elements.
- The `before` and `after` pseudo-elements can not be added to `<img>` elements, as they don't allow for children inside them.
- When setting both `width` and `height` to a percentage value, it will not work. A trick to achieve that is to set `padding-bottom` with the `height` value instead!
- You should consider replacing the `text-decoration` on `<a>` elements, with `border-bottom: 1px solid currentColor; padding-bottom: 2px;` on the original state, and `border-bottom: 1px solid transparent;` on the hover state.
