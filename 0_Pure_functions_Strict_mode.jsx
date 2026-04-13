//////////////////////////////////////////////////////////////
// Pure & Impure Functions ///////////////////////////////////
//////////////////////////////////////////////////////////////

// Given the same arguments, the function must always return
// the exact same result everytime and not touch anything
// else (side effect).
// In React, a Pure Function is simply a component that takes
// same set of props and returns same JSX everytime without
// changing anything outside of itself.

// Pure Function/Components are predictable.

function WelcomeLabel({ name }) {
  return <h1>Hello, {name}</h1>;
}
// If you pass name="Alice", it will always render
// <h1>Hello, Alice</h1>.
// It doesn't touch(and depend on) any global variables or
// perform any hidden actions.



//////////////////////////////////////////////////////////////
// Impure Function ///////////////////////////////////////////
//////////////////////////////////////////////////////////////
let guestCount = 5;
function ImpureCounter() {
  guestCount += 1; // Impure: depends on outside variable
  return (
    <div>
        Total Guests: {guestCount}
    </div>
  );
}
// The function defined above is unpredictable because it
// relies on 'guestCount', which could change at any moment.



// React's entire rendering engine is built on the assumption
// that your components are pure functions.



//////////////////////////////////////////////////////////////
// Turning "Impure" into "Pure" (Thinking the React Way) /////
//////////////////////////////////////////////////////////////
// If you need to do something "impure" (like changing a
// variable or fetching data), you must move that logic into
// a useEffect hook. This tells React:
// "Finish rendering the UI first, then run this side effect."
import { useState, useEffect } from 'react';
function PureCounter() {
  const [guestCount, setGuestCount] = useState(0);
  useEffect(() => {
    // This is a "Side Effect," but it is handled safely
    // AFTER the component has been rendered.
    setGuestCount(prev => prev + 1);
  }, []); // Only runs once on mount
  return <div>Total Guests: {guestCount}</div>;
}



//////////////////////////////////////////////////////////////
// Strict Mode: The "Double Render" //////////////////////////
//////////////////////////////////////////////////////////////
// Have you ever noticed your console.log appearing twice in
// development?
// That is React Strict Mode intentionally calling your
// function twice to see if your function is "Pure."

// React expects the "render" phase to be pure.

// Strict Mode double-invokes certain functions (like component
// bodies and state updaters) to ensure they always produce
// the same output for the same input.
// If the two renders produce different results or mess up
// your data, React is helping you find a bug where your
// component is "Impure."

// This happens only in development and not on production.
// So we don't need to remove it for production.

// Strict Mode is there to make these "non-deterministic" bugs
// obvious during development so you can fix them before they
// reach users(production).
