## Id vs Class

- An id attribute should be used for one element only.
- Always use classes instead of ids, to be prepared for when you want to add similar elements in the future.

## Color

- RGB rgba(red, green, blue, alpha), is used over hexadecimal only if transparency is needed.
- In RGB, if the values in all three channels are the same, we get a gray color. E.g. `rgb(69, 69, 69)`, that is `#444444` (`#444`).

## Pseudo Classes

- The`:nth-child` pseudo class, matches elements based on the indexes of the elements in the child list of their parents, e.g. `:nth-child(2)` would match the second element. Key words like `odd` and `even` can be used instead of a number.
- The`:first-child` pseudo class, same as `:nth-child(1)`, represents an element that is the first child of some other element. It should be noted that it is to be used on elements that has the same type of children, e.g. `ul` and `ol`.
- The`:link` pseudo class for `a` elements, applies to links that have not yet been visited, and only if they have `href` attributes.
- The`:visited` pseudo class for `a` elements, applies once the link has been visited by the user. It is not commonly used, therefor, visited links should be styled the same as the not visited links.
- The`:hover` pseudo class is to apply specific style while hovering the target element.
- The`:active` pseudo class is to apply specific style while clicking the target element.
