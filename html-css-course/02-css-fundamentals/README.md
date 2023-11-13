## Ids vs Class

- An id should be used for one element only.
- Always use classes instead of ids, to be prepared for when you want to add similar elements in the future.

## Color

- RGB rgba(red, green, blue, alpha), is used over hexadecimal only if transparency is needed.
- In RGB, if the values in all three channels are the same, we get a gray color. E.g. rgb(69, 69, 69), that is #444444 (#444).

## Pseudo Classes

- `:first-child` Same as `:nth-child(1)`. Represents an element that is the first child of some other element. It should be noted that it is to be used on elements that has the same type of children, e.g. `ul` and `ol`.
- `:link` pseudo class for `a` elements, applies to links that have not yet been visited, and only if they have `href` attributes.
- `:visited` pseudo class for `a` elements, applies once the link has been visited by the user. It is not commonly used, therefor, visited links should be styled the same as not visited links.
