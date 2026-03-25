////////////////////////////////////////////////////////////////////////////////
// Memoization - useMemo ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// "useMemo" and "useCallback" are React hooks designed to optimize performance 
// by caching (memoizing) values and functions between renders. 

// They both accept a function as an argument and return a memoized version of 
// the function.

// "useCallback" is a React Hook that lets you cache a 'function definition' 
// between re-renders. Whereas "useMemo" is a React Hook that lets you cache 
// the result of a calculation/function between re-renders.

// Use "useMemo" for expensive calculations (e.g., transforming large arrays).

import { useMemo, useState } from "react";
export const Memoization = () => {
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
            {/* If we write like above, the call isCountTen() will be always
            be called when rendering this parent component. 
            Even if we click the other button 'Random Number' button, 
            the 'randNumber' will ger re-rendered and the isCountTen() 
            also gets called again. 
            This happens because we are calling that function and not just
            passing it to the element.
            */}

            {/* Solution: */}
            <h1>is Count: {count} eq to 10 ? --- {isCountTen}</h1>
            {/* Notice we didn't call it, only passed the function 'isCountTen' .
            Now if we click 'Random Number' button, it wont trigger the isCountTen function.
            Also, useMemo caches the function result so it doesn't evaluate/calculate again 
            unlike in the above case.*/}
            
            <button onClick={handleCount}>Increment</button>
            <hr></hr>
            <h1>Random Number: {randNumber}</h1>
            <button onClick={handleRandNumber}>Random Number</button>
        </>
    );
};
