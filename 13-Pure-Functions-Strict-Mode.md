## Pure Function

A function is considered pure if it follows two strict rules:

- Same Input = Same Output: Every single time you give it the exact same inputs, it will render the exact same output.
- No Side Effects: It does not modify variables outside its scope.

> Example: _Given name="Rahul", it always renders `<h1>Hello, Rahul</h1>`_
> ```javascript
> function Greeting({ name }) {
>   return <h1>Hello, {name}</h1>;
> }
> ```

It doesn't touch(and depend on) any global variables or perform any hidden actions.

> **_IMP: Pure Function/Components are predictable._**

---
&nbsp;
## Impure Function
A function is impure if it breaks either of those rules.

- Calling it with the same inputs can produce a different output.
- It causes side effects (mutates external variables, writes to a file, fetches data from the internet, or modifies the DOM).

> ```javascript
> let guestCount = 5;
> function ImpureCounter() {
>   guestCount += 1; // Impure: depends on outside variable
>   return (
>     <div>
>         Total Guests: {guestCount}
>     </div>
>   );
> }
> ```
> _The function defined above is unpredictable because it relies on `'guestCount'`, which could change at any moment._


&nbsp;
---

### Turning "Impure" into "Pure" (Thinking the React Way)

React's entire rendering engine is built on the assumption that your components are pure functions.

As a developer, you need impure actions. You have to fetch data from APIs, manually change the browser document title, or start timers.

If you need to do something "impure" (like changing a variable or fetching data), you must move that logic into a `useEffect` hook. 

It tells React - _"Finish rendering the UI first, then run this side effect."_
```javascript
import { useState, useEffect } from 'react';

function PureCounter() {
  
  const [guestCount, setGuestCount] = useState(0);
  
  useEffect(() => {
    // This is a "Side Effect," but it is handled safely
    // AFTER the component has been rendered.
    setGuestCount(prev => prev + 1);
  }, []); // Only runs once on mount
  
  return <div>Total Guests: {guestCount}</div>;
}
```
---

&nbsp;

### Strict Mode: The "Double Render"

Have you ever noticed your console.log appearing twice in development?

That is `React Strict Mode` intentionally calling your function twice to see if your function is `"Pure"`.

React expects the "render" phase to be pure.

Strict Mode double-invokes certain functions _(like component bodies and state updaters)_ to ensure they always produce the same output for the same input.

If the two renders produce different results or mess up your data, React is helping you find a bug where your component is "Impure."

This happens only in development and not on production. So we don't need to remove it for production.

Strict Mode is there to make these "non-deterministic" bugs obvious during development so you can fix them before they reach users(production).

---
