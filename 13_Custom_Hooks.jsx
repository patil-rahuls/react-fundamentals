/////////////////////////////////////////////////////////////
// Custom Hooks /////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// We need to prefix our file name with "use"
// e.g. "useCustomHook"

// File: ../hooks/useCustomCounter.jsx
import { useState } from "react";
export const useCustomCounter = () => {
  const [count, setCount] = useState(0);
  const handleIncrment = () => {
    setCount(count + 1);
  };
  return {
    count, handleIncrment
  };
};

// Usage:
// Main File: MyApp
import { useCustomCounter } from "../hooks/useCustomCounter"
export const MyApp = () => {
  const {count, handleIncrment} = useCustomCounter();
  // We returned an object from our custom hook and not an
  // array, hence we just destructed it.
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrment}>Increment Counter
      </button>
    </>
  );
};
