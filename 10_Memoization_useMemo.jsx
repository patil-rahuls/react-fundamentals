////////////////////////////////////////////////////////////////////////////////
// Memoization - useMemo ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "useMemo" and "useCallback" are React hooks designed to optimize performance
// by caching (memoizing) values and functions between renders.

// "useMemo" is a React Hook that lets you cache the result of a calculation
// between re-renders. That result could be a property or state.

// "useCallback" is a React Hook that lets you cache a 'function definition'
// between re-renders.

// Use "useMemo" for expensive calculations (e.g., transforming large arrays).
// Use "useCallback" when passing functions to child components to prevent
// unnecessary re-renders of the child.

import { useMemo, useState } from "react";
export const MyApp = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    };

    const [randNumber, setRandNumber] = useState(null);
    const handleRandNumber = () => {
        const newRandNumber = Math.floor(Math.random() * 100);
        setRandNumber(newRandNumber);
    };

    // const isCountTen = () => {
    //     console.log('isCountTen called');
    //     if(count === 10){
    //         // Observe that we didn't pass "count" to this callback.
    //         // It is automatically referenced from the dependency array.
    //         return "Yes";
    //     }
    //     return "No";
    // };

    // The syntax is similar to useEffect, the last parameter is dependency
    // array containing state to which the callback of useMemo() is dependent.
    const isCountTen = useMemo(() => {
        console.log('isCountTen called');
        if(count === 10){
            // Observe that we didn't pass "count" to this callback.
            // Its automatically referenced within this Component i.e. 'MyApp'
            return "Yes";
        }
        return "No";
    }, [count]);
    // Even if we didn't pass "count" in the dependency array, still we can use
    // it in the callback function of useMemo().

    return (
        <>
            {/* <h1>is Count: {count} eq to 10 ? --- {isCountTen()}</h1> */}
            {/* If we write like above, the call isCountTen() will be always
            be called when rendering this parent component.
            Even if we click the other button 'Random Number' button,
            the 'randNumber' will ger re-rendered and the isCountTen()
            also gets called again.
            */}

            {/* Solution: */}
            <h1>is Count: {count} eq to 10 ? --- {isCountTen}</h1>
            {/* Notice we didn't call it, only passed the function 'isCountTen' .
            Now if we click 'Random Number' button, it wont trigger the isCountTen function.
            Also, useMemo caches the function "result" so it doesn't evaluate/calculate
            again unlike in the above case.*/}

            <button onClick={handleCount}>Increment</button>
            <hr></hr>
            <h1>Random Number: {randNumber}</h1>
            <button onClick={handleRandNumber}>Random Number</button>
        </>
    );
};

// Use "useMemo" for -
// Skipping expensive recalculations.
//    When the states dont change often, but the component have
//    expensive operations(transforming/filtering large arrays).
