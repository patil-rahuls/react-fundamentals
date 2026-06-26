## Hooks 

"Hooks" allow functional components to use state and the lifecycle methods.

e.g.
   - State -
       
      `"useState"` hook adds `"State"` to a component.
   
   - Lifecycle methods -
      `"useEffect"` hook performs _'side effects'_ within different phases of a component's lifecycle like _Mounting, Unmounting, etc._

They make it easier to reuse state and logic across multiple components, making code more concise and easier to maintain and read.

_React hooks start with `'use'`._

> Example: `useState`
> ```javascript
> import { useState } from 'react';
>
> export default function MyApp() {
>   return (
>     <div>
>       <h1>Counters that update separately</h1>
>       <MyButton />
>       <MyButton />
>     </div>
>   );
> }
>
> function MyButton() {
>
>   const [count, setCount] = useState(0);
>
>   function handleClick() {
>     setCount(count + 1);
>   }
>
>   return (
>     <button onClick={handleClick}>
>       Clicked {count} times
>     </button>
>   );
> }
> ```
> _In the above exmple, each "MyButton" have their own copies and states. They will work independently and show their own results when clicked._

&nbsp;

> Example: `useEffect` - show loading, fetch and display data to a div and then hide loading.
>
> ```javascript
> 
> import { useState, useEffect } from 'react';
>
> function ShowUserProfile() {
>   // 1. Set up states for data, loading, and errors
>   const [data, setData] = useState(null);
>   const [isLoading, setIsLoading] = useState(true);
>   const [error, setError] = useState(null);
> 
>   // 2. fetch side-effect when the component mounts
>   useEffect(async () => {
>     // Show loading state when starting a fresh fetch
>     setIsLoading(true);  
>
>     try{
>       const result = await fetch('https://test.com/api/user/123');
>       const data = await result.json();
>       setData(data);
>     } catch(err) {
>       setError(err.message);
>     } finally {
>       setIsLoading(false);
>     }
>
>
>   }, []);
> 
>   // 3. Conditional rendering based on current state i.e. loading or error
>   if (isLoading) {
>     return <div>Loading user data...</div>;
>   }
> 
>   if (error) {
>     return <div>Error: {error}</div>;
>   }
> 
>   // 4. Finally display data when ready.
>   return (
>     <div className="profile-card">
>       <h2>User Information</h2>
>       <p><strong>Name:</strong> {data.name}</p>
>       <p><strong>Email:</strong> {data.email}</p>
>       <p><strong>Company:</strong> {data.company.name}</p>
>     </div>
>   );
> }
> ```

---
