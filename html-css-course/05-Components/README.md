### 10. Components and Layout

<img src="shots/1.jpg?raw=true" width="700" >
<img src="shots/2.jpg?raw=true" width="700" >
<img src="shots/3.jpg?raw=true" width="700" >

### Notes

- If you place an `svg` element inside a `button`, it will not be visible until you set the `width` and `height` on it.
- `transform: scale(1.5);` : Scale an element to 150%.
- `transform: translate(-50%, 0);` : Move an element back to the left by 50% of its width.
- `transform: translate(0, -50%);` : Move an element up by 50% of its height.
- Force an element to have a white space as its content:
  - `<button class="dot">&nbsp;</button>`
  - `<button class="dot">&NonBreakingSpace;</button>`

---

### [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) : The Table element

#### [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) : The Table Row element

The `<tr>` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of `<td>` (data cell) and `<th>` (header cell) elements.

#### [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) : The Table Data Cell element

The `<td>` HTML element defines a cell of a table that contains data. It participates in the table model.

#### [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) : The Table Header element

The `<th>` HTML element defines a cell as the header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
