////////////////////////////////////////////////////////////////////////////////
// Conditional Rendering ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// We can render the components conditionally.

// 1. We can have JSX component assigned to a JavaScript variable.
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

// Above example can also be written simply as follows:
return (
  <div>
    { isLoggedIn ? <AdminPanel /> : <LoginForm /> }
  </div>
);

// or simply:
return (
    <div>
        { isLoggedIn && <AdminPanel /> }
    </div>
);
