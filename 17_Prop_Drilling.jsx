////////////////////////////////////////////////////////////////////////////////
// Prop Drilling ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Prop Drilling refers to the process of passing data from a parent component
// down to a deeply nested child component through several layers of intermediary
// components that don't actually need the data themselves.

/* e.g.
"App Component" (Holds the "user" data)
      |
 "Navigation"   (Doesn't need "user")
      |
  "UserMenu"    (Doesn't need "user")
      |
   "Avatar"    (Needs the "user" image)
*/
// To get the data to the Avatar, you have to pass it as a "prop" through
// Navigation --> UserMenu, even though those components have no use for that
// information.

// Whats the Problem:
// 1. Refactoring Pain:
//      If you rename a prop or change its data structure, you have to update it
//      in every component along the chain.

// 2. Repetitiveness:
//      It litters your code with repetitive props,
//      making components harder to read.

// 3. Component Purity:
//      It forces intermediary components to be aware of data that isn't relevant
//      to their specific function, breaking the principle of encapsulation.


// How to solve it?

// 1. Context API -
//      Built-in to React, this allows you to create a context and its "provider"
//      that wraps your app.
//      Any child, no matter how deep, can "plug in" to that context and
//      grab the data directly.

// 2. Redux -
//      A State Management Library.
//      Creates a global store that sits outside the component tree, allowing
//      any component to access state without passing props at all.
