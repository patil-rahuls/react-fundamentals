## React Fiber

### **Stack Reconciler vs Fiber Tree (Linked List)**

The old React(Stack Reconciler) used the Browser's Call Stack for execution.

> _Imagine you have a component `App` that renders `Header` and `Content`. In the old stack model, the execution would look conceptually like this:_
>
> ```javascript
> function render(element) {
>   // 1. Create the instance or DOM node
>   const instance = createInstance(element); 
>   
>   // 2. RECURSION: If this element has children, 
>   // the engine calls render() again for every child.
>   if (element.children) {
>     element.children.forEach(child => render(child));
>   }
>   
>   // 3. Return to parent
>   return instance;
> }
> ```
> 
> _Why this is a "Recursive Function":_
> 
> _When the engine calls render() for `App`, it pushes App onto the browser's Call Stack._
> 
> _When App calls render() for `Header`, Header is pushed on top of App. The browser must finish everything inside Header before it can pop Header off and return to App._
> 
> _The "Trap": If your tree is 1,000 nodes deep, you have 1,000 frames/functions on the call stack. The browser cannot stop this process; the main thread gets busy in executing these functions in the stack resulting in sluggish UI._

In the Fiber architecture, React replaced that recursive function with a `while` loop. **It turns the reconciliation process into a linked-list-based tree traversal that can be paused, aborted, or resumed.**

**React Fiber** enables Concurrent Rendering. It allows React to break down rendering into small _"units of work" (nodes)_ so the browser's main thread stays responsive to the user.


|Feature|Old Stack Reconciler|New Fiber Reconciler|
|:---|:---|:---|
|Logic|Recursive (uses call stack) |Iterative (uses a loop)|
|Control|Browser manages the stack|React manages the "work" manually|
|Interruptibility|Impossible|Possible|
|||


> **The Fiber Node**: A plain JavaScript object that represents a _"unit of work"_. It contains component type, props, state, and pointers to its first-child, sibling, and return (parent).

***Why these pointers matter***: These pointers turn your UI tree into a Linked List. This allows React to traverse the tree using a while loop instead of recursion. If it needs to stop, it simply saves the current node's reference and resumes later.




> **Rendering Happens in 2 Phases:**
>
> 1. **The Render Phase _(the "Planning" Stage)_ - Asynchronous**
>    
>    It is asynchronous and can be paused or interrupted to prioritize urgent tasks like user typing/scrolling.
>
>    When you trigger a state update (like setState), React doesn't immediately modify the DOM. Instead, it creates a parallel tree of Fiber nodes—***the WIP tree***.
>
>     &nbsp;
>
>     _The Current Tree: What's currently rendered on screen._
>
>     _The WIP Tree: What should be rendered on screen next._
> 
>     &nbsp;
>
>     The "Work-in-Progress" (WIP) tree is effectively a blueprint of the next state of your application, created while the current version is still displayed on the screen.
>
>     The _"unit of work"_ we talked about is not actually some functionality to be executed, its the information about the new state that needs to be displayed next. The _"unit of work"_ is stored in the Fiber nodes themselves. Each Fiber node has a `pendingProps`, `memoizedProps`, `pendingState`, and `memoizedState`.
>
>     React uses a process called **double buffering** (a technique borrowed from graphics rendering). It builds the WIP tree in the background. Once the tree is fully "prepared" (all calculations, lifecycle methods, and hooks are run), React simply swaps the "Current" pointer to point to the new WIP tree.
>
>     &nbsp;
>
>     **Priority Lanes**
>
>     React uses something called Lanes (a bitmask system) to track the priority of different tasks.
>     
>     _The Input/Suggestion Task: Assigned a high-priority "lane" (e.g., InputContinuousLane)._
>
>     _The Background Rendering Task: Assigned a lower-priority "lane" (e.g., DefaultLane)._
>
>     Lets see the example of user typing when a page is getting rendred.
>
>     &nbsp;
>
>     When you are typing:
> 
>     React starts working on the background task (the WIP tree).
> 
>     The browser detects a user input event. React’s Scheduler checks: _"Does this event have a higher priority than the work I am currently doing?"_
> 
>     Since the user input is higher priority, React suspends the work on the background WIP tree. It saves the progress of that tree in memory.
> 
>     React immediately switches focus to the high-priority task (updating the input field and showing the suggestions). Because this is a small, fast update, it likely completes quickly and commits immediately.
> 
>     Once the high-priority "suggestions" task is committed to the DOM, React goes back to the saved state of the background WIP tree and continues where it left off(using tree pointers saved in the memory when paused).
>
>     &nbsp;
>
> 2. **The Commit Phase _(the "Acting" Stage)_ Synchronous**
>    
>    This stage is synchronous and cannot be interrupted, ensuring the user never sees a partial UI update.
>    
>    React surgically applies changes—like `appendChild()` or `removeNode()` only to the parts of the real DOM that actually changed.


The Fiber Tree (a linked list of objects) allows React to treat the UI tree as a graph that it can traverse at its own pace using the pointers.

***The fiber tree builds and manages the Virtual DOM.***

> Imagine you are typing in an input field (high priority) while a list is re-rendering (low priority).
>
> React can be in the middle of traversing the list tree.
>
> Because it’s a linked list, React can essentially "abandon" that work-in-progress tree, jump to the top, and re-traverse the input field's branch to update the UI instantly.
>
> It doesn't need to "unwind" a massive stack of function calls; it just changes its starting point for the traversal.


---
