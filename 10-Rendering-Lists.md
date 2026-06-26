## Rendering Lists

> **_"Keys"_**

For each `<li>` element, a `"key"` attribute must be there. When you render a list in React (like a list of tasks or products), Keys are the unique identifers used by the Virtual DOM.

Without them, React gets "confused" and might re-render the entire list unnecessarily, or worse, mess up your UI state.

Keys help React identify which items have changed, been added, or been removed. It optimizes the reconciliation process, ensuring the browser only re-renders modified DOM nodes instead of recreating the whole list.

> Example:
> ```javascript
> const products = [
>   { title: 'Cabbage', id: 'p1' },
>   { title: 'Garlic', id: 'p2' },
>   { title: 'Apple', id: 'p3' },
> ];
> const listItems = products.map(product =>
>   <li key={ product.id }>
>     { product.title }
>   </li>
> );
> return (
>   <ul> { listItems } </ul>
> );
> ```
> _`"key"` is used internally by React and is not accessible like "props"._

If you don't assign an explicit key to list items then React will default to using indexes as keys. But array indices are not recommended to be used as `"Key"` in a list component.

#### WHY YOU SHOULD NEVER USE ARRAY INDEX AS "Key" ?

Imagine if you delete the first item in a list of 10:

  - The item that was at index `1` is now at index `0`. React sees the key for index `0` still exists, but the data inside it changed.
  - It tries to _"patch"_ the old element with new data instead of removing the correct one. This operation can be costly if the list is huge and hence is NOT RECOMMENDED!


#### Problem Without Keys:

Imagine you have a list of two items and you decide to add "Cherry" to the top of this list.

```
<li> Apple </li>
<li> Banana </li>
```

React looks at the first item.
| Old | New |
| :--: | :--: |
| Apple | **Cherry** |
|||

React evaluates it as _"Apple changed to Cherry"_ and rewrites the `<li>` element.

React looks at the second item.
| Old | New |
| :--: | :--: |
| Banana | **Apple** |
|||

React evaluatesit as _"Banana changed to Apple"_ and rewrites the `<li>` element.

React sees a new third item: _"Banana"_

React evaluates it as _"Create a new `<li>` element for Banana"_

The Result:
_React performed three DOM updates because it couldn't tell that "Apple" and "Banana" simply moved down._

_The Solution is to use `"key"` which acts as an unique identifier for the item in a list and helps the Diffing algorithm to get the exact difference.

---
