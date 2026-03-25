////////////////////////////////////////////////////////////////////////////////
// Memoization - useCallback ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "useMemo" and "useCallback" are React hooks designed to optimize performance 
// by caching (memoizing) values and functions between renders. 

// They both accept a function as an argument and return a memoized version of 
// the function.

// "useCallback" is a React Hook that lets you cache a 'function definition' 
// between re-renders. Whereas "useMemo" is a React Hook that lets you cache 
// the result of a calculation between re-renders

// Use "useCallback" when passing functions to child components to prevent 
// unnecessary re-renders of the child.

import { useMemo, useState } from "react";
export const MemoizationApp = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    };

    const [randNumber, setRandNumber] = useState(null);
    const handleRandNumber = () => {
        const newRandNumber = Math.floor(Math.random() * 100);
        setRandNumber(newRandNumber);
    };

    // The syntax is similar to useEffect, the last parameter is dependency 
    // array containing state to which the callback of useMemo() is dependent.
    const isCountTen = useMemo(() => {
        console.log('isCountTen called');
        if(count === 10){
            return "Yes";
        }
        return "No";
    }, [count]);

    return (
        <>
            {/* <h1>is Count: {count} eq to 10 ? --- {isCountTen()}</h1> */}
            {/* The call isCountTen() in the above element will be always be called 
            when rendering this component 'Memoization'. 
            Even if we click the other button 'Random Number' button, some part 
            of this component gets re-rendered i.e. 'randNumber', and the isCountTen() 
            also gets called. */}

            <h1>is Count: {count} eq to 10 ? --- {isCountTen}</h1>
            {/* Notice we didn't call it, only passed the function 'isCountTen' .
            Now if we click 'Random Number' button, it wont trigger the isCountTen function.
            Also, useMemo caches the entire function so it doesn't evaluate/calculate again 
            unlike the above method. */}
        
            <button onClick={handleCount}>Increment</button>
            <hr></hr>
            <h1>Random Number: {randNumber}</h1>
            <button onClick={handleRandNumber}>Random Number</button>
        </>
    );
};

// Use "useMemo" for -
// 1. Skipping expensive recalculations.
//    When the states dont change often, but the component have 
//    expensive operations(transforming/filtering large arrays).
// 2. 
