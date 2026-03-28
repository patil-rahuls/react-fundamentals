////////////////////////////////////////////////////////////////////////////////
// useEffect ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// The useEffect hook in React allows developers to perform side effects such as
// data fetching, setting up/cleaning up timers, in the lifecycle of any
// functional components.

// The useEffect hook takes two arguments -
//      1. a function(side-effect) to run after every render and
//      2. an array of dependencies that determines when the effect should be run.

// In the below example, we have -
// A Random Number generator button and an h1 tag showing the random number.
import { useEffect, useState } from "react";
export const RandomNumberApp = () => {
    const [randNumber, setRandNumber] = useState(null);
    const handleRandNumber = () => {
        const newRandNumber = Math.floor(Math.random() * 100);
        setRandNumber(newRandNumber);
    };

    // Scenario 1 -
    // It runs each time when this component(RandomNumberApp) is mounted and
    // when any other child component within this component is rendered each
    // time.
    useEffect(() => {
        console.log('useEffect was called.');
        // Not a good idea to hit APIs using this method because every
        // single render will trigger a request to the server.
        // causing unnecessary network requests, performance issues, and
        // possibly infinite loops if the fetch causes state updates that trigger
        // re-renders.
    });

    // Scenario 2 -
    // Empty dependency array, runs only when the component is mounted.
    useEffect(() => {
        console.log('useEffect was called with empty Dependency.');
    }, []);

    // Scenario 3 -
    // Using a State dependency.
    // Runs when the component is mounted and whenever the dependent state(mentioned)
    // in the dependency array, changes.
    useEffect(() => {
        console.log('useEffect was called with a Dependency.');
    }, [randNumber]);
    // This will run first on mount and then only whenever the state "randNumber"
    // gets changed.

    // Scenario 4 -
    // Cleanup Function.
    // We return a function from useEffect, usually called a "Clean-Up function"
    // CleanUp function runs when the component unmounts and when the dependent state
    // (mentioned) in the dependency array, changes BEFORE NEW EFFECT RUNS.
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
    // ( You Click the button)
    // The dependency is changed, so BEFORE RE-RENDERING NEW State it triggers the
    // CleanUp Function, which logs:
        // "Disconnected socket connection."
    // And then:
        // "Creating socket connection..."
    // (Let's say the component now gets unmounted)
    // The Cleanup function would again get called.
        // "Disconnected socket connection."

    // Whenever state "randNumber" changes, the cleanup function is called BEFORE
    // NEW EFFECT RUNS.

    // If dependencies are not provided. []
    useEffect(() => {
        console.log('Creating socket connection...');
        // Return a clean-up function.
        return () => {
            console.log('Disconnected socket connection.')
        };
    }, []);
    // The cleanup only runs once—when the component unmounts.

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
