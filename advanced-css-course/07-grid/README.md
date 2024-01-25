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

**Note** : If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

- If **four values** are specified, `grid-row-start` is set to the first value, `grid-column-start` is set to the second value, `grid-row-end` is set to the third value, and `grid-column-end` is set to the fourth value.

- When `grid-column-end` is omitted (**three values** were provided), if `grid-column-start` is a `<custom-ident>`, `grid-column-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

- When `grid-row-end` is omitted (**two values** were provided), if `grid-row-start` is a `<custom-ident>`, `grid-row-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

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

## Concepts

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

## Functions

### [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)

The `repeat()` CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

```css
grid-template-columns: repeat(3, 15rem);
```

## Tips

- It is possible to explicitly place two elements on the same cell(s), which will make one of them hides behind the other.
