## Design Ingredients

These rules wil be divided into 10 different areas of web design, each area will have its own many rules. These rules can be applied to any website based on something that we will call the website personality.

### 1. Typography

- USE GOOD **TYPEFACES**

  - Use only **good** and popular **typefaces** and play it safe
  - It’s okay to use just **one typeface** per page! If you want more, limit to 2 typefaces
  - Choose the **right typeface** according to your website personality

- USE GOOD FONT **SIZE AND WEIGHT**

  - When choosing font-sizes, limit choices! Use a “type scale” tool or other **pre-defined range**
    - E.g. FONT SIZE SYSTEM (px) `10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98`
  - Use a font size **between 16px and 32px** for “normal” text
  - For **long text** (like a blog post), try a size of **20px or even bigger**
  - For **headlines**, you can go really big **(50px+)** and bold **(600+)**, depending on personality
  - For any text, **don’t use a font weight under 400** (regular)

- CREATE A GOOD **READING EXPERIENCE**

  - Use less than **75 characters per line**
  - For **normal-sized text**, use a **line height between 1.5 and 2**. For **big text**, go **below 1.5**
  - **Decrease letter spacing in headlines**, if it looks unnatural (this will come from experience)
  - Experiment with all **caps for short titles**. Make them **small** and **bold** and **increase letter-spacing**
  - Usually, **don’t justify text**
  - **Don’t center long text** blocks. Small blocks are fine

Links:

- [Type-scale](https://typescale.com/)
- [Google Fonts](https://fonts.google.com/)

### 2. Colors

- CHOOSE THE **RIGHT COLOR**

  - Make the main color **match your website’s personality**: colors convey meaning!
    - `red` is to draws the most attention, and symbolizes power, passion, and excitement.
    - `orange` is less aggressive, it symbolizes happiness, cheerfulness, and creativity.
    - `yellow` means joy, brightness, and intelligence.
    - `green` represents nature, growth, and health,
    - `blue` is associated with peace, trustworthiness, and professionalism.
    - `purple` conveys wealth, wisdom, and also magic.
    - `pink` represent romance, care, and affection.
    - `brown` represents nature, comfort, and durability.
    - `black` symbolizes power like Red, elegance and minimalism. It also shows grief and sorrow.
  - Use a **good color tone!** Don’t choose a random tone or CSS named colors.

- ESTABLISH A COLOR **SYSTEM**

  - You need at least two types of colors in your color palette: a **main color** and a **grey color**
  - With more experience, you can add more colors: **accent (secondary) color** (use a tool)
  - For diversity, create lighter and darker “versions” (**tints** and **shades**)

- **WHEN AND HOW** TO USE COLORS

  - Use your **main color to draw attention** to the most important elements on the page
  - Use colors to add **interesting accents** or make **entire components or sections** stand out
  - You can try to **use your color strategically** in images and illustrations

- COLORS AND **TYPOGRAPHY**

  - On **dark colored backgrounds**, try to **use a tint** of the background (“lighter version”) for text
  - Text should usually **not** be completely **black**. Lighten if up it looks heavy and uninviting
  - **Don’t make text too light!** Use a tool to check contrast between text and background colors
    - Contrast ratio needs to be at least **4.5:1 for normal text** and **3:1 for large text** (18px+)

Links:

- [OC-](https://yeun.github.io/open-color/)
- [Tailwind](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt](https://www.colorhunt.co/)
- [Tint & Shade Generator](https://maketintsandshades.com/)
- [Paletton](http://paletton.com/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5)
- [More](https://codingheroes.io/resources/)

### 3. Images/Illustrations

- USE **GOOD IMAGES**

  - Different types of images: **product** photos, **storytelling** photos, **illustrations**, **patterns**
  - Use images to support your website’s message and story. So only use **relevant images!**
  - Prefer **original images**. If not possible, use original-looking stock images (not generic ones!)

- **USE** IMAGES **WELL**

  - Try to show **real people** to trigger user’s emotions
  - If necessary, **crop images** to fit your message
  - Experiment **combining** photos, illustrations and patterns

- HANDLING **TEXT** ON IMAGES

  - Method #1: **Darker or brighten image** (completely or partially, using a gradient)
  - Method #2: Position text into **neutral image area**
  - Method #3: Put **text in a box**
  - Bonus: Adding `text-shadow` property to the text element.

- SOME **TECHNICAL DETAILS**

  - To account for high-res screens, make image dimensions **2x as big** as their displayed size
  - **Compress images** for a lower file size and better performance
  - When using multiple **images side-by-side**, make sure they **have the exact same dimensions**

Links:

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [DrawKit](https://www.drawkit.com/)
- [unDraw](https://undraw.co/illustrations)
- [Squoosh](https://squoosh.app/)

### 4. Icons

- USE **GOOD ICONS**

  - Use a **good icon pack**, there are tons of free and paid icons packs
  - Use only **one icon pack**. Don’t mix icons from different icon packs
  - Use **SVG icons or icon fonts**. Don’t use bitmap image formats (.jpg and .png)!
  - **Adjust to website personality!** Roundness, weight and filled/outlined **depend on typography**

- **WHEN** TO USE ICONS

  - Use icons to provide **visual assistance to text**
  - Use icons for **product feature blocks**
  - Use icons **associated with actions**, and label them (unless no space or icon is 100% clear)
  - Use icons as **bullet points**

- USE ICONS **WELL**

  - To keep icons neutral, **use same color as text**. **Or Different color To draw more attention**,
  - Don’t confuse your users: icons need to make sense and **fit the text or action**!
  - **Don't make icons larger** than what they were designed for. **If needed, enclose them in a shape**

Links:

- [Phosphor Icons](https://phosphoricons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Hero Icons](https://heroicons.com/)

### 5. Shadows

- USE SHADOWS **WELL** (Important)

  - **You don’t have to use shadows!** Only use them if it makes sense for the **website personality**
  - **Use shadows in small doses**: don’t add shadows to every element!
  - **Go light on shadows**, don’t make them too dark!

- USE SHADOWS IN THE **RIGHT SITUATION**

  - Use **small shadows for smaller elements** that should stand out (to draw attention)
  - Use **medium-sized shadows for larger areas** that should stand out a bit more
  - Use **large shadows for elements that** should really **float** above the interface
  - Experiment with changing shadows on **mouse interaction** (click and hover)
  - Bonus: Experiment with **glows (colored shadows)**

Links:

- [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

### 6. Border-radius

- USE BORDER-RADIUS **WELL**

  - Use border-radius **to increase the playfulness** and fun of the design, to **make it less serious**
  - **Typefaces** have a certain roundness: make sure that **border-radius matches that roundness!**
  - Use border-radius **on buttons, images, around icons, standout sections** and other elements

### 7. Whitespace

- **WHERE** TO USE WHITESPACE

  - Use **tons** of whitespace **between sections**
  - Use **a lot** of whitespace **between groups of elements**
  - Use whitespace **between elements**
  - **Inside groups of elements**, try to use whitespace instead of lines

- **HOW MUCH** WHITESPACE

  - The more some **elements** (or groups of elements) **belong together, the closer they should be!** (The **law of proximity**)
  - **Start with a lot of whitespace**, maybe even too much! **Then remove** whitespace from there
  - **Match other design choices**. If you have big text or big icons, you need more whitespace
  - **Try a hard rule**, such as using multiples of 16px for all spacing
    - E.g. SPACING SYSTEM (px) `2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128`

### 8. Visual Hierarchy

- WHAT IS VISUAL HIERARCHY?

  - Visual hierarchy is about **establishing which elements of a design are the most important ones**.
  - Visual hierarchy is about **drawing attention** to these most important elements
  - Visual hierarchy is about **defining a “path” for users**, to guide them through the page
  - We use a **combination of position**, **size**, **colors**, **spacing**, **borders**, and **shadows** to establish a meaningful visual hierarchy between elements/components

- VISUAL HIERARCHY **FUNDAMENTALS**

  - **Position important elements closer to the top the page**, where they get more attention
  - **Use images mindfully**, as they draw a lot of attention (larger images get more attention)
    - If you want the attention to be drawn toward some text, use smaller images or not at all.
  - Whitespace creates separation, so **use whitespace strategically** to emphasize elements
    - E.g. Google.com placing the search bar at the middle of the page with tone of whitespace.

- VISUAL HIERARCHY FOR **TEXT ELEMENTS**

  - For text elements, use **font size**, **font weight**, **color**, **background**, and **whitespace** to convey importance
  - **What text elements** to emphasize? **Titles**, **sub-titles**, **links**, **buttons**, **data points**, **icons**
    - You can also **de-emphasize less important text**, like labels or secondary/additional information

- VISUAL HIERARCHY **BETWEEN COMPONENTS**

  - Emphasize an important component using **background color**, **shadow**, or **border** (or multiple)
  - Try emphasizing some component A over component B by **de-emphasizing component B**
  - **What components** to emphasize? **Testimonials**, **call-to-action sections**, **highlight sections**, **preview cards**, **forms**, **pricing tables**, **important rows/columns in tables**, etc

### 9. User Experience

- User Interface (UI) is the visual presentation of a product. It’s how the graphical interface looks and feels like. UI is graphical interface, UI Design is what makes an interface beautiful.

  - Layout
  - “Personality”
  - Typography, colors, icons, etc.

- User Experience (UX) is the overall experience the user has while interacting with the product. UX is experience with interface, UX Design is what makes an interface useful and functional.

  - Does the app feel logical and well thought out?
  - Does the navigation work intuitively?
  - Are users reaching their goals?

A website or application exists for a reason: a **user has a goal for visiting it**, and a **business has a goal for creating it**.

- UX RULES FOR **USABILITY**

  - Don’t design complicated layouts. Don’t reinvent the wheel. **Use patterns that users know**
  - Make your **call-to-action the most prominent element**, and make the text descriptive
  - Use **blue** text and **underlined text only for links!**
  - **Animations** should have a purpose and be fast: between **200 and 500 milliseconds**
  - **In forms, align labels and fields in a single vertical line**, to make the form easier to scan
  - Offer users **good feedback for all actions**: form errors, form success, etc. [web apps]
  - Place action buttons where they will create an effect (**law of locality**) [web apps]

- UX RULES FOR **WEBSITE CONTENT**
  - Use a **descriptive**, **keyword-focused headline** on your main page. Don’t be vague or fancy!
  - Only include **relevant information**, efficiently! Cut out fluff and make the content 100% clear
  - **Use simple words!** Avoid technical jargon and “smart-sounding” words
  - **Break up long text** with sub-headings, images, block quotes, bullet points, etc.

### 10. Components and Layout

---

## Website Personalities

**Design ingredients need to be applied in different ways to different website personalities**. Different personalities have different traits, therefore choices for design ingredients need to be made accordingly.

### Serious/Elegant

For luxury and elegance, based on **thin serif typefaces**, **golden or pastel colors**, and **big high-quality images**.

| Ingredient    | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| Industries    | Real estate, high fashion, jewelry, luxury products or services                   |
| Typography    | Serif typefaces (especially in headings), light font weight, small body font size |
| Colors        | Gold, pastel colors, black, dark blue or grey                                     |
| Images        | Big, high-quality images                                                          |
| Icons         | Usually no icons, but thin icons and lines may be used                            |
| Shadows       | Usually no shadows                                                                |
| Border-radius | Usually no border-radius                                                          |
| Layout        | A creative and experimental layout is quite common                                |

### Minimalist/Simple

Focusses on the essential text content, using small or medium-sized sans-serif black text, lines, and few images and icons.

| Ingredient    | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Industries    | Fashion, portfolios, minimalism companies, software startups                                                        |
| Typography    | Boxy/squared sans-serif typefaces, small body font sizes                                                            |
| Colors        | Usually black or dark grey, on pure white background. Usually just one color throughout the design                  |
| Images        | Few images, which can be used to add some color to the design. Usually no illustrations, but if so, then just black |
| Icons         | Usually no icons, but small simple black icons may be used                                                          |
| Shadows       | Usually no shadows                                                                                                  |
| Border-radius | Usually no border-radius                                                                                            |
| Layout        | Simple layout, a narrow one-column layout is quite common                                                           |

### Plain/Neutral

Design that gets out of the way by using **neutral and small typefaces**, and a very structured layout. **Common in big corporations**.

| Ingredient    | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Industries    | Well-established corporations, companies that don’t want to make an impact through design               |
| Typography    | Neutral-looking sans-serif typefaces are used, and text is usually small and doesn’t have visual impact |
| Colors        | Safe colors are employed, nothing too bright or to washed-out. Blues and blacks are common              |
| Images        | Images are frequently used, but usually in a small format                                               |
| Icons         | Usually no icons, but simple icons may be used                                                          |
| Shadows       | Usually no shadows                                                                                      |
| Border-radius | Usually no border-radius                                                                                |
| Layout        | Structured and condensed layout, with lots of boxes and rows                                            |

### Bold/Confident

Makes an impact, by featuring **big and bold typography**, paired with confident use of **big and bright colored blocks**.

| Ingredient    | Description                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Industries    | Digital agencies, software startups, travel, “strong" companies                                                |
| Typography    | Boxy/squared sans-serif typefaces, big and bold typography, especially headings. Uppercase headings are common |
| Colors        | Usually multiple bright colors. Big color blocks/sections are used to draw attention                           |
| Images        | Lots of big images are usually displayed                                                                       |
| Icons         | Usually no icons                                                                                               |
| Shadows       | Usually no shadows                                                                                             |
| Border-radius | Usually no border-radius                                                                                       |
| Layout        | All kinds of layouts, no particular tendencies                                                                 |

### Calm/Peaceful

For products and services that care, transmitted by **calming pastel colors**, **soft serif headings**, and matching images/illustrations.

| Ingredient    | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Industries    | Healthcare, all products with focus on consumer well-being                                                               |
| Typography    | Soft serif typefaces frequently used for headings, but sans-serif headings might be used too (e.g for software products) |
| Colors        | Pastel/washed-out colors: light oranges, yellows, browns, greens, blues                                                  |
| Images        | Images and illustrations are usual, matching calm color palette                                                          |
| Icons         | Icons are quite frequent                                                                                                 |
| Shadows       | Usually no shadows, but might be used sparingly                                                                          |
| Border-radius | Some border-radius is usual                                                                                              |
| Layout        | All kinds of layouts, no particular tendencies                                                                           |

### Startup/Upbeat

Widely used in startups, featuring **medium-sized sans serif typefaces**, **light-grey** text and **backgrounds**, and **rounded elements**.

| Ingredient    | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Industries    | Software startups, and other modern-looking companies                                                                    |
| Typography    | Medium-sized headings (not too large), usually one sans-serif typeface in whole design. Tendency for lighter text colors |
| Colors        | Blues, greens and purples are widely used. Lots of light backgrounds (mainly gray), gradients are also common            |
| Images        | Images or illustrations are always used. 3D illustrations are modern. Sometimes patterns and shapes add visual details   |
| Icons         | Icons are very frequent                                                                                                  |
| Shadows       | Subtle shadows are frequent. Glows are becoming modern                                                                   |
| Border-radius | Border-radius is very common                                                                                             |
| Layout        | Rows of cards and Z-patterns are usual, as well as animations                                                            |

### Playful/Fun

**Colorful and round designs**, fueled by **creative elements** like hand-drawn icons or illustrations, animations, and fun language.

| Ingredient    | Description                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Industries    | Child products, animal products, food                                                                    |
| Typography    | Round and creative (e.g. handwritten) sans-serif typefaces are frequent. Centered text is more common    |
| Colors        | Multiple colors are frequently used to design a colorful layout, all over backgrounds and text           |
| Images        | Images, hand-drawn (or 3D) illustrations, and geometric shapes and patterns are all very frequently used |
| Icons         | Icons are very frequent, many times in a hand-drawn style                                                |
| Shadows       | Subtle shadows are quite common, but not always used                                                     |
| Border-radius | Border-radius is very common                                                                             |
| Layout        | All kinds of layouts, no particular tendencies                                                           |

<img src="combining-personalities.jpg?raw=true" width="700" >
 
---

## Links

- [JONAS' RESOURCES](https://codingheroes.io/resources/)
- Design Inspiration
  - [Land Book](http://land-book.com/)
  - [One Page Love](https://onepagelove.com/inspiration)
  - [Awwwards](https://www.awwwards.com/websites/)
  - [Screelane](https://screenlane.com/)
  - [Dribbble](https://dribbble.com/)
