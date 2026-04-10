////////////////////////////////////////////////////////////////////////////////
// Virtual DOM /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// The Virtual DOM (VDOM) is a lightweight, in-memory representation
// (a "virtual" copy or a "blueprint") of your UI that is synchronized with the
// "real" DOM

// The Virtual DOM is a dynamic "blueprint" used by React's diffing algorithm
// to calculate UI updates.

// It is a live javascript object.
/*
e.g.
{
  type: 'div',
  props: {
    className: 'container',
    children: [
      { type: 'h1', props: { children: 'Hello World' } }
    ]
  }
}
*/



////////////////////////////////////////////////////////////////////////////////
// When a state change occurs (like clicking a button),
// React follows a certain sequence(1-4):

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



////////////////////////////////////////////////////////////////////////////////
// Rendering ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////////////
// Initial Rendering:
// Initial Rendering happens when your app starts up.
// The very first time the UI is built using a 'blueprint' based on our code
// before any state is manipulated or before any action is taken by user.


///////////////////////////
// Re-rendering:
// If something changes—like a user clicks a button or data arrives from the
// internet, React re-runs the "script" only for that particular component to
// see if the UI needs to look different.


///////////////////////////
// Mounting:
// Mounting is the process of a component being created and inserted into the
// DOM for the first time.
// React sets up the component's initial "state" (their memory)
// and puts the actual HTML elements into the browser's view.


///////////////////////////
// Unmounting:
// It’s when a component is removed from the DOM.
// The component is destroyed. Its HTML is scrubbed from the
// browser, and its "memory" is cleared out.


//////////////////////////////////////////////////////
// A react hook called "useEffect" can be used to perform actions(side-effects)
// on a component mount and unmount.


// Rendering Happens in 2 Phases:

// 1. The Render Phase (The "Planning" Stage) - Asynchronous
//      This phase is where React does the heavy thinking.
//      It is asynchronous and can be paused or interrupted to prioritize urgent tasks like user typing.
//      Trigger:
//          An update is triggered by the initial mount or a state/prop change.
//      Virtual Tree Construction:
//          React calls your component functions to see what they want to return.
//          It builds a Virtual DOM (a tree of JavaScript objects).
//      Reconciliation (Diffing):
//          React compares the new virtual tree with the previous one to identify
//          exactly what changed.
//      Fiber Architecture:
//          React uses "Fiber" nodes to break this work into small chunks.
//          It can process a few components, "yield" back to the browser to handle
//          a click or animation, and then resume its work.

 // 2. The Commit Phase (The "Acting" Stage) Synchronous
//      Once the plan is ready, React hands it over to a Renderer (like react-dom for web).
//      Unlike the render phase, this stage is synchronous and cannot be interrupted,
//      ensuring the user never sees a partial UI update.
//      Mutation:
//          React surgically applies changes—like appendChild() or removeNode()
//          only to the parts of the real DOM that actually changed.
//      Layout & Paint:
//          The browser takes these changes, recalculates the layout (reflow),
//          and paints the new pixels on your screen.
//      Cleanup & Effects:
//          After the screen updates, React runs useLayoutEffect (before paint)
//          and useEffect (after paint).



///////////////////////
// Fiber Architecture:
///////////////////////
// React Fiber is the internal engine that enables Concurrent Rendering.
// It allows React to break down rendering into small units of work so the
// browser's main thread stays responsive to the user.

// A "Fiber" is actually a JavaScript Object that contains information about a
// component, its state, and its relationship to other components.


// Advantages of Virtual DOM:

// 1. Batching:
//      If you update 5 different pieces of state at once, React won't update the
//      Real DOM 5 times.
//      It will wait, finish the "Virtual" work, and update the Real DOM once.

// 2. Predictability:
//      You don't have to manually tell the browser which element to find and change
//      (e.g., document.getElementById).
//      You just change the data, and React handles the surgical update.
