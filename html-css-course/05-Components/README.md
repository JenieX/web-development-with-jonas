### 10. Components and Layout

<img src="shots/1.jpg?raw=true" width="700" >
<img src="shots/2.jpg?raw=true" width="700" >
<img src="shots/3.jpg?raw=true" width="700" >

### Notes

- If you place an `svg` (icon) element inside a `button`, it will not be visible until you set the `width` and `height` on it.
- When using an icon, give it a class with these declarations:
  - `width`
  - `height`
  - `stroke`
- `transform: scale(1.5);` : Scale an element to 150%.
- `transform: translate(-50%, 0);` : Move an element back to the left by 50% of its width.
- `transform: translate(0, -50%);` : Move an element up by 50% of its height.
- Force an element to have a white space as its content:
  - `<button class="dot">&nbsp;</button>`
  - `<button class="dot">&NonBreakingSpace;</button>`
- Use class variations with `--`. E.g. When main is `dot`, a variation can be `dot--fill`
- `margin: 0 auto;` is used to center an element inside its parent, but only if it has the `width` property set.
- If a button is to lead somewhere else, use `<a>`, otherwise use `<button>`.

---

### [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) : The Table element

- [`thead`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) : The Table Head element (semantic)

  - The `<thead>` HTML element defines a set of rows defining the head of the columns of the table.

- [`tbody`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) : The Table Body element (semantic)

  - The `<tbody>` HTML element encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the body of the table (`<table>`).

- [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) : The Table Row element

  - The `<tr>` HTML element defines a row of cells in a table.
  - The row's cells can then be established using a mix of `<td>` (data cell) and `<th>` (header cell) elements.

- [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) : The Table Header element

- The `<th>` HTML element defines a cell as the header of a group of table cells.
- The exact nature of this group is defined by the scope and headers attributes.

- [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) : The Table Data Cell element

  - The `<td>` HTML element defines a cell of a table that contains data.

- [`border-collapse`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)

  - The `border-collapse` CSS property sets whether cells inside a `<table>` have shared or separate borders.
  - It needs to be set on the `<table>` even if the cells have no borders, to remove the default border-like space!

- Notes
  - Usually, you should style individual cells and not `<thead>`, `<tbody>`, or `<tr>`.
  - On four column table, setting the `width: 25%;` on the first row's cells (`thead th`), will ensure that each column have the same width.
