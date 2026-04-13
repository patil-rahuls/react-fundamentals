//////////////////////////////////////////////////////////////
// Rendering Lists ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// "Keys"
// For each <li> element, a "key" attribute must be there.
// When you render a list in React (like a list of tasks or
// products), Keys are the unique identifers that help the
// Virtual DOM's diffing algorithm stay organized.

// Without them, React gets "confused" and might re-render
// the entire list unnecessarily, or worse, mess up your UI
// state.

// Example:
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
// "key" is used internally by React and is not accessible
// like "props".
// If you don't assign an explicit key to list items then
// React will default to using indexes as keys.
// But array indices are not recommended to be used as
// "Key" in a list component.

//////////////////////////////////////////////////////////////
// WHY YOU SHOULD NEVER USE ARRAY INDEX AS "Key"
//////////////////////////////////////////////////////////////
// Imagine if you delete the first item in a list of 10:
//     The item that was at index 1 is now at index 0.
//     React sees the key for index 0 still exists, but the
//     data inside it changed.
//     It tries to "patch" the old element with new data
//     instead of removing the correct one.
//     This operation can be costly if the list is huge and
//     is NOT RECOMMENDED!



//////////////////////////////////////////////////////////////
// Problem Without Keys:
//////////////////////////////////////////////////////////////
// Imagine you have a list of two items:
//         Apple
//         Banana.
// You decide to add Cherry to the top of the list.

// React looks at the first item.
//        Old: Apple |  New: Cherry
// React evaluates: "Apple changed to Cherry" and rewrites.

// React looks at the second item.
//        Old: Banana |  New: Apple
// React evaluates: "Banana changed to Apple" and rewrites.

// React sees a new third item: "Banana"
// React evaluates: "Create a new element for Banana"

// The Result:
// React performed three DOM updates because it couldn't
// tell that "Apple" and "Banana" simply moved down.

// The Solution is to use "key" which acts as an unique
// identifier for the item in a list and helps the Diffing
// algorithm to get the exact difference.
