## Conditional Rendering

We can render the components conditionally.

We can have JSX component assigned to a JavaScript variable and use them in conditional statements.

```javascript
let content;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

return (
  <div>
    {content}
  </div>
);
```

_Above example can also be written simply as follows:_
```javascript
return (
  <div>
    { isLoggedIn ? <AdminPanel /> : <LoginForm /> }
  </div>
);
```

>`Booleans`, `null`, and `undefined` are completely ignored and render nothing. They are highly useful for conditional rendering _(e.g., `{showMenu && <Menu />}`)_.
>
> _The above example can be re-written as follows:_ 
> ```javascript
> return (
>   <div>
>     { isLoggedIn && <AdminPanel /> }
>   </div>
> );
> ```
> 
> _`isLoggedIn` above if false, will not print `false`; it will render nothing._
>
> _IMP: If `isLoggedIn` evaluates to the number `0`, React will actually print the `0` on your screen because **numbers are valid render outputs**._

Numbers and Text are valid render outputs.

&nbsp;

> Example: Gaurd clause. _Returning Early_.
>
> Returning `null` from a component renders absolutely nothing.
```javascript
function UserProfile({ isLoading, userData }) {
  // 1. Early return for loading state
  if (isLoading) {
    return <div>Loading profile data...</div>;
  }

  // 2. Early return if data is missing
  if (!userData) {
    return null; // Returning null renders absolutely nothing
  }

  // 3. Default return if all conditions are met
  return <h1>Welcome, {userData.name}</h1>;
}
```
---