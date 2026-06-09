/////////////////////////////////////////////////////////////
// Memoization - memo ///////////////////////////////////////
/////////////////////////////////////////////////////////////

memo()
// It memoizes the rendering of a whole functional component.
// It prevents re-renders of the component if props haven't
// changed.
// Useful when you have components that are rendering with
// same props but don't need to update those props change.
// Its a waste of resource if we are unnecesary updating
// a prop if its not changing, with the same value.

// How it works?
// We use memo() to wrap a component if it frequently
// re-renders with the same props.
// It performs a shallow comparison of props; if the props
// are identical to the previous render, React skips the
// re-render of that component and its entire subtree.

// Example:
// We have an 'App' Component which has a counter and a
// child component 'ChildComponent'.
// Every time the counter state changes, the 'App'
// component(function) is called.
// Due to the  React's reconcilation algorithm, only the
// value of the counter changes on the screen.
// But here Reconcilation doesn't affect how any Child
// components render. They by default re-render EVEN IF
// THEIR APPEARANCE DON'T CHANGE.

// Parent Component -
import { useState } from 'react';
import ChildComponent from './components/ChildComponent';
export const App = () => {
  // Counter
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <ChildComponent />
      {/* The ChildComponent, if not cached,  will always
          re-render even if it's appearance/state
          remains same.
        */}

      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </>
  );
};
// Child Component -
// Since this component is not cached, it will always
// re-render when its parent component's state changes
// even though its appearance/state remains same.
export const ChildComponent = () => {
  return(
    <>
      <h1>Child Component</h1>
    </>
  );
};

// Solution -
// We use memo() to wrap this Child component
// to memoize the entire functional component.
import memo from 'react';
export const ChildComponent = memo(
  () => {
    return(
      <>
        <h1>Child Component</h1>
      </>
    );
  }
);
