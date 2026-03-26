////////////////////////////////////////////////////////////////////////////////
// React Components ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// React apps are made out of components. 
// A component has its own logic and appearance.
// They are the building blocks of any React App.

// We separate our UI into components, where each component matches one piece 
// of your "data model".

// A React Component can accept 'inputs' called "props"
// and manage their own 'appearance/value' called "state".

// Syntax
// 1. It is written as a function.(function name = component name)
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


// IMP - The component should always return a single JSX element.
// Following would fail - 
function Square() {
  return (
    <button className="square"></button> 
    <button className="square"></button>
  );
}

// Solution: React Fragments <>...</>

// React Fragments let you group a list of elements in a component without adding 
// extra nodes to the DOM.
function Square() {
  return (
    <>
      <button className="square"></button>
      <button className="square"></button>
    </>
  );
}
// It renders:
<div id="root">
   <button className="square"></button>
   <button className="square"></button>
</div>

// Note that we could also use a <div> and then add the children in them.
return (
  <div>
    <button className="square"></button>
    <button className="square"></button>
  </div>
);
// It renders:
<div id="root">
  <div>
   <button className="square"></button>
   <button className="square"></button>
  </div>
</div>
// But the empty 'div' can affect SEO performance, 
// Hence its advisable, we use react fragment.
