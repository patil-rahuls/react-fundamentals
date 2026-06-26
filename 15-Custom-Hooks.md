## Custom Hooks

We need to prefix our file name with `"use"` _e.g. "useCustomHook"_

```javascript
// File: ../hooks/useCustomCounter.jsx
import { useState } from "react";

export const useCustomCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrment = () => {
    setCount(count + 1);
  };
  
  return {
    count, handleIncrment
  };
};


// Usage:
// Main File: MyApp
import { useCustomCounter } from "../hooks/useCustomCounter"

export const MyApp = () => {
  const {count, handleIncrment} = useCustomCounter();
  // We returned an object from our custom hook and 
  // not an array, hence we just destructed it.
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrment}>Increment Counter
      </button>
    </>
  );
};
```
---

&nbsp;

From the example of loading fetch and displaying data. Here is a custom hook that can be re-used in different components.

```javascript
import { useState, useEffect } from 'react';

// The hook accepts a URL string as an argument
export function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch data for that resource');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false); // Hide loading
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false); // Hide loading even on failure
      });
  }, [url]); // The effect re-runs if the URL changes

  // Return the states as an object so components can consume them
  return { data, isLoading, error };
}


// Usage:
import { useFetch } from './useFetch';

function UserProfile() {
  // Call the custom hook and destructure the values
  const { data: user, isLoading, error } = useFetch('https://typicode.com');

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

```
---
