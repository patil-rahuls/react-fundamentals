////////////////////////////////////////////////////////////////////////////////
// Hooks ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Functions starting with "use" are called Hooks.
// "Hooks" allow functional components to use state and other lifecycle methods.
// e.g.
//    State - "useState" adds "State" to a component.
//    Lifecycle methods - "useEffect" performs side effects(any function) within
//    different phases of a component's lifecycle like Mounting, UnMounting, etc
//
// They make it easier to reuse state and logic across multiple components,
// making code more concise and easier to maintain and read.
//

import { useState } from 'react';
export default function MyApp() {
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
// In the above exmple, Each MyButton have their own copies and states.
// They will work independently and show their own results when clicked.
