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
