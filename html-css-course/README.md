### CSS Guidelines

#### 1. Use Low-Specificity Selectors

```css
/* incorrect  */
.navigation a {
  color: blue;
}

/* correct  */
.nav-link {
  color: blue;
}
```

- Use one class for your selector.
- Don't nest, and don't over select.
- To override a style, place it after the original one.

#### 2. Don't Use ID or Element Selectors

#### 3. Don't Depend on a Certain Markup Structure

```css
/* incorrect  */
.header ul li a {
  margin-right: 20px;
}

/* correct  */
.header-link {
  margin-right: 20px;
}
```

#### 4. Don't Use Inline Styles

#### 5. Don't Use !important

- Except when you have to override some inline styles.

#### 6. Prefix Modifier Classes

```css
/* incorrect  */
.btn {
  background-color: blue;
  color: white;
}

.btn.red {
  background-color: red;
}

/* correct  */
.btn {
  background-color: blue;
  color: white;
}

.btn--red {
  background-color: red;
}
```

#### 7. Write Small Rules

```css
/* incorrect  */
.role-stat h1,
.role-stat h2,
.role-stat p,
.role-stat a,
.role-su h1,
.role-su h2,
.role-su p,
.role-su a {
  color: #fff;
}

/* correct  */
.text-white {
  color: #fff;
}
```

#### 8. Use a Prefix for JavaScript Hooks

---

### VSCODE Shortcuts

- `ctrl+enter` add new line.
- `alt+up` to move line up.
- `alt+down` to move line down.
- `ctrl+alt+up` To add cursor above.
- `ctrl+alt+down` To add cursor below.
- Cursors blinking across many lines
  - If you have copied multiple words/selection to the clipboard, you can paste them across across these cursors.
  - `ctrl+u` undo cursor.
  - `ctrl+l` to select each line that has a cursor.
  - `{ "key": "shift+alt+u", "command": "cursorLineStart" }` To move each cursor to the start of the line.
  - `{ "key": "shift+alt+i", "command": "cursorLineEnd" }` To move each cursor to the end of the line.
    - Overrides `{ "key": "shift+alt+i", "command": "-editor.action.insertCursorAtEndOfEachLineSelected", "when": "editorTextFocus" }`
  - `{ "key": "shift+alt+j", "command": "cursorHomeSelect", "when": "editorTextFocus" }` Select to from the start.
  - `{ "key": "shift+alt+k", "command": "cursorEndSelect", "when": "editorTextFocus" }` Select to the end.

---

### GitHub Style

```css
#repository-container-header
  > div.d-flex.flex-wrap
  > div
  > div
  > svg.octicon-lock {
  height: 30px;
  width: 30px;
}

#repository-container-header
  > div.d-flex.flex-wrap
  > div
  > div
  > svg.octicon-lock
  > path {
  color: #0da582;
}

.home-panel-title svg[data-testid='lock-icon'] {
  height: 35px;
  width: 35px;
  color: #0da582;
}

.header-wrapper .repo-title .repo-icon svg.octicon-lock {
  height: 35px;
  width: 35px;
  color: #0da582;
}

#bitbucket-navigation svg {
  height: 55px;
  width: 55px;
  position: absolute;
  left: -35px;
  top: -6px;
  z-index: 100;
}

h1,
h1 a {
  color: #3bbaff;
}

h2,
h2 a {
  color: #f29e15;
}

h3,
h3 a {
  color: #933ff5;
}

h4,
h4 a {
  color: #4179f1;
}

h5,
h5 a {
  color: #3ebd70;
}

body {
  color: #cadefd;
}

strong {
  font-weight: 700;
  background-color: #44ff86;
  color: #000;
  padding: 0px 3px;
  display: inline-block;
}
```

Links:

- [Jonas' Resources](https://codingheroes.io/resources/)
- [CSS for People Who Hate CSS](https://paulcpederson.com/articles/css-for-people-who-hate-css/#dont-depend-on-certain-markup-structure)
- [CSS3 Reference by Codrops](https://tympanus.net/codrops/css_reference/)
- [30 CSS Selectors by Tutplus](https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t)
