## [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` should always be included in the HTML `<head>`.
- If there are conflicting media queries, the last one will be applied.
- Responsive units in media queries **do not respond to our defined `rem` setting** in the HTML.
  - One `rem` is not `10px`.
  - One `rem` is always one `em` that always equals `16px`.
  - We should not use `px` nor `rem` (has bugs), but use `em` (current font-size) instead.
- Extremely common screen size is `1366px`. These are HD ready screens.
