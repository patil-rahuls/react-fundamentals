## Virtual DOM 

It is a lightweight, in-memory representation (a "virtual" copy or a "blueprint") of your UI that is synchronized with the "real" DOM.

The Virtual DOM is a dynamic "blueprint" used by React's `diffing` algorithm to calculate UI updates.

_It is a live javascript object._
```javascript
{
  type: 'div',
  props: {
    className: 'container',
    children: [ { 
      type: 'h1', 
      props: { 
        children: 'Hello World' 
      }
    }]
  }
}
```

### Advantages of Virtual DOM
- Batching:
    
  _If you update 5 different pieces of state at once, React won't update the Real DOM 5 times. It will wait, finish the "Virtual" work, and update the Real DOM once._


- Predictability:

  _You don't have to manually tell the browser which element to find and change (e.g., document.getElementById). You just change the data, and React handles the 'surgical update'._

&nbsp;

---
### Render Sequence

When a state change occurs (like clicking a button), React follows a certain sequence(1-4):

1. Initial Render

    _When your app first loads, React calls your component function. It creates a Virtual DOM tree object in the memory. React "paints" the Real DOM to match this virtual DOM._


2. The "Snapshot" (Render)

    _After the initial render, whenever any state changes, React creates a brand new Virtual DOM tree. (whenever any changes occur thereafter, new Virtual DOMs keep getting created)._

3. "Diffing" (Reconcilation)

    _React compares the two virtual DOMs-_
    
    _The current one and the previous one._
    
    _And finds out the exact change that is happened. e.g. `'src'` of an img tag is changed, `'textContent'` of a span is changed, etc. This algorithm is called `"Diffing"`._

4. The "Patch" (Commit) 

    The **"surgical update"**.

    _Once React knows exactly which elements are different, it creates a "patch" of only those changes. It then goes to the Real DOM and updates only those specific spots._

5. _Once React finishes updating the Real DOM, the old Virtual DOM is discarded(garbage collected), and the current Virtual DOM instantly becomes Old one to be compared with the next new one._

    This cycle repeats for the next render.

---
&nbsp;

### Component's Rendering & Lifecycle

- Initial Rendering:

  Initial Rendering happens when your app starts up. The very first time the UI is built using a 'blueprint' based on our code before any state is manipulated or before any action is taken by user.


- Re-rendering:

  If something changes—like a user clicks a button or data arrives from the internet(API Call), React re-runs the "script" only for that particular component to see if the UI needs to look different.


- Mounting:

  Mounting is the process of a component being created and inserted into the DOM for the first time. React sets up the component's initial "state" and puts the actual HTML elements into the browser's view.


- Unmounting:

  It’s when a component is removed from the DOM. The component is destroyed. Its HTML is scrubbed from the browser, and its "memory" is cleared out.

  A react hook called `"useEffect"` can be used to perform actions(side-effects) on a component mount and unmount.

---
