////////////////////////////////////////////////////////////////////////////////
// Virtual DOM /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// The Virtual DOM (VDOM) is a lightweight, in-memory representation
// (a "virtual" copy or "blueprint") of the actual Document Object Model (DOM).

/*
// Fiber Architecture:
// React Fiber is the internal engine that enables Concurrent Rendering.
// It allows React to break down rendering into small units of work so the
// browser's main thread stays responsive to the user.

The "Pause and Resume" Ability
Imagine a Chef (React) cooking a 10-course meal.
Old React:
    The Chef starts the meal and refuses to look at the dining room until all
    10 courses are plated.
    If a fire starts in the dining room, the Chef doesn't notice.

React Fiber:
    The Chef plates one dish, looks at the dining room to see if there's an
    emergency (like a user click), and if everything is fine, plates the second
    dish. If there is an emergency, the Chef pauses cooking to handle the
    emergency, then comes back to the kitchen.

A "Fiber" is actually a JavaScript Object that contains information about a
component, its state, and its relationship to other components.
*/

////////////////////////////////////////////////////////////////////////////////
// When a state change occurs (like clicking your counter button),
// React follows this exact sequence:

// 0. Initial Render
// When your app first loads, React calls your component function.
// It creates a Virtual DOM tree object in the memory.
// React "paints" the Real DOM to match this virtual DOM.
// Crucial Step: React saves the Virtual DOM in its memory

// 1. The "Snapshot" (Render)
// When your state changes, React creates a brand new Virtual DOM tree.
// On the initial render, it creates a new Virtual DOM, and whenever any
// changes occur thereafter, new Virtual DOMs keep getting created.

// 2. "Diffing" (Reconcilation)
// React compares the two virtual DOMs. The current one and the previous one.
// And finds out the exact change that is happened.
//  e.g. 'src' of an img tag is changed, 'textContent' of a span is changed, etc.
// The algorithm is called "Diffing".

// 3. The "Patch" (Commit) - The "surgical update"
// Once React knows exactly which elements are different, it creates a "patch" of
// only those changes.
// It then goes to the Real DOM and updates only those specific spots.

// 4.
// Once React finishes updating the Real DOM, The old Virtual DOM is discarded
// (garbage collected),the current Virtual DOM instantly becomes the new Current one.

// This cycle repeats for the next render.
////////////////////////////////////////////////////////////////////////////////


// Advantages of Virtual DOM:

// 1. Batching:
//      If you update 5 different pieces of state at once, React won't update the
//      Real DOM 5 times.
//      It will wait, finish the "Virtual" work, and update the Real DOM once.

// 2. Predictability:
//      You don't have to manually tell the browser which element to find and change
//      (e.g., document.getElementById).
//      You just change the data, and React handles the surgical update.
