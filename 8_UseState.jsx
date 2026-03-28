////////////////////////////////////////////////////////////////////////////////
// State ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "state" is a way we use to store and manage data that changes over time
// within a component.

// It can be updated using the setState() method and
// is used to control the behavior and rendering of a component.

// We use a React Hook called "useState" to control components' state.
// (Hooks are explained in "8_Hooks" file)

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);  // 0 is the default value for "count".
  // Convention [something, setSomething]
  // ...
}
// useState(0) returns 2 things:
//    the current state (count), and
//    the function that lets you update it (setCount).
// 0 (parameter) is the default value of the current state(count).



// Example 1
import { useState } from 'react';
function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}



// Example 2
import { useState } from "react";
export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleCount = (change) => {
    setCount(count + change);
  };
  const handleResetCount = () => {
    setCount(0);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCount(1)}>Incr.</button>
      <button onClick={handleResetCount}>Reset</button>
      <button onClick={() => handleCount(-1)}>Decr.</button>
    </>
  );
};
