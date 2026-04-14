/////////////////////////////////////////////////////////////
// Memoization - memo & useCallback /////////////////////////
/////////////////////////////////////////////////////////////

// Two imp things:
//      1. memo()
//      2. useCallback()

// 1.
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
// It performs a shallow comparison of props; if the props are
// identical to the previous render, React skips the re-render
// of that component and its entire subtree.




// 2.
useCallback()
// It memoizes a function definition between renders.
// Use "useCallback" when passing a function as a prop
// to a child component wrapped in memo(). Without
// useCallback, the child will re-render every time
// because it sees a "new" function prop, even if the
// code inside hasn't changed.

// Secondary Case:
//    When a function is a dependency in other hooks like
//    useEffect.


// Example:

// File: ../components/RandomNumberComponent.jsx
import memo from "react";
// We pass the function inside the memo().
export const RandomNumberComponent = memo(
  ({ randomNumber, generateRandomNumber}) => {
    console.log(`"RandomNumberComponent" Component`);
      return (
        <>
          <h2>Random Number: ${randomNumber}</h2>
          <button onClick={generateRandomNumber}>
            Generate
          </button>
        </>
      );
  }
);

// File: MyApp
import RandomNumberComponent from "../RandomNumberComponent";
import { useCallback , useState } from "react";
export const MyApp = () => {
    // Counter
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount(count + 1);
    }

    // Random Number
    const [randNumber, setRandNumber] = useState(null);
    // const handleRandNumber = () => {
    //  const newRandNumber = Math.floor(Math.random()*100);
    //  setRandNumber(newRandNumber);
    // };
    // The above will be called every time when any change
    // happens in this component. i.e. even if we click on
    // the counter button, this function will still get
    // executed.
    // Hence we use 'useCallback' hook along with the dependency
    // array.
    const handleRandNumber = useCallback(() => {
      const newRandNumber = Math.floor(Math.random()*100);
      setRandNumber(newRandNumber);
    }, [randNumber]);

    return (
      <>
        <button onClick={handleClick}>
          Clicked {count} times
        </button>
        <RandomNumberComponent
          randomNumber={randNumber}
          generateRandomNumber={handleRandNumber}
        />
      </>
    );
};
