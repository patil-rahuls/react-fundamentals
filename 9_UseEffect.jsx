////////////////////////////////////////////////////////////////////////////////
// useEffect ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// The useEffect hook in React allows developers to perform side effects such as
// data fetching, setting up/cleaning up timers, in functional components.
//
// It runs after every render, including the first render, and after the render
// is committed to the screen.
//
// The useEffect hook takes two arguments -
//      1. a function to run after every render and
//      2. an array of dependencies that determines when the effect should be run.
//         If the dependency array is empty or absent, the effect will run after
//         every render.

// In the below example, we have -
// A Random Number generator button and an h1 tag showing the random number.
import { useEffect, useState } from "react";

export const RandomNumberApp = () => {
    const [randNumber, setRandNumber] = useState(null);
    const handleRandNumber = () => {
        const newRandNumber = Math.floor(Math.random() * 100);
        setRandNumber(newRandNumber);
    };

    // Exanple 1 -
    // It runs each time when this component(RandomNumberApp) is mounted and
    // when anything in this component is rendered each time.
    useEffect(() => {
        console.log('useEffect was called.');
        // Not a good idea to hit APIs using this method because every
        // single render will trigger a request to the server.
        // causing unnecessary network requests, performance issues, and
        // possibly infinite loops if the fetch causes state updates that trigger
        // re-renders.
    });

    // Example 2 -
    // Empty dependency array, so fetch runs only once on mount.
    // Runs only once when the component is mounted.
    useEffect(() => {
        console.log('useEffect was called with empty Dependency.');
    }, []);

    // Example 3 -
    // Using a State dependency.
    // Runs when the component is mounted and whenever the dependent state(mentioned)
    // in the dependency array, changes.
    useEffect(() => {
        console.log('useEffect was called with a Dependency.');
    }, [randNumber]);
    // This will run first on mount and then only when the state "randNumber" gets
    // changed.

    // Example 4 -
    // Cleanup Function.
    // We reutrn a function from useEffect. It runs when the component unmounts or
    // whenever the dependent state(mentioned) in the dependency array, changes.
    // What's Mount and unmount.
    // When the randNumber value gets changed from (let's say) 10 to 34,
    // React first unmounts that previous value i.e. 10, and mounts new value 34.
    useEffect(() => {
        console.log('Creating socket connection...');
        // Return a clean-up function.
        return () => {
            console.log('Disconnected socket connection.')
        };
    }, [randNumber]);
    // What happens?
    // At the very first, when the component is mounted, which will the log:
    // "Creating socket connection..."
    // Then, on clicking the button to generate random Number, the previous value
    // (let's say) '10' will be unmounted, and new value gets mounted.
    // When the previous value is unmounted, the clean up function will
    // be called.
    // "Disconnected socket connection."
    // And when the new value gets mounted, then the callback inside the
    // useEffect will be called.

    // Whenever state "randNumber" changes, the cleanup function is called BEFORE
    // NEW EFFECT RUNS.

    // Use cases -
    // Abort ongoing asynchronous operations:
    //      If you start a fetch request, subscribe to an event,
    //      or set up a timer, cleanup cancels or removes these when they're no longer needed.
    // Avoid memory leaks:
    //      When components unmount, cleanup functions prevent lingering subscriptions,
    //      timers, or event listeners that could cause memory leaks or unexpected behavior.
    // Manage subscriptions or event listeners:
    //      Add event listeners (like window resize or scroll) or subscribe to data sources,
    //      and clean them up to prevent multiple subscriptions.
    // Clear timers or intervals:
    //      If you use setTimeout or setInterval, cleanup clears them to avoid executing
    //      code after the component is gone.

    return (
        <>
            <h1>Random Number: {randNumber}</h1>
            <button onClick={handleRandNumber}>Random Number</button>
        </>
    );
};
