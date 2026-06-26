## JSX - JavaScript XML

> **_JSX is a 'syntax extension' for JavaScript to use HTML like code directly in JavaScript files._**

```javascript
const LearnJSX = () => {
  return (
    <>
      {/* JSX Comments */}

      {
        // Works only if the brace is on the next line
      }

      <h1>Hello World</h1>
      {/* React.createElement("h1", "null", "Hello World"); */}

      {/* JS expression inside curly braces: {...} */}
      <h3>Price: { 10+30 } </h3>

      {/* Attributes in a JSX element. */}
      <h1 className="bg-primary">Price: {10+30}</h1>
      {/* "className" is a JSX syntax which gets transformed to 'class' in html. */}

      {/* Child component */}
      <SomeComponent
        prop="value" // This comment is valid here
      />

    </>
  );
}
```
---
