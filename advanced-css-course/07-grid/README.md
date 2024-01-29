# Grid

## Container Properties

### [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

The `grid-template-rows` CSS property defines the line names and track sizing functions of the grid rows.

```css
grid-template-rows: 15rem 15rem;
```

### [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns.

```css
grid-template-columns: 15rem 15rem 15rem;

/* Using repeat() */
grid-template-columns: repeat(3, 15rem);
```

### [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

The `gap` CSS shorthand property sets the gaps (gutters) between rows and columns. It is a shorthand for `column-gap` and `row-gap`.

Note: this is the only way to set margins between the grid items, as using margin property wouldn't work.

### [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

The `grid-template-areas` CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

Note: Should be used for small layouts.

```css
/* Same example as "naming-lines" below */

.container {
  grid-template-rows: repeat(8, 5rem);
  grid-template-columns: repeat(4, 15rem);

  grid-template-areas:
    'head head head head'
    'bx-1 bx-2 bx-3 side'
    'bx-1 bx-2 bx-3 side'
    'main main main side'
    'main main main side'
    'main main main side'
    'main main main side'
    'foot foot foot foot';
}

.item--1 {
  /* grid-area: 1 / 1 / 2 / -1; */
  grid-area: head;
}

.item--2 {
  /* grid-area: 2 / 1 / 4 / 2; */
  grid-area: bx-1;
}

.item--3 {
  /* grid-area: 2 / 2 / 4 / 3; */
  grid-area: bx-2;
}

.item--4 {
  /* grid-area: 2 / 3 / 4 / 4; */
  grid-area: bx-3;
}

.item--5 {
  /* grid-area: 2 / 4 / 8 / 5; */
  grid-area: side;
}

.item--6 {
  /* grid-area: 4 / 1 / 8 / 4; */
  grid-area: main;
}

.item--7 {
  /* grid-area: 8 / 1 / 9 / -1; */
  grid-area: foot;
}
```

### [`grid-auto-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)

The `grid-auto-rows` CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.

### [`grid-auto-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)

The `grid-auto-columns` CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

### [`grid-auto-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)

The `grid-auto-flow` CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

Value: `row` | `column` | `dense`

"dense" packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.

### [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)

The CSS `justify-items` property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis. It aligns the items inside their grid areas on the inline axis.

Value: `stretch` (default) | `start` | `end` | `center`

### [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

The CSS align-items property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

Value: `stretch` (default) | `start` | `end` | `center`

### [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) and [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

#### `justify-content`

defines how the browser distributes space between and around content items along the inline axis of a grid container.

#### `align-content`

sets the distribution of space between and around content items along a grid's block axis.

These two properties only apply if the container is larger than the grid.

Value: `start` (default) | `end` | `center` | `space-around` | `space-between` | `space-evenly`

## Item Properties

### [`grid-row`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

This property is a shorthand for `grid-row-start` and `grid-row-end`.

#### [`grid-row-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)

The `grid-row-start` CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement.

#### [`grid-row-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)

The `grid-row-end` CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement.

### [`grid-column`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

This property is a shorthand for `grid-column-start` and `grid-column-end`.

#### [`grid-column-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)

The `grid-column-start` CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement.

#### [`grid-column-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)

The `grid-column-end` CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement.

### [`grid-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)

This property is a shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`.

**Note** : If a negative integer is given, it instead counts in reverse, starting from the end edge of the **explicit** grid.

- If **four values** are specified, `grid-row-start` is set to the first value, `grid-column-start` is set to the second value, `grid-row-end` is set to the third value, and `grid-column-end` is set to the fourth value.

- When `grid-column-end` is omitted (**three values** were provided), if `grid-column-start` is a `<custom-ident>`, `grid-column-end` is set to it; otherwise, it is set to `auto`.

- When `grid-row-end` is omitted (**two values** were provided), if `grid-row-start` is a `<custom-ident>`, `grid-row-end` is set to it; otherwise, it is set to `auto`.

- When `grid-column-start` is omitted (**one value** was provided), if `grid-row-start` is a `<custom-ident>`, all four longhands are set to that value. Otherwise, it is set to `auto`.

```css
/* grid-row-start: 2; */
/* grid-row-end: 3; */
/* Shorthand */
/* grid-row: 2 / 3; */
/* Even shorter */
grid-row: 2;

/* grid-column-start: 3; */
/* grid-column-end: 4; */
/* Shorthand */
/* grid-column: 3 / 4; */
/* Even shorter */
grid-column: 3;

/* Shorthand for all */
/* grid-area: 2 / 3 / 3 / 4; */
/* Even shorter */
grid-area: 2 / 3;
```

### [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

The `align-self` CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area on the Block Axis. In Flexbox, it aligns the item on the cross axis.

### [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)

The CSS `justify-self` property sets the way a box is justified inside its alignment container along the appropriate axis. In grid layouts, it aligns an item inside its grid area on the inline axis.

## Concepts

### [Grid Tracks](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks)

A grid track is the space between two adjacent grid lines. They are defined in the explicit grid by using the `grid-template-columns` and `grid-template-rows` properties. Tracks are also created in the implicit grid by positioning a grid item outside of the tracks created in the explicit grid.

These tracks are about the space itself and not the grid items, more like how is a grid cell is about the area of the intersection of four grid lines, and not about the grid item.

### [The `fr` unit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#the_fr_unit)

The fr unit represents a fraction of the available space in the grid container.

```css
grid-template-columns: 1fr 2fr 1fr;
```

### [Using the span keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement#using_the_span_keyword)

In addition to specifying the start and end lines by number, you can specify a start line and then the number of tracks you would like the area to span.

```css
/* See the "span" example in the "playground" folder */

/* grid-row: 2 / 3; */
/* grid-column: 1 / span 3; */

/* Shorthand */
grid-area: 2 / 1 / 3 / span 3;
```

### [Naming lines](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines#naming_lines)

The lines created in the explicit grid can be named, by adding the name in square brackets before or after the track sizing information. When placing an item, you can then use these names instead of the line number. A line may have multiple names, e.g. `[col-5th-line col-fifth-line col-last-line]` .

[Naming lines with `repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines#multiple_lines_with_the_same_name_with_repeat)

Note: Should be used for very large layouts.

<!-- prettier-ignore -->
```css
/* Same example as "naming area" above */

.container {
  /* grid-template-rows: repeat(8, [row-auto-line] 5rem) [row-last-line]; */
  grid-template-rows: repeat(8, [start-of-row-number] 5rem [end-of-row-number]) [row-last-line];

  /* grid-template-columns: repeat(4, 15rem); */
  grid-template-columns:
    [col-1st-line col-first-line]
    15rem
    [col-2nd-line col-second-line]
    15rem
    [col-3rd-line col-third-line]
    15rem
    [col-4th-line col-fourth-line]
    15rem
    [col-5th-line col-fifth-line col-last-line];
}

.item--1 {
  /* grid-area: 1 / 1 / 2 / -1; */
  /* grid-area: 1 / col-1st-line / 2 / col-last-line; */

  /* grid-area: row-auto-line 1 / col-first-line / row-auto-line 2 / col-last-line; */

  grid-area: start-of-row-number 1 / col-first-line / end-of-row-number 1 / col-last-line;
}

.item--2 {
  /* grid-area: 2 / 1 / 4 / 2; */
  /* grid-area: 2 / 1 / 4; */

  /* grid-area: row-auto-line 2 / col-1st-line / row-auto-line 4 / col-2nd-line; */

  grid-area: start-of-row-number 2 / col-1st-line / end-of-row-number 3 / col-2nd-line;
}

.item--3 {
  /* grid-area: 2 / 2 / 4 / 3; */
  /* grid-area: 2 / 2 / 4; */

  /* grid-area: row-auto-line 2 / col-2nd-line / row-auto-line 4 / col-3rd-line; */

  grid-area: start-of-row-number 2 / col-2nd-line / end-of-row-number 3 / col-3rd-line;
}

.item--4 {
  /* grid-area: 2 / 3 / 4 / 4; */
  /* grid-area: 2 / 3 / 4; */

  /* grid-area: row-auto-line 2 / col-3rd-line / row-auto-line 4 / col-fourth-line; */

  grid-area: start-of-row-number 2 / col-3rd-line / end-of-row-number 3 / col-fourth-line;
}

.item--5 {
  /* grid-area: 2 / 4 / 8 / 5; */

  /* grid-area: row-auto-line 2 / col-4th-line / row-auto-line 8 / col-last-line; */

  grid-area: start-of-row-number 2 / col-4th-line / end-of-row-number 7 / col-last-line;
}

.item--6 {
  /* grid-area: 4 / 1 / 8 / 4; */

  /* grid-area: row-auto-line 4 / col-1st-line / row-auto-line 8 / col-4th-line; */

  grid-area: start-of-row-number 4 / col-1st-line / end-of-row-number 7 / col-4th-line;
}

.item--7 {
  /* grid-area: 8 / 1 / 9 / -1; */

  /* grid-area: row-auto-line 8 / col-first-line / row-last-line / col-last-line; */

  /* grid-area: start-of-row-number 8 / col-first-line / row-last-line / col-last-line; */
  grid-area: start-of-row-number 8 / col-first-line / end-of-row-number 8 / col-last-line;
}
```

### [Implicit and Explicit Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#implicit_and_explicit_grids)

- Explicit grid: is created using grid-template-columns or grid-template-rows.
- Implicit grid: extends the defined explicit grid when content is placed outside of that grid, such as into the rows by drawing additional grid lines.

By default, tracks created in the implicit grid are auto sized, which in general means that they're large enough to contain their content.

### `max-content`, `min-content`, and `minmax(min, max)`

These keywords can be used for `grid-template-rows` and `grid-template-columns`.

#### [`max-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows#syntax)

Is a keyword representing the largest maximal content contribution of the grid items occupying the grid track.

#### [`min-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows#syntax)

Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track.

#### [`minmax(min, max)`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows#syntax)

Is a functional notation that defines a size range, greater than or equal to min, and less than or equal to max. If max is smaller than min, then max is ignored and the function is treated as min.

## Functions

### [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)

The `repeat()` CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

```css
grid-template-columns: repeat(3, 15rem);
```

#### Value

##### [`auto-fill`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fill)

If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container.

##### [`auto-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fit)

Behaves the same as auto-fill, except that after placing the grid items any empty repeated tracks are collapsed.

## Tips

### Overlapping

It is possible to explicitly place two elements on the same cell(s), which will make one of them hides behind the other. An issue that can be solved by the `z-index` property. Another great possibility is to position these elements independently using `justify-self` and `align-self`.
