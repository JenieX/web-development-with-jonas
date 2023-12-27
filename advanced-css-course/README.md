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

To **fix the shaking bug** use `backface-visibility: hidden;` property.

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

|       Shortcut       |                        Description                         |
| :------------------: | :--------------------------------------------------------: |
|    `shift+ctrl+k`    |                        Remove line                         |
|         ---          |                                                            |
|  `shift+ctrl+enter`  |                     Add new line above                     |
|     `ctrl+enter`     |                     Add new line below                     |
|         ---          |                                                            |
|       `alt+up`       |  Move line up, or a selection (not just cursors) of lines  |
|      `alt+down`      | Move line down, or a selection (not just cursors) of lines |
|         ---          |                                                            |
|    `shift+alt+up`    |             Duplicate current line to the top              |
|   `shift+alt+down`   |            Duplicate current line to the bottom            |
|         ---          |                                                            |
|    `ctrl+alt+up`     |                      Add cursor above                      |
|   `ctrl+alt+down`    |                      Add cursor below                      |
|         ---          |                                                            |
|    `shift+ctrl+l`    |                   Select all occurrences                   |
|       `ctrl+d`       |              Add selection to next find match              |
| `ctrl+shift+d` (\*1) |            Add selection to previous find match            |
|       **---**        |                   **Sequence Shortcut**                    |
|   `ctrl+k ctrl+v`    |                  Transform to title case                   |
|       **---**        |           **Cursors blinking across many lines**           |
|                      |                                                            |
|                      |                                                            |
|                      |                                                            |
|                      |                                                            |
|                      |                                                            |

- 1

  - `{ "key": "ctrl+shift+d", "command": "editor.action.addSelectionToPreviousFindMatch" }`
  - `{ "key": "ctrl+shift+d", "command": "-workbench.view.debug", "when": "viewContainer.workbench.view.debug.enabled" }`

- Cursors blinking across many lines
  - If you have copied multiple words/selection to the clipboard, you can paste them across across these cursors.
  - `ctrl+u` undo cursor.
  - `ctrl+l` to select each line that has a cursor.
  - `ctrl+shift+left` cursorWordLeftSelect.
  - `ctrl+shift+right` cursorWordEndRightSelect.
  - `ctrl+right` cursorWordLeft.
  - `ctrl+left` cursorWordEndRight.
  - `{ "key": "shift+alt+u", "command": "cursorLineStart" }` To move each cursor to the start of the line.
  - `{ "key": "shift+alt+i", "command": "cursorLineEnd" }` To move each cursor to the end of the line.
    - Overrides `{ "key": "shift+alt+i", "command": "-editor.action.insertCursorAtEndOfEachLineSelected", "when": "editorTextFocus" }`
  - `{ "key": "shift+alt+j", "command": "cursorHomeSelect", "when": "editorTextFocus" }` Select to from the start.
  - `{ "key": "shift+alt+k", "command": "cursorEndSelect", "when": "editorTextFocus" }` Select to the end.
  - `{ "key": "shift+alt+[", "command": "editor.action.moveCarretLeftAction" }` To move selected word to the left.
  - `{ "key": "shift+alt+]", "command": "editor.action.moveCarretRightAction" }` To move selected word to the right.
