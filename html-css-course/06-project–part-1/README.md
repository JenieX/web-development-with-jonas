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
