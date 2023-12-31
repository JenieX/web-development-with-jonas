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

### [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

text-align
The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

Inline elements are treated as text, therefore this property would work on them as well.

### [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

High value for Y offset and blur, make the element as if it is further away. See example below.

```css
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
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

- [Can I use?](https://caniuse.com/)
- [Clippy — CSS clip-path maker](https://bennettfeely.com/clippy/)

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

### Colors

- [OC-](https://yeun.github.io/open-color/)
- [Tailwind](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt](https://www.colorhunt.co/)
- [Tint & Shade Generator](https://maketintsandshades.com/)
- [Paletton](http://paletton.com/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5)

### Fonts

- [Type-scale](https://typescale.com/)
- [Google Fonts](https://fonts.google.com/)

### Deployment

- [Squoosh](https://squoosh.app/)

## Visual Studio Code Shortcuts

|     **Shortcut**      |                      **Description**                       |
| :-------------------: | :--------------------------------------------------------: |
|    `shift+ctrl+k`     |                        Remove line                         |
|          ---          |                                                            |
|  `shift+ctrl+enter`   |                     Add new line above                     |
|     `ctrl+enter`      |                     Add new line below                     |
|          ---          |                                                            |
|       `alt+up`        |  Move line up, or a selection (not just cursors) of lines  |
|      `alt+down`       | Move line down, or a selection (not just cursors) of lines |
|          ---          |                                                            |
|    `shift+alt+up`     |             Duplicate current line to the top              |
|   `shift+alt+down`    |            Duplicate current line to the bottom            |
|          ---          |                                                            |
|     `ctrl+alt+up`     |                      Add cursor above                      |
|    `ctrl+alt+down`    |                      Add cursor below                      |
|          ---          |                                                            |
|    `shift+ctrl+l`     |                   Select all occurrences                   |
|       `ctrl+d`        |              Add selection to next find match              |
| `ctrl+shift+d` (\*1)  |            Add selection to previous find match            |
| **Sequence Shortcut** |                      **Description**                       |
|    `ctrl+k ctrl+v`    |                  Transform to title case                   |
|  **Across Cursors**   |                      **Description**                       |
|       `ctrl+u`        |                        Undo cursor                         |
|          ---          |                                                            |
|       `ctrl+l`        |             Select each line that has a cursor             |
|          ---          |                                                            |
|   `ctrl+shift+left`   |                    cursorWordLeftSelect                    |
|  `ctrl+shift+right`   |                  cursorWordEndRightSelect                  |
|     `ctrl+right`      |                       cursorWordLeft                       |
|      `ctrl+left`      |                     cursorWordEndRight                     |
|          ---          |                                                            |
|  `shift+alt+u` (\*2)  |         Move each cursor to the start of the line          |
|  `shift+alt+i` (\*3)  |          Move each cursor to the end of the line           |
|          ---          |                                                            |
|  `shift+alt+j` (\*4)  |                  Select to from the start                  |
|  `shift+alt+k` (\*5)  |                     Select to the end                      |
|          ---          |                                                            |
|  `shift+alt+[` (\*6)  |               Move selected word to the left               |
|  `shift+alt+]` (\*7)  |              Move selected word to the right               |

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
