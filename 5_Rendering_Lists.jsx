////////////////////////////////////////////////////////////////////////////////
// Rendering Lists /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "Keys"
// For each <li> element, a "key" attribute must be there.
// React uses "key" to know what happened to each item if you later insert,
// delete, or reorder the items.
// When you render a list in React (like a list of tasks or products), Keys are the
// unique identifers that help the Virtual DOM's diffing algorithm stay organized.
// Without them, React gets "confused" and might re-render the entire list
// unnecessarily, or worse, mess up your UI state.

// Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings.
// However, they don’t need to be globally unique.
// We can use the same keys when we produce two different arrays.

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={ product.id }>
    { product.title }
  </li>
);

return (
  <ul> { listItems } </ul>
);
// "key" is used internally by React and is not accessible like "props".

// If you don't assign an explicit key to list items then React will default to
// using indexes as keys.
// But array indices are not recommended to be used as "Key" in a list component.

/*
Problem Without Keys:
Imagine you have a list of two items:
        Apple
        Banana.
You decide to add Cherry to the top of the list.

React looks at the first item. Old: Apple. New: Cherry.
React thinks: "Oh, Apple changed to Cherry. Let me rewrite the text."

React looks at the second item. Old: Banana. New: Apple.
React thinks: "Oh, Banana changed to Apple. Let me rewrite the text."

React sees a new third item: Banana.
React thinks: "I'll just create a new element for Banana."

The Result:
React performed three DOM updates because it couldn't tell that "Apple" and "Banana"
simply moved down.

The Solution is to use "Key" which acts as an unique identifier for the item in
a list and helps the Diffing algorithm to get the exact difference.

WHY YOU SHOULD NEVER USE ARRAY INDEX AS "Key"
Imagine if you delete the first item in a list of 10:
    The item that was at index 1 is now at index 0.
    React sees the key for index 0 still exists, but the data inside it changed.
    It tries to "patch" the old element with new data instead of removing the
    correct one.

    This operation can be costly if the list is huge.
*/
