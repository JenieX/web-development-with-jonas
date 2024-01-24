# Grid

## Container Properties

### [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

The `grid-template-rows` CSS property defines the line names and track sizing functions of the grid rows.

```css
grid-template-rows: repeat(2, 15rem);
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

---

## Concepts

### [The `fr` unit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#the_fr_unit)

The fr unit represents a fraction of the available space in the grid container.

```css
grid-template-columns: 1fr 2fr 1fr;
```

## Functions

### [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)

The `repeat()` CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

```css
grid-template-columns: repeat(3, 15rem);
```
