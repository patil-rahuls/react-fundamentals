////////////////////////////////////////////////////////////////////////////////
// Pure Functions //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Given the same arguments, the function must always return the exact same
// result and not touch anything else(side effect).
// In React, a Pure Function is simply a component that takes props and returns
// JSX without changing anything outside of itself.

// Pure Function/Components are predictable.

// PURE: Same props always result in the same JSX
function WelcomeMessage({ name }) {
    return <h1>Hello, {name}</h1>;
    // If you pass name="Alice", it will always render <h1>Hello, Alice</h1>.
    // It doesn't touch any global variables or perform hidden actions.
}


// Impure Function
// This function is unpredictable because it relies on guestCount, which could
// change at any moment.
let guestCount = 5;
function ImpureCounter() {
    guestCount += 1; // Impure: depends on outside variable
    return (
        <div>
            Total Guests: {guestCount}
        </div>
    ) ;
}

// React's entire rendering engine is built on the assumption that your
// components are pure functions.
// When you write a functional component, React expects it to be a "formula":
//          Props + State -> JSX

// Turning "Impure" into "Pure" (The React Way)
// If you need to do something "impure" (like changing a variable or fetching data),
// you must move that logic into a useEffect hook.
// This tells React: "Finish rendering the UI first, then run this side effect."
import { useState, useEffect } from 'react';
function PureCounter() {
  const [guestCount, setGuestCount] = useState(0);
  useEffect(() => {
    // This is a "Side Effect," but it's handled safely
    // AFTER the component has rendered.
    setGuestCount(prev => prev + 1);
  }, []); // Only runs once on mount

  return <div>Total Guests: {guestCount}</div>;
}




// Strict Mode: The "Double Render"
// Have you ever noticed your console.log appearing twice in development?
// That is React Strict Mode intentionally calling your function twice.

// It does this to see if your function is "Pure."
// If the two renders produce different results or mess up your data, React is
// helping you find a bug where your component is "Impure."
