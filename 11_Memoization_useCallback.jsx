////////////////////////////////////////////////////////////////////////////////
// Memoization - useCallback ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "useMemo" and "useCallback" are React hooks designed to optimize performance
// by caching (memoizing) values and functions between renders.

// "useMemo" is a React Hook that lets you cache the result of a calculation
// between re-renders.

// "useCallback" is a React Hook that lets you cache a 'function definition'
// between re-renders.

// Use "useMemo" for expensive calculations (e.g., transforming large arrays).
// Use "useCallback" when passing functions to child components to prevent
// unnecessary re-renders of the child.


// memo()
// To use useCallback, we use a HOC(Higher Order Component) called memo();
// It memoizes the rendering of a functional component.

// It prevents re-renders of the component if props haven't changed.

// Useful when you have components that are rendering with same props but don't need
// to update those props change. Its a waste of resource, if we are unnecesary
// updating a prop if its not changing, with the same value.

// File: ../components/RandomNumberComponent.jsx
import memo from "react";
// We pass the function inside the memo().
export const RandomNumberComponent = memo(
    ({ randomNumber, generateRandomNumber}) => {
        console.log(`"Generate Random Number" Component is Rendered!`);
        return (
            <>
                <h2>Random Number: ${randomNumber}</h2>
                <button onClick={generateRandomNumber}> Generate </button>
            </>
        );
    }
);

// File: MyApp
import RandomNumberComponent from "../components/RandomNumberComponent";
import { useCallback , useState} from "react";
export const MyApp = () => {
    // Counter
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    // Random Number
    const [randNumber, setRandNumber] = useState(null);
    // const handleRandNumber = () => {
    //     const newRandNumber = Math.floor(Math.random() * 100);
    //     setRandNumber(newRandNumber);
    // };
    // The above handleRandNumber will be called every time any change happens in this
    // component. i.e. even if we click on the counter button, this function will still
    // get execited.
    // Hence we use useCallback along with the dependency array.
    const handleRandNumber = useCallback(() => {
        const newRandNumber = Math.floor(Math.random() * 100);
        setRandNumber(newRandNumber);
    }, [randNumber]);
    // Th behaviour of rendering only based on dependency is similar to other hooks like
    // useEffect, useMemo, etc.

    return (
        <>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
            <RandomNumberComponent randomNumber={randNumber} generateRandomNumber={handleRandNumber}/>
        </>
    );
};
