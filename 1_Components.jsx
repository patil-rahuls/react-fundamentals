//////////////////////////////////////////////////////////////
// React Components //////////////////////////////////////////
//////////////////////////////////////////////////////////////

// React apps are made out of components.
// A component has its own logic and appearance.
// They are the building blocks of any React App.

// We separate our UI into components, where each component
// matches one piece of your "data model".

// A React Component can accept 'inputs' called "props"
// and manage their own 'appearance/value' called "state".

// Syntax
// 1. It is written as a function.
// 2. Component name starts with a capital letter.
// 3. Returns only a single React element.
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
// Usage: <MyButton />


// A Component can be nested into another component.
function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton /> {/* Nested Component */}
    </div>
  );
}


// IMP - The component should always return a single JSX
// element. Following would fail -
function Square() {
  return (
    <button className="square"></button>
    <button className="square"></button>
  );
}
// Solution: React Fragments <>...</>
// React Fragments let you group a list of elements in a
// component without adding extra nodes to the real DOM.
function Square() {
  return (
    <>
      <button className="square"></button>
      <button className="square"></button>
    </>
  );
}
// Outputs:
<div id="root">
   <button className="square"></button>
   <button className="square"></button>
</div>

// Note that we could also use a <div> and then add the
// children in them.
return (
  <div>
    <button className="square"></button>
    <button className="square"></button>
  </div>
);
// Outputs:
<div id="root">
  <div>
   <button className="square"></button>
   <button className="square"></button>
  </div>
</div>
// But the extra empty 'div' created can affect SEO
// performance, Hence its advisable, we use react fragment.



//////////////////////////////////////////////////////////////
// Component LifeCycle ///////////////////////////////////////
//////////////////////////////////////////////////////////////
// 1. Mounting:
//    Mounting is the process of a component being created
//    and inserted into the DOM for the first time.
//    React sets up the component's initial "state"
//    and puts the actual HTML elements into the browser's view.

// 2. Updates:
//    This happens whenever state changes.
//    The component "re-renders" to reflect the new data.

// 3. Unmounting:
//    It’s when a component is removed from the DOM.
//    The component is destroyed. Its HTML is scrubbed from the
//    browser, and its "memory" is cleared out.
//    (e.g., you navigate to a different page).

// IMP: Mount and Unmount is only for the React component and not
// individual HTML elements. In a Counter app example, when the
// counter value is updated, it simply re-renders that component
// which is showing the value. Its the diffing algo that decides
// to update only the required parts of the components.

// Component Lifecycle can be observed using "useEffect" hook.
