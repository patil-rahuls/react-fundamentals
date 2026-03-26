////////////////////////////////////////////////////////////////////////////////
// Hooks ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Functions starting with "use" are called Hooks. 
// "Hooks" are a feature in React that allow functional components to have state 
// and other lifecycle methods without using class components. 
// 
// They make it easier to reuse state and logic across multiple components, 
// making code more concise and easier to read. 
// 
// e.g. 
// "useState" adds state.
// "useEffect" performs side effects in response to changes in state or props.
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


// “lifting state up”. By moving the state up, so that it is shared between components.
export default function MyApp() {
  const [count, setCount] = useState(0); // Lifted up from MyButton component to it's parent
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      // Here the 'count', 'handleClick' are called "props".
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
