## State

"state" is a way we use to store and manage data that changes over time within a component.

It can be updated and is used to control the behavior and rendering of a component.

We use a React Hook called `"useState"` to control components' state.

```javascript
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  // Convention [something, setSomething]
  // ...
}
```
> _`useState(0)` returns 2 things:_
>
>   _the current state - `count`_
>
>   _the function that lets you update it - `setCount`. "0" (the passed argument) is the default value of the state (`count`)._

&nbsp;

> Example 1
```javascript
import { useState } from 'react';

function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

&nbsp;

> Example 2
```javascript
import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  
  const handleCount = (change) => {
    setCount(count + change);
  };
  
  const handleResetCount = () => {
    setCount(0);
  }
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCount(1)}>
        Incr.
      </button>
      <button onClick={handleResetCount}>
        Reset
      </button>
      <button onClick={() => handleCount(-1)}>
        Decr.
      </button>
    </>
  );
};
```

## State vs Props

- `props` are read-only data passed down from a parent.

- `state` is a component's private, self-managed memory that can change over time.

---
