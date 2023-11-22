## Intro

Flexbox is a one-dimensional layout method for arranging items in rows (default) or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.

Flexbox conveniently solve issues like:

- Vertically centering a block of content inside its parent.
- Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Making all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

#### Notes

- Setting `display: flex;` on container element (flex container) would enable Flexbox. Children of this element are called flex items.
- Horizontally, by default, each flex item takes up exactly the space that is necessary for its text content. And Vertically, by default, all the flex items are as tall as the tallest one of them.

## `align-items`

The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.

#### Values:

- `align-items: center;`
- `align-items: flex-start;`
- `align-items: flex-end;`
