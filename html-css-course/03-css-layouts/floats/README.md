## Intro

The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

### Notes

- `float`ed element only differ from an `absolute` positioned element, in that the `absolute` positioned element will have no impact on the surrounding elements.
- When all children of an element are set to `float`, its height would collapse. To fix that, we create a dummy element in that parent and give it the `clear` property. This element has to be a block-level element. This element can be a `div` or a `pseudo` element.
- `clear`ing the `float` can be useful even if the height hasn't been collapsed. Like in the case of preventing the next non-`float`ed sibling from floating around its previous sibling. We do it by giving the non-`float`ed sibling the `clear` property.
