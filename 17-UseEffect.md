## useEffect

The `"useEffect"` hook in React allows developers to perform _'side effects'_ such as data fetching, setting up/clearing up timers, in the lifecycle of any functional components.

> The "useEffect" hook takes two arguments -
> 
> 1. a function(side-effect) and
> 
> 2. an array of dependencies that determines when the effect should be run.

In the following example, we have -

A random number generator button and an h1 tag showing the random number.

```javascript
import { useEffect, useState } from "react";

export const RandomNumberApp = () => {
  
  const [randNumber, setRandNumber] = useState(null);
  const handleRandNumber = () => {
    const newRandNumber = Math.floor(Math.random()*100);
    setRandNumber(newRandNumber);
  };

  // Scenario 1 -

  // It runs each time when this component(RandomNumberApp)
  // is mounted and when any other child component within
  // this component is rendered each time.
  useEffect(() => {
    console.log('useEffect called.');
    // Not a good idea to hit APIs using this method because
    // every single render will trigger a request to the
    // server causing unnecessary no. of network requests,
    // performance issues, and possibly infinite loops if
    // the fetch causes state updates that trigger re-renders.
  });
  // ------------------------------------------------

  // Scenario 2 -

  // Empty dependency array, runs only when the component
  // is mounted.
  useEffect(() => {
    console.log('useEffect called with empty Dependency.');
  }, []);
  // ------------------------------------------------

  // Scenario 3 -

  // Using a State dependency.
  // Runs when the component is mounted and whenever the
  // dependent state mentioned in the dependency array,
  // changes.
  useEffect(() => {
    console.log('useEffect called with a Dependency.');
  }, [randNumber]);
  // This will run first on mount and then only whenever
  // the state "randNumber" gets changed.
  // ------------------------------------------------

  // Scenario 4 -

  // Cleanup Function.
  // We return a function from useEffect, usually called
  // a "Clean-Up function" cleanUp function runs when the
  // component unmounts and when the dependent state
  // (mentioned) in the dependency array changes BEFORE ANY
  // NEW EFFECT RUNS.
  useEffect(() => {
    console.log('Creating socket connection...');
    
    // Return a clean-up function.
    return () => {
      console.log('Disconnected socket connection.')
    };
  }, [randNumber]);

  //   What happens?
  //   At the very first, the component is mounted,
  //   which will the log:
  //      "Creating socket connection..."
  //   When the button is clicked
  //   The dependency is changed, so BEFORE RE-RENDERING
  //   NEW State it triggers the CleanUp Function, which
  //   logs:
  //      "Disconnected socket connection."
  //   And then:
  //      "Creating socket connection..."
  //   (Let's say the component now gets unmounted)
  //   The Cleanup function would again get called.
  //      "Disconnected socket connection."

  //   Whenever the state "randNumber" changes, the cleanup
  //   function is called BEFORE NEW EFFECT RUNS.

  // Scenario 4 when dependencies are not provided. []
  useEffect(() => {
    console.log('Creating socket connection...');
    
    // Return a clean-up function.
    return () => {
      console.log('Disconnected socket connection.')
    };
  }, []);
  // The cleanup only runs once—when the component unmounts.
  // ------------------------------------------------
    
  return (
    <>
      <h1>Random Number: {randNumber}</h1>
      <button onClick={handleRandNumber}>
        Random Number
      </button>
    </>
  );
};
```

Use cases of Cleanup Functions -
    
  - Abort ongoing asynchronous operations:
      
    - Canceling pending fetch requests using an _`AbortController`_.

    - Disconnecting from live web sockets or chat channels

    - Clear timers or intervals: If you subscribe to an event, or set up a timer, cleanup cancels or removes these when they're no longer needed.
    
  - Avoid memory leaks:
      
    When components unmount, cleanup functions prevent lingering subscriptions, timers, or event listeners that could cause memory leaks or unexpected behavior.
    
  - Manage subscriptions or event listeners:
    
    Removing global window/DOM event listeners _(`removeEventListener`)_

    Add event listeners (like window resize or scroll) or subscribe to data sources, and clean them up to prevent multiple subscriptions.

&nbsp;

> Example: abort the ongoing fetch call if any if the component unmounts. (using the same useFetch custgom Hook example):
```javascript
import { useState, useEffect } from 'react';

export function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create an instance of the AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    setError(null);

    // 2. Pass the signal configuration into the fetch options
    fetch(url, { signal: signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch data for that resource');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((err) => {
        // 3. Ignore errors caused intentionally by our abort action
        if (err.name === 'AbortError') {
          console.log('Fetch successfully aborted!');
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    // 4. CLEANUP FUNCTION: Triggered on unmount or URL change
    return () => {
      controller.abort();
    };
  }, [url]); 

  return { data, isLoading, error };
}

```

---
