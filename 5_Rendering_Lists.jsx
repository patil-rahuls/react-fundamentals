////////////////////////////////////////////////////////////////////////////////
// Rendering Lists /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// For each <li> element, a "key" attribute must be there.
// React uses "key" to know what happened if you later insert, delete, or 
// reorder the items.

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

// If you don't assign an explicit key to list items then React will default to 
// using indexes as keys.
// But array indices are not recommended to be used as "Key" in a list component.

// "key" is used internally by React and is not accessible like "props".
